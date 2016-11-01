import React from 'react';
import ReactDOM from 'react-dom';
import TranslatableInput from 'react-translatable-input';

import 'react-translatable-input/dist/react-translatable-input.css';

class Demo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: {
        'it-IT': 'Un componente input che permette di inserire il testo in varie lingue',
        default: 'An input component that allows the input of multiple languages',
        'de-DE': 'dasdad',
        'en-US': 'An input component that allows the input of multiple languages'
      },
      editingLanguage: 'it-IT',
    };
  }

  handleLocalizedChange(value, lang) {
    const { title } = this.state;
    title[lang] = value;
    this.setState({
      title
    });
  }

  changeEditingLang(editingLanguage) {
    this.setState({
      editingLanguage
    });
  }

  render() {
    const { title, editingLanguage } = this.state;
    const nameError = false;

    return (
      <div>
        <TranslatableInput
          id="section-name-editor"
          values={title}
          lang={editingLanguage}
          classes={nameError ? 'error' : ''}
          onValueChange={(value, lang) => this.handleLocalizedChange(value, lang)}
          onLanguageChange={lang => this.changeEditingLang(lang)}
          onKeyDown={e => this.onKeyDown(e)}
          showLanguageName={false}
          disabled={false}
          placeholder={'placeholder'}
        />
      </div>
    );
  }
}

ReactDOM.render(
  <Demo />,
  document.getElementById('demo')
);
