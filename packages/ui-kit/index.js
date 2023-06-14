var delivery = require("@brandon_selfbook/delivery");
var private = require("@brandon_selfbook/private");
var pkg = require("./package.json");

module.exports = () => {
    console.log('Package: UI KIT ');
    console.log('   ' + pkg.version);
    delivery('  Fuck yeah!');
    private();
};