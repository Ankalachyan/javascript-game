const LivingCreature = require("./livingCreature");
let random = require("./random");

module.exports = class Water extends LivingCreature {
    mul() {
        this.multiply++;
        var newCell = random(this.chooseCell(0));
        if (this.multiply >= 3 && newCell) {
            var newWater = new Water(newCell[0], newCell[1], this.index);
            waterArr.push(newWater);
            matrix[newCell[1]][newCell[0]] = 11;
            this.multiply = 0;
        }
    }

}