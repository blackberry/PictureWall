var images = require('../images');

module.exports = {
    init: function () { },

    render: function (row, col) {
        return {
            url: images.random("tile"),
            pos: { x: 0, y: 0 },
            size: { x: 1024, y: 600 }
        };
    }
};
