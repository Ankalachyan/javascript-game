const LivingCreature = require("./livingCreature");
let random = require("./random");

module.exports = class Water extends LivingCreature {
    constructor(x, y, index){
        super(x, y, index);
        this.energy = 5;
    } 
    getNewCoordinates() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }
    chooseCell(character) {
        this.getNewCoordinates()
        return super.chooseCell(character);
    }
    mul(waterMultiply) {
        this.multiply++;
        this.energy--;
        var newCell = random(this.chooseCell(0));
        if (this.multiply >= waterMultiply && newCell) {
            var newWater = new Water(newCell[0], newCell[1], this.index);
            waterArr.push(newWater);
            matrix[newCell[1]][newCell[0]] = 11;
            this.multiply = 0;
        }else if (this.energy <= 0) {
            this.die()
        }
    }
    die() {
        matrix[this.y][this.x] = 0;
        for (var i in predatorArr) {
            if (this.x == waterArr[i].x && this.y == waterArr[i].y) {
                waterArr.splice(i, 1);
                break;
            }
        }
    }
}