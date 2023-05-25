var express = require("express");
grassArr = [];
grassEaterArr = [];
predatorArr = [];
allEaterArr = [];
bombArr = [];
AllEater = require("./modules/allEater");
Bomb = require("./modules/bomb");
GrassEater = require("./modules/grassEater");
LivingCreature = require("./modules/livingCreature");
Predator = require("./modules/predator");
Grass = require("./modules/class");

var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);
app.use(express.static("../client"));

app.get("/", function (req, res) {
   res.redirect("index.html");
});

server.listen(3000, function () {
   console.log("Example is running on port 3000");
});

var n = 60;
var m = 60;
matrix = [];

function characters(number, character) {
   for (let q = 0; q < number; q++) {
      var x = Math.floor(Math.random() * n)
      var y = Math.floor(Math.random() * m)
      if (matrix[x][y] == 0) {
         matrix[x][y] = character;
      }

   }
}

function generateMatrix() {
   for (let i = 0; i < n; i++) {
      matrix.push([]);
      for (let j = 0; j < m; j++) {
         matrix[i].push(0)
      }
   }

   characters(400, 1)
   characters(200, 2)
   characters(200, 3)
   characters(150, 4)
   characters(20, 5)
   return matrix;
}
function createObject() {
   for (var y = 0; y < matrix.length; ++y) {
      for (var x = 0; x < matrix[y].length; ++x) {
         if (matrix[y][x] == 1) {
            var gr = new Grass(x, y, 1);
            grassArr.push(gr);
         }
         else if (matrix[y][x] == 2) {
            var gre = new GrassEater(x, y, 2)
            grassEaterArr.push(gre)
         }
         else if (matrix[y][x] == 3) {
            var pre = new Predator(x, y, 3)
            predatorArr.push(pre)
         }
         else if (matrix[y][x] == 4) {
            var all = new AllEater(x, y, 4)
            predatorArr.push(all)
         } else if (matrix[y][x] == 5) {
            var bomb = new Bomb(x, y, 5)
            bombArr.push(bomb)
         }
      }

   }
}

generateMatrix()
createObject() 
var cl = false;

io.on("connection", function (socket) {
   if (cl) {
      setInterval(drawserverayin, 200);
      cl = true;
   }
});
function drawserverayin() {
   for (var i in grassArr) {
      grassArr[i].mul();
   }
   for (var i in grassEaterArr) {
      grassEaterArr[i].eat();
   }
   for (var i in predatorArr) {
      predatorArr[i].eat();
   }
   for (var i in allEaterArr) {
      allEaterArr[i].eat();
   }
   for (var i in bombArr) {
      bombArr[i].start();
   }

   let sendData = {
      matrix: matrix
   }
   io.sockets.emit("matrix", sendData)
}
setInterval(drawserverayin, 1000)

