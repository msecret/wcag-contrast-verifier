#!/usr/bin/env node

var program = require('commander');

var wcag = require('./lib/wcag');

program
  .version('1.0.0')
  .usage('<color1> <color2> [fontsize]');

program.on('--help', function(){
  console.log('  Examples:');
  console.log('');
  console.log('    $ wcag-contrast-verifier ffffff 010101 18');
  console.log('    $ wcag-contrast-verifier 1188ff 12ff21');
  console.log('');
});

program.parse(process.argv);

var colorA,
    colorB,
    fontSize,
    result;

if (program.args.length < 2) {
  program.help();
} else {
  colorA = program.args[0];
  colorB = program.args[1];
  fontSize = program.args[2] || null;

  result = wcag.verifyContrastRatio(colorA, colorB, fontSize);
  console.log(result);
  parseResult(result);
}

function parseResult(result) {
  var key,
      val;

  for (key in result) {
    if (result.hasOwnProperty(key)) {
      val = result[key];
      if (val === false) {
        process.exit(1);
      }
    }
  }
  process.exit(0);
};
