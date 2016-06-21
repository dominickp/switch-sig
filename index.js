#!/usr/bin/env node
var argv = require('yargs').argv;
var Jimp = require("jimp");
var fs = require("fs");

var text_line = argv.text;
var out_path = argv.path;

var path = require('path');
var appDir = path.dirname(require.main.filename);

console.error('out_path: ' + out_path);

// Make sure exists
// fs.stat(out_path, function (err, stats) {
//     console.log(stats);//here we got all information of file in stats variable
//     if (err) {
//         // create new file
//         fs.writeFile(out_path, '', function(err) {
//             if (err){
//                 throw err;
//             }
//             console.log('It\'s saved!');
//         });
//     }
//
// });

// creating an image

Jimp.read(appDir+"/sig_bg.png", function (err, image) {
    if (err) throw err;

    Jimp.loadFont(Jimp.FONT_SANS_16_WHITE).then(function (font) {
        image.print(font, 170, 5, text_line);
        image.write(out_path, function(err){
            if(err){
                console.log("Error: "+ err);
            }
            console.log("Success");

        });
    });

});
