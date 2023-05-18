var matrix = [];



function characters(number, character) {

    for (let q = 0; q < number; q++) {
        var x = Math.floor(random(0, n))
        var y = Math.floor(random(0, m))
        if (matrix[x][y] == 0) {
            matrix[x][y] = character
        }

    }
}

var side = 8;
var grassArr = [];
var grassEaterArr = [];
var predatorArr = [];
var allEaterArr = [];
var bombArr = [];

function setup() {

    // for (let i = 0; i < n; i++) {
    //     matrix.push([]);
    //     for (let j = 0; j < m; j++) {
    //         matrix[i].push(0)
    //     }
    // }
    characters(400, 1)
    characters(200, 2)
    characters(200, 3)
    characters(150, 4)
    characters(20, 5)
    // frameRate(20);
    // noStroke()
    // createCanvas(matrix[0].length * side, matrix.length * side);
    // stroke(255);
    // background('#e8e8e8');

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

function draw() {

//     for (var y = 0; y < matrix.length; y++) {
//         for (var x = 0; x < matrix[y].length; x++) {

//             if (matrix[y][x] == 1) {
//                 fill("#42FF33");
//             }
//             else if (matrix[y][x] == 0) {
//                 fill("#e8e8e8");
//             } else if (matrix[y][x] == 2) {
//                 fill("#B533FF");
//             } else if (matrix[y][x] == 3) {
//                 fill("#3352FF")
//             } else if (matrix[y][x] == 4) {
//                 fill("#FF0CFB")
//             } else if (matrix[y][x] == 5) {
//                 fill("grey")
//             } else if (matrix[y][x] == 10) {
//                 fill("#C9C9C9")
//             }
//             rect(x * side, y * side, side, side, side);


//         }
//     }
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

}