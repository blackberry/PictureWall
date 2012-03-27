var express = require('express'),
    app = express.createServer(), 
    io = require('socket.io').listen(app),
    grid = [];

app.configure(function () {
    app.use(express.static(__dirname + '/public'));
});

app.get('/', function (req, res) {
    res.sendfile(__dirname + '/public/index.html');
});

io.sockets.on('connection', function (socket) {
    socket.emit('count', { clients: io.sockets.clients().length });
    socket.broadcast.emit('added', { clients: io.sockets.clients().length });

    socket.on('row', function (args) {
        grid.push([]);
        grid[grid.length - 1].push(socket);
    });

    socket.on('col', function (args) {
        grid[grid.length - 1].push(socket);
    });

    socket.on('start', function () {
        socket.broadcast.emit('started');
        var display = require("./display"),
            x = 0;
        display.init(grid);
        setInterval(function () {
            display.render(++x % 2 ? "random" : "full");
        }, 5000);
    });
});

app.listen(3000);
console.log("listening on 3000");
