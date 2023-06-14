var delivery = require("@brandon_selfbook/delivery");
var private = require("@brandon_selfbook/private");
var pkg = require("./package.json");

module.exports = () => {
    console.log('Pkg: UI KIT');
    console.log('   ' + pkg.version);
    delivery('  Oh yeah!');
    private();
};