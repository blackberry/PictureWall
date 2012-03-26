var express = require('express'),
    app = express.createServer(), 
    io = require('socket.io').listen(app),
    fs = require('fs'),
    imgs = [];

fs.readdir("public/img", function (err, files) {
    imgs = files;
});


function random() {
    var idx = Math.floor(Math.random() * imgs.length);  
    return "img/" + imgs[idx];
}

app.configure(function () {
    app.use(express.static(__dirname + '/public'));
});

app.get('/', function (req, res) {
    res.sendfile(__dirname + '/public/index.html');
});

io.sockets.on('connection', function (socket) {
    socket.emit('count', { clients: io.sockets.clients().length });
    socket.broadcast.emit('added', { clients: io.sockets.clients().length });

    socket.on('starting', function () {
        setInterval(function () {
            io.sockets.clients().forEach(function (client) {
                client.emit('img', { uri: random() });
            });
        }, 5000);
    });
});


app.listen(3000);
console.log("listening on 3000");
