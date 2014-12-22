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

exports.verifyContrastRatioTests = {
  testExistance: function(test) {
    test.ok(wcag.verifyContrastRatio, 'It should exist');
    test.done();
  },
  testWithBlackandWhiteSmFont: function(test) {
    var testColorA = '#ffffff',
        testColorB = '#000000',
        testFontSize = 14,
        actual;

    actual = wcag.verifyContrastRatio(testColorA, testColorB, testFontSize);

    test.ok(actual.WCAG_AA, 'Black and white should pass WCAG AA');
    test.ok(actual.WCAG_AAA, 'Black and white should pass WCAG AAA');

    test.done();
  },
  testWithNoFontSize: function(test) {
    var testColorA = '#1c1c09',
        testColorB = '#d448cf',
        actual;

    actual = wcag.verifyContrastRatio(testColorA, testColorB);

    test.ok(actual.WCAG_AA, 'Default font size should pass with color value ' +
        'for AA');
    test.ok(!actual.WCAG_AAA, 'Default font size should pass with color value ' +
        'for AAA');

    test.done();
  },
  testWithLargeText: function(test) {
    var testColorA = '#303011',
        testColorB = '#d448cf',
        testFontSize = 19,
        actual;

    actual = wcag.verifyContrastRatio(testColorA, testColorB, testFontSize);

    test.ok(actual.WCAG_AA, 'Large text should pass with AA');
    test.ok(!actual.WCAG_AAA, 'Large text should fail with AAA');

    test.done();
  },
  testBothFail: function(test) {
    var testColorA = '#a65cd5',
        testColorB = '#d48551',
        actual;

    actual = wcag.verifyContrastRatio(testColorA, testColorB, 8);

    test.ok(!actual.WCAG_AA, 'AA should fail');
    test.ok(!actual.WCAG_AAA, 'AAA should fail');

    actual = wcag.verifyContrastRatio(testColorA, testColorB, 22);

    test.ok(!actual.WCAG_AA, 'AA should fail');
    test.ok(!actual.WCAG_AAA, 'AAA should fail');

    test.done();
  },
  testAAPass: function(test) {
    var testColorA = '#2f5015',
        testColorB = '#d4aeb5',
        actual;

    actual = wcag.verifyContrastRatio(testColorA, testColorB, 16);

    test.ok(actual.WCAG_AA, 'AA should pass');
    test.ok(!actual.WCAG_AAA, 'AAA should fail');

    actual = wcag.verifyContrastRatio(testColorA, testColorB, 18);

    test.ok(actual.WCAG_AA, 'AA should pass');
    test.ok(actual.WCAG_AAA, 'AAA should pass');

    test.done();
  },
  testToString: function(test) {
    var actual,
        expected = '< WCAG-AA: pass WCAG-AAA: fail >';

    actual = wcag.verifyContrastRatio('#ffffff', '#6a6a6a');

    test.equal(actual.toString(), expected, 'The to string functino returns ' +
        'the correct representation of the results');

    test.done();
  }
};
