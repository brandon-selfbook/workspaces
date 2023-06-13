var delivery = require("@brandon_selfbook/delivery");
var private = require("@brandon_selfbook/private");
var pkg = require("./package.json");

module.exports = () => {
    console.log('UI Kit ' + pkg.version);
    delivery('Fuck yeah!');
    private();
};