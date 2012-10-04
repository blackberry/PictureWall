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
$(document).ready(function () {
  var socket = io.connect(location.href, {
          "max reconnection attempts": 1000000,
          "reconnection limit": 2000
      }),
      a = alice.init(),
      reconnect = false;

  socket.on('connect', function () {
      if (reconnect) {
          location.reload();
      }

      reconnect = true;
  });

  var top = "#img1",
      bottom = "#img2",
      z = 1;

  socket.on('img', function (data) {
      var style = "background-image: url('" + data.url + "');",
          swap;

      swap = top;
      top = bottom;
      bottom = swap;

      style += "background-size: " + screen.width + "px " + screen.height + "px;";
      style += "z-index: " + ++z;
      $(top).attr("style", style);

      $(top).show();
      a.fade(top.replace("#", ''), "in", "500ms", "ease-in-out");
      setTimeout($(bottom).hide, 5);
  });

  socket.on('added', function (data) {
      $("#count").text(data.clients);
  });

  socket.on('count', function (data) {
      $("#count").text(data.clients);
  });
});
