var images = require('../images');

module.exports = function (row, col) {
    return {
        url: images.random("full"),
        size: { x: 3072, y: 1800 },
        pos: {x: 1024 * col * -1, y: 600 * row * -1},
        row: row,
        col: col
    };
};
