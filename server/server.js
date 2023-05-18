var express = require("express");
AllEater = require("./allEater.js");
Bomb = require("./bomb.js");
GrassEater = require("./grassEater.js");
LivingCreature = require("./livingCreature.js");
Predator = require("./predator.js");
Grass = require("./class.js");

var app = express();

app.use(express.static("../client"));

app.get("/", function(req, res){
   res.redirect("index.html");
});

app.listen(3001, function(){
   console.log("Example is running on port 3000");
});



var n = 60;
var m = 60;
matrix = [];

function characters(number, character) {
   for (let q = 0; q < number; q++) {
       var x = Math.floor(Math.random(0, n)) // o-1 //
       var y = Math.floor(Math.random(0, m)) //
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

}

generateMatrix() 
console.log(matrix)
