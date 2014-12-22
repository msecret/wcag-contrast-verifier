
rgbClass = {
  toString: function() {
    return '<r: ' + this.r +
           ' g: ' + this.g +
           ' b: ' + this.b +
           ' >';
  }
};

function getRGBFromHex(color) {
  var rgb = Object.create(rgbClass),
      rVal,
      gVal,
      bVal;

  if (typeof color !== 'string') {
    throw new Error('must use string');
  }

  rVal = parseInt(color.slice(1, 3), 16);
  gVal = parseInt(color.slice(3, 5), 16);
  bVal = parseInt(color.slice(5, 7), 16);

  rgb.r = rVal;
  rgb.g = gVal;
  rgb.b = bVal;

  return rgb;
}

function calculateSRGB(rgb) {
 var sRGB = Object.create(rgbClass),
     key;

  for (key in rgb) {
    if (rgb.hasOwnProperty(key)) {
      sRGB[key] = parseFloat((rgb[key] / 255), 10);
    }
  }

  return sRGB;
}

function calculateLRGB(sRGB) {
  var lRGB = Object.create(rgbClass),
      key,
      val = 0;

  for (key in sRGB) {
    if (sRGB.hasOwnProperty(key)) {
      val = parseFloat(sRGB[key], 10);
      if (val <= 0.03928) {
        lRGB[key] = (val / 12.92);
      } else {
        lRGB[key] = Math.pow(((val + 0.055) / 1.055), 2.4);
      }
    }
  }

  return lRGB;
}

function calculateLuminance(lRGB) {
  return (0.2126 * lRGB.r) + (0.7152 * lRGB.g) + (0.0722 * lRGB.b);
}

exports.relativeLuminance = function(color) {
  var rgb,
      sRGB,
      lRGB,
      lum = 0,
      key;

  if (typeof color === 'string') {
    rgb = getRGBFromHex(color);
  } else {
    rgb = Object.create(rgbClass);
  }

  sRGB = calculateSRGB(rgb);
  lRGB = calculateLRGB(sRGB);
  lum = calculateLuminance(lRGB);

  return lum;
};

