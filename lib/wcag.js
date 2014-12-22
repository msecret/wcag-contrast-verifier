/*
 * Methods to check wcag accessibility.
 */

var color = require('./color');

var WCAG_REQ_RATIO_AA_LG = 3.0,
    WCAG_REQ_RATIO_AA_SM = 4.5,
    WCAG_REQ_RATIO_AAA_LG = 4.5,
    WCAG_REQ_RATIO_AAA_SM = 7.0,
    WCAG_FONT_CUTOFF = 18;

var resultsClass = {
  toString: function() {
    return '< WCAG-AA: ' + ((this.WCAG_AA) ? 'pass' : 'fail') +
           ' WCAG-AAA: ' + ((this.WCAG_AAA) ? 'pass' : 'fail') +
           ' >';
  }
};

var getContrastRatio = function(colorA, colorB) {
  var ratio,
      lumA,
      lumB,
      lighter,
      darker;

  lumA = color.relativeLuminance(colorA);
  lumB = color.relativeLuminance(colorB);

  if (lumA >= lumB) {
    lighter = lumA;
    darker = lumB;
  } else {
    lighter = lumB;
    darker = lumA;
  }

  ratio = (lighter + 0.05) / (darker + 0.05);

  return ratio;
};

var verifyContrastRatio = function(colorA, colorB, lFontSize) {
  var ratio = 0,
      results = Object.create(resultsClass),
      fontSize = lFontSize || 12;

  ratio = getContrastRatio(colorA, colorB);

  if (fontSize >= WCAG_FONT_CUTOFF) {
    results.WCAG_AA = (ratio >= WCAG_REQ_RATIO_AA_LG);
    results.WCAG_AAA = (ratio >= WCAG_REQ_RATIO_AAA_LG);
  } else {
    results.WCAG_AA = (ratio >= WCAG_REQ_RATIO_AA_SM);
    results.WCAG_AAA = (ratio >= WCAG_REQ_RATIO_AAA_SM);
  }

  return results;
};

module.exports = {
  getContrastRatio: getContrastRatio,
  verifyContrastRatio: verifyContrastRatio
};
