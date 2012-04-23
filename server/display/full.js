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
