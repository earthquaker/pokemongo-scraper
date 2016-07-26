"use strict";

const request = require("tinyreq");

request("https://pokevision.com/map/data/56.0464674/12.694512099999999", function (err, body) {
    console.log(err || body); // Print out the HTML
});