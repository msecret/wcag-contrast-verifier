// Tests for lib/color.js

var color = require('../lib/color');

exports.relativeLuminance = {
  testExistance: function(test) {
    test.ok(color.relativeLuminance, 'It should exist');
    test.done();
  },
  testHexWhiteColor: function(test) {
    var testColor = '#FFFFFF',
        expected = 1,
        actual;

    actual = color.relativeLuminance(testColor);

    test.strictEqual(actual, expected,
        'The returned luminance value is the pre-calculated, ' +
        'correct value');

    test.done();
  },
  testHexBlackColor: function(test) {
    var testColor = '#000000',
        expected = 0,
        actual;

    actual = color.relativeLuminance(testColor);

    test.strictEqual(actual, expected,
        'The returned luminance value is the pre-calculated, ' +
        'correct value');

    test.done();
  },
  testHexColor: function(test) {
    var testColor = '#8AAD3A',
        expected = 0.35596,
        actual;

    actual = color.relativeLuminance(testColor);

    test.strictEqual(parseFloat(actual.toFixed(5)),
      expected, 'The returned luminance value is 0.35595, the pre-calculate ' +
          'correct value');

    test.done();
  }
};
