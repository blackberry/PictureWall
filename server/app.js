/*
 *  Copyright 2011 Research In Motion Limited.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
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
            display.render(++x % 2 ? "full" : "tile");
        }, 5000);
    });
});

app.listen(3000);
console.log("listening on 3000");
