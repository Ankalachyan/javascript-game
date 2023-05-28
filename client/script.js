var side = 8;
var socket = io();
var n = 60;
var m = 60;
var array = ['#42FF33',"#B533FF","#B533FF","#FF0CFB"]
let summerButton = document.getElementById("button1");
let winterButton = document.getElementById("button2");
let startButton = document.getElementById("start");
let stopButton =  document.getElementById("stop");


function x(set) {
    if( set == 1000){
         socket.emit("set",true)
    }
    else{
        socket.emit("set",false)
    }
}

stopButton.addEventListener("click",x)
startButton.addEventListener("click",x)
function winter(){
    array[0]= "cyan"
    array[1] = '#481466'
    array[2] = '#FF4500'
    array[3] = '#781076'
    socket.emit("signal",true)
} 
function summer(){
    array[0]="#AAFF00"
    array[1] = "#B533FF"
    array[2] = '#DA99FF'
    array[3] = '#ff0c75'
    socket.emit("sign",true)
} 
winterButton.addEventListener("click",winter)
summerButton.addEventListener("click",summer)
function setup() {
    frameRate(20);
    noStroke()
    createCanvas(n * side, m * side);
    stroke(255);
    background('#e8e8e8');
}
  socket.on("matrix", drawMatrix);
  textElement =  document.getElementById("text");
  
  function showHtml(data){
    textElement.innerhtml = data.statistic
  }
function drawMatrix(data) {
   
    matrix = data.matrix;
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {

            if (matrix[y][x] == 1) {
                fill(array[0]);
            }
            else if (matrix[y][x] == 0) {
                fill("#e8e8e8");
            } else if (matrix[y][x] == 2) {
                fill(array[1]);
            } else if (matrix[y][x] == 3) {
                fill(array[2])
            } else if (matrix[y][x] == 4) {
                fill(array[3])
            } else if (matrix[y][x] == 5) {
                fill("grey")
            } else if (matrix[y][x] == 10) {
                fill("#C9C9C9")
            }else if (matrix[y][x] == 11) {
            fill("#0000FF")
        }
            rect(x * side, y * side, side, side, side);
        }
    }
}