var images = require('../images');

module.exports = function (x, y) {
    return {
        url: images.random("tile"),
        size: { x: 1024, y: 600 },
        pos: { x: 0, y: 0 }
    };
};
