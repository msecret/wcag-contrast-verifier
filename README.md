# wcag-contrast-verifier

[![Build Status](https://secure.travis-ci.org/msecret/wcag-contrast-verifier.png?branch=master)](http://travis-ci.org/msecret/wcag-contrast-verifier)

Check that two colors are wcag AA and AAA compliant.

## Getting Started
Install the module with: `npm install wcag-contrast-verifier`

```javascript
var verify = require('wcag-constrast-verifier').verify;

var result = verify('#ffffff', '#aa3177', 22);
// -> {WCAG_AA: true|false, WCAG_AAA: true|false}
var result = verify(
  {r: 255, g: 100, b: 150},
  {r: 50, g: 100, b: 150},
  12
);
// -> {WCAG_AA: true|false, WCAG_AAA: true|false}

```

## Documentation
Verify<br>
Params:
* color 1 {Object | String} : A color in the form of a object with separate r,
  g, b int 255 values or a hex code string prefaced with a hash (#).
* color 2 {Object | String} : A color in the form of a object with separate r,
  g, b int 255 values or a hex code string prefaced with a hash (#).
* font size {Number} : A int value of the font size.

## Examples
_(Coming soon)_

## Release History
_(Nothing yet)_

## Contributers
Marco Segreto<br>
Victoria Nguyen

## License
Copyright (c) 2014 Marco Secreto
Licensed under the Public Domain.
