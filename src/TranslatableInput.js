import React, { Component, PropTypes } from 'react';
import Select from 'react-select';
import 'react-select/dist/react-select.css';
import 'flag-icon-css/css/flag-icon.min.css';

const propTypes = {
  lang: PropTypes.string.isRequired,    // The current editing language
  values: PropTypes.object.isRequired,  // The object containing the translated strings

  onLanguageChange: PropTypes.func,     // Callback on language selection
  onValueChange: PropTypes.func,        // Callback on text entered
  onKeyDown: PropTypes.func,            // Callback on keydown when text input is focused

  placeholder: PropTypes.string,        // The placeholder to show when the input field is empty
  classes: PropTypes.string,            // Additional HTML classes to pass to the component
  disabled: PropTypes.bool,             // Is the component disabled?
  showLanguageName: PropTypes.bool,     // Show the language name label next to the flag?
  langTranslator: PropTypes.func        // Translate iso langage codes to language names
};

class TranslatableInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isFocused: false
    };
  }

  keyPressed(e) {
    const { onKeyDown } = this.props;

    if (typeof (onKeyDown) === 'function') {
      onKeyDown(e);
    }
  }

  changeLanguage(lang) {
    const { onLanguageChange } = this.props;

    if (typeof (onLanguageChange) === 'function') {
      onLanguageChange(lang);
    }
  }

  changeValue(value) {
    const { onValueChange, lang } = this.props;

    if (typeof (onValueChange) === 'function') {
      onValueChange(value, lang);
    }
  }

  focused(isFocused) {
    this.setState({
      isFocused
    });
  }

  renderFlag(option) {
    const { showLanguageName, langTranslator } = this.props;

    if (!option.value.match(/[a-z]{2}-[a-z]{2}/i)) {
      // the default language
      const defaultName = typeof (langTranslator) === 'function' ? langTranslator('default') : 'default';
      return (
        <div>
          <div
            className="flag-icon flag-icon-default"
            title={option.value}
          />
          { showLanguageName ? <div>{defaultName}</div> : null }
        </div>
      );
    }


    const langName = typeof (langTranslator) === 'function' ? langTranslator(option.value) : option.value;
    return (
      <div>
        <div
          className={`flag-icon flag-icon-${option.value.split('-')[1].toLowerCase()}`}
          title={option.value}
        />
        { showLanguageName ? <div>{langName}</div> : null }
      </div>
    );
  }

  render() {
    const { values, lang, classes } = this.props;
    const { isFocused } = this.state;

    const langOptions = Object.keys(values)
        .filter(l => l.match(/[a-z]{2}-[a-z]{2}/i))
        .map(l => ({ label: l, value: l }));

    // put default language on top of the list, if present
    if (values.hasOwnProperty('default')) {
      langOptions.unshift({ label: 'default', value: 'default' });
    }

    let componentClasses = 'TranslatableInput';
    if (isFocused) {
      componentClasses += ' is-focused';
    }
    if (typeof (classes) === 'string') {
      componentClasses += ` ${classes}`;
    }

    return (
      <div className={componentClasses}>
        <Select
          value={lang}
          options={langOptions}
          valueRenderer={value => this.renderFlag(value)}
          optionRenderer={option => this.renderFlag(option)}
          onChange={val => this.changeLanguage(val)}
          searchable={false}
          clearable={false}
          disabled={this.props.disabled}
          onFocus={() => this.focused(true)}
          onBlur={() => this.focused(false)}
        />
        <input
          type="text"
          value={values[lang]}
          onChange={e => this.changeValue(e.target.value)}
          onKeyDown={e => this.keyPressed(e)}
          placeholder={this.props.placeholder}
          disabled={this.props.disabled}
          onFocus={() => this.focused(true)}
          onBlur={() => this.focused(false)}
        />
      </div>
    );
  }
}

TranslatableInput.propTypes = propTypes;

export default TranslatableInput;
