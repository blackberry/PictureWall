var fs = require('fs'),
    imgs = {
        tile: {
            stack: [],
            backup: []
        },
        full: {
            stack: [],
            backup: []
        }
    };

function get(path) {
    return fs.readdirSync("public/" + path).map(function (file) {
        return path + "/" + file;
    });
}

function shuffle() {
    return 0.5 + Math.random();
}

imgs.tile.backup = get("img/tile");
imgs.full.backup = get("img/full");

module.exports = {
    random: function (type) {
        if (!imgs[type].stack.length) {
            imgs[type].stack = imgs[type].backup.slice().sort(shuffle);
        }

        return imgs[type].stack.pop();
    },

    all: function (type) {
        return imgs[type].backup.slice();
    }
};
