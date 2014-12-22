/*
 * Methods to check wcag accessibility.
 */

var color = require('./color');

exports.getContrastRatio = function(colorA, colorB) {
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
