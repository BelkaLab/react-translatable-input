import React from 'react';
import ReactDOM from 'react-dom';
import TranslatableInput from 'react-translatable-input';

import 'react-translatable-input/dist/react-translatable-input.css';

import { getLanguageName } from 'language-cultures';

// an helper function to translate language codes to language name.
// in real life, this would be managed by an i18n manager such as polyglot.js
function translateLanguage(lang) {
  if (lang === 'default') {
    return 'Default';
  }
  return getLanguageName(lang);
}

const demoLanguages = ['it-IT', 'en-US', 'de-DE'];

class Demo extends React.Component {
  constructor(props) {
    super(props);

    // Fill in demo data
    const title = {
      default: 'Default post title'
    };
    demoLanguages.forEach((c) => {
      title[c] = `Post title in ${getLanguageName(c)}`;
    });

    const description = {
      default: ''
    };
    demoLanguages.forEach((c) => {
      description[c] = '';
    });

    const content = {
      default: 'Default field is used when the user language is not supported/can\'t be detected'
    };
    demoLanguages.forEach((c) => {
      content[c] = `Post content in ${getLanguageName(c)}`;
    });

    this.state = {
      title,
      description,
      content,
      editingLanguage: 'it-IT'
    };
  }

  handleValueChange(value, lang, stateName) {
    const state = this.state[stateName];
    state[lang] = value;

    const partialState = {};
    partialState[stateName] = state;

    this.setState(partialState);
  }

  handleLanguageChange(editingLanguage) {
    this.setState({
      editingLanguage
    });
  }

  render() {
    const { title, description, content, editingLanguage } = this.state;
    const nameError = false;

    return (
      <div>
        <div className="line">
          <h2>Create new post</h2>
        </div>

        <div className="line">
          <label htmlFor="title">Title</label>
          <label htmlFor="description">Description</label>
          <TranslatableInput
            id="title"
            values={title}
            lang={editingLanguage}
            classes="inline"
            onValueChange={(value, lang) => this.handleValueChange(value, lang, 'title')}
            onLanguageChange={lang => this.handleLanguageChange(lang)}
            showLanguageName
            placeholder={'Post title'}
          />
          <TranslatableInput
            id="description"
            values={description}
            lang={editingLanguage}
            classes={!description[editingLanguage] ? 'error inline' : 'inline'}
            onValueChange={(value, lang) => this.handleValueChange(value, lang, 'description')}
            onLanguageChange={lang => this.handleLanguageChange(lang)}
            langTranslator={lang => translateLanguage(lang)}
            placeholder={'Post description'}
          />
        </div>

        <div className="line">
          <label htmlFor="content">Content</label>
          <TranslatableInput
            id="content"
            values={content}
            lang={editingLanguage}
            classes={nameError ? 'error' : ''}
            onValueChange={(value, lang) => this.handleValueChange(value, lang, 'content')}
            onLanguageChange={lang => this.handleLanguageChange(lang)}
            langTranslator={lang => translateLanguage(lang)}
            showLanguageName
            textarea
            placeholder={'Post content'}
          />
        </div>

        <div className="line">
          <label htmlFor="metatag">Metatag</label>
          <TranslatableInput
            id="metatag"
            values={{ default: 'Belka, React, Input, Translatable, Form, Multilanguage, Internazionalization, i18n' }}
            lang="default"
            langTranslator={lang => translateLanguage(lang)}
            showLanguageName
            disabled
          />
        </div>
      </div>
    );
  }
}

ReactDOM.render(
  <Demo />,
  document.getElementById('demo')
);
