# React-yearly-calendar

A [ReactJS](http://facebook.github.io/react/) input component that manages multiple languages.

[![npm version](https://badge.fury.io/js/react-translatable-input.svg)](https://badge.fury.io/js/react-translatable-input)
![Alt text](https://img.shields.io/badge/license-MIT-green.svg?style=flat)

```bash
$ npm install --save react-translatable-input
```

<!-- # Demo
**[http://belkalab.github.io/react-translatable-input/](http://belkalab.github.io/react-translatable-input)** -->

![react-translatable-input screenshot](examples/screen.png)

## Options

No time to write the docs yet. So here's the _propTypes_ object instead:

```js
TranslatableInput.propTypes = {
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
```

## Build it yourself

Clone and run

```bash
$ npm install
```

## Contributors
[Giovanni Frigo](https://github.com/giovannifrigo), Developer @[Belka](https://github.com/BelkaLab)

## License
react-translatable-input is Copyright (c) 2016 Belka, srl. It is free software, and may be redistributed under the terms specified in the LICENSE file.  

## About Belka
![Alt text](http://s2.postimg.org/rcjk3hf5x/logo_rosso.jpg)

[Belka](http://belka.us/en) is a Digital Agency specialized in design, mobile applications development and custom solutions.
We love open source software! You can [see our projects](http://belka.us/en/portfolio/) or look at our case studies.

Interested? [Hire us](http://belka.us/en/contacts/) to help build your next amazing project.

[www.belka.us](http://belka.us/en)
