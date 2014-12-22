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

    test.strictEqual(actual, expected, '');

    test.done();
  }
};
