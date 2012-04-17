var images = require('../images'),
    size = {x: 1024, y: 600},
    img = "";

module.exports = {
    init: function (grid) {
        //var count = grid.length * grid[0].length;
        img = images.random("tile");
        size = {x: 1024 * 9, y: 600 * 9};
    },

    render: function (row, col) {
        return {
            url: img,
            pos: {x: 1024 * col * -1, y: 600 * row * -1},
            size: size
        };
    }
};
