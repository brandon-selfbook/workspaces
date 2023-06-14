var delivery = require("@brandon_selfbook/delivery");
var pkg = require("./package.json");

module.exports = () => {
    console.log('Package: UI KIT');
    console.log('   ' + pkg.version);
    delivery('  Oh yeah!');
};