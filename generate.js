var path = require("path");
var url = require("url");

var output = [];

var urlPrefix = "https://raw.githubusercontent.com/qunxyz/meteor-jquery-ui-map/master/ui/min/";

// JPlayer files
[
    "jquery.ui.map.full.min.js",
    "jquery.ui.map.microdata.min.js",
    "jquery.ui.map.microformat.min.js",
    "jquery.ui.map.min.js",
    "jquery.ui.map.overlays.min.js",
    "jquery.ui.map.rdfa.min.js",
    "jquery.ui.map.services.min.js"
].forEach(function(ui_map) {
    output.push({
      file: path.join("./", ui_map),
      url: url.resolve(urlPrefix, ui_map)
    });
});
console.log(JSON.stringify(output, null, "    "));
