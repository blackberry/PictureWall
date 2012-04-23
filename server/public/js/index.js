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
  var socket = io.connect(location.href);
  socket.on('count', function (data) {
    $("#count").text(data.clients);
  });

  socket.on('added', function (data) {
    $("#count").text(data.clients);
  });

  socket.on('img', function (data) {
      var style = "background-image: url('" + data.url + "');";
      style += "background-position: " + data.pos.x + "px " + data.pos.y + "px;";
      style += "background-size: " + data.size.x + "px " + data.size.y + "px;";
      $("#img").attr("style", style).show();
  });

  socket.on('started', function () {
      $("#count").hide();
      $("#start").hide();
  });

  $("#start").click(function () {
      $("#count").hide();
      $("#start").hide();
      socket.emit("start");
  });

  $("#row").click(function () {
      socket.emit("row");
      $("#setup").hide();
  });

  $("#col").click(function () {
      socket.emit("col");
      $("#setup").hide();
  });
});
