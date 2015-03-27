var path = require("path");
var url = require("url");

var output = [];

var urlPrefix = "https://raw.githubusercontent.com/qunxyz/meteor-jquery-ui-map/master/ui/min/";
var addonPrefix = "https://raw.githubusercontent.com/qunxyz/meteor-jquery-ui-map/master/addons/";

// UI files
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
      file: path.join("./ui/", ui_map),
      url: url.resolve(urlPrefix, ui_map)
    });
});
// AddOn files
[
    "infobox.js",
    "infobox_packed.js",
    "markerclusterer.min.js"
].forEach(function(addon) {
    output.push({
      file: path.join("./addons/", addon),
      url: url.resolve(addonPrefix, addon)
    });
});
console.log(JSON.stringify(output, null, "    "));
