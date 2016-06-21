#!/usr/bin/env node
var argv = require('yargs').argv;
var Jimp = require("jimp");
var fs = require("fs");

var text_line = argv.text;
var out_path = argv.path;

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
var image = new Jimp(350, 20, function (err, image) {

    Jimp.loadFont(Jimp.FONT_SANS_16_BLACK).then(function (font) {
        image.print(font, 10, 0, text_line);
        image.write(out_path, function(err){
            if(err){
                console.log("Error: "+ err);
            }
            console.log("Success");

        });
    });
});