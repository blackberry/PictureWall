$.get('/images', function (frag) {
  $("#imgs").hide();
  $("#imgs").html(frag);
});
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
