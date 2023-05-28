const LivingCreature = require("./livingCreature");
let random = require("./random");

module.exports = class Grass extends LivingCreature {
    mul(winterMultiply) {
        this.multiply++;
        var newCell = random(this.chooseCell(0));
        if (this.multiply >= winterMultiply && newCell) {
            var newGrass = new Grass(newCell[0], newCell[1], this.index);
            grassArr.push(newGrass);
            matrix[newCell[1]][newCell[0]] = 1;
            this.multiply = 0;
        }
    }

}