// Tests for lib/wcag.js

var wcag = require('../lib/wcag');

exports.getContrastRatioTests = {
  testExistance: function(test) {
    test.ok(wcag.getContrastRatio, 'It should exist');
    test.done();
  },
  testWithBlackandWhite: function(test) {
    var testColorA = '#ffffff',
        testColorB = '#000000',
        actual,
        expected = 21;

    actual = wcag.getContrastRatio(testColorA, testColorB);

    test.strictEqual(actual, expected, 'The contrast ratio returned is ' +
        'the expected precaluclated result');

    test.done();
  },
  testWithWhiteWhite: function(test) {
    var testColorA = '#ffffff',
        testColorB = '#ffffff',
        actual,
        expected = 1;

    actual = wcag.getContrastRatio(testColorA, testColorB);

    test.strictEqual(actual, expected, 'The contrast ratio returned is ' +
        'the expected precaluclated result');

    test.done();
  },
  testWithRedAndBlue: function(test) {
    var testColorA = '#ff0000',
        testColorB = '#0000FF',
        actual,
        expected = 2.15;

    actual = wcag.getContrastRatio(testColorA, testColorB);

    test.strictEqual(parseFloat(actual.toFixed(2), 10), expected,
        'The contrast ratio returned is ' +
        'the expected precaluclated result');

    test.done();
  },
  testWithColorsSwitched: function(test) {
    var testColorB = '#ff0000',
        testColorA = '#0000FF',
        actual,
        expected = 2.15;

    actual = wcag.getContrastRatio(testColorA, testColorB);

    test.strictEqual(parseFloat(actual.toFixed(2), 10), expected,
        'The contrast ratio returned is ' +
        'the expected precaluclated result');

    test.done();
  },
  testWithGrays: function(test) {
    var testColorB = '#2b2b2b',
        testColorA = '#d4d4d4',
        actual,
        expected = 9.55;

    actual = wcag.getContrastRatio(testColorA, testColorB);

    test.strictEqual(parseFloat(actual.toFixed(2), 10), expected,
        'The contrast ratio returned is ' +
        'the expected precaluclated result');

    test.done();
  },
  testWithRandom: function(test) {
    var testColorB = '#1b2b18',
        testColorA = '#d448cf',
        actual,
        expected = 4;

    actual = wcag.getContrastRatio(testColorA, testColorB);

    test.strictEqual(parseFloat(actual.toFixed(2), 10), expected,
        'The contrast ratio returned is ' +
        'the expected precaluclated result');

    test.done();
  }
};
