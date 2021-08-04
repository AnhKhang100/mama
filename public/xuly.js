

var socket =io("http://localhost:3000");
  $(document).ready(function(){
          $("#loginForm").show();
          $("#chatForm").hide();
          $(" #btnRegister ").click(function(){
            var s = $("#txtUsername").val()
            socket.emit("client-send-Username", s);
          });
     });
