
var wcag = require('lib/wcag');

var verify = function(colorA, colorB, fontSize) {
  return wcag.verifyContrastRatio(colorA, colorB, fontSize);
};

module.exports = {
  verify: verify
};
