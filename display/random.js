var images = require('../images');

module.exports = {
    init: function () { },
    render: function (row, col) {
        return {
            url: images.random("tile"),
            pos: { x: 0, y: 0 }
        };
    }
};
