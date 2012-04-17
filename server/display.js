var grid = [];

module.exports = {
    init: function (g) {
        grid = g;
    },

    render: function (plugin) {
        var plugin = require("./display/" + plugin),
            row, col;

        plugin.init();

        for (row = 0; row < grid.length; row++) {
            for (col = 0; col < grid[row].length; col++) {
                grid[row][col].emit('img', plugin.render(row, col));
            }
        }
    }
};
