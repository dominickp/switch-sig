#!/usr/bin/env node
var argv = require('yargs').argv;
var Jimp = require("jimp");

var text_line = argv.text;
var out_path = argv.path;

// creating an image
var image = new Jimp(350, 20, function (err, image) {

    Jimp.loadFont(Jimp.FONT_SANS_16_BLACK).then(function (font) {
        image.print(font, 10, 0, text_line);
        image.write(out_path);
        console.log("Success");
    });
});