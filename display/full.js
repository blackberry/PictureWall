var images = require('../images'),
    img = "";

module.exports = {
    init: function () {
        img = images.random("full");
    },
    render: function (row, col) {
        return {
            url: img,
            pos: {x: 1024 * col * -1, y: 600 * row * -1},
            row: row,
            col: col
        };
    }
};
