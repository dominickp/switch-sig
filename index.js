#!/usr/bin/env node
var argv = require('yargs').argv;
var gm = require('gm');

var text_line = argv.text;
var out_path = argv.path;

// creating an image
gm(350, 20, "#000000")
    .stroke("#ffffff")
    .font("Helvetica.ttf", 12)
    .drawText(10, 12, text_line)
    .write(out_path, function (err) {
        if(err){
            console.log(err);
        } else {
            console.log("Success");
        }
    });