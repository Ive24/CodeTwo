"use strict";
var FarmSimulation;
(function (FarmSimulation) {
    class FoodSupply {
        constructor(_type, _stock, _fullStock) {
            this.type = _type;
            this.stock = _stock;
            this.fullStock = _fullStock;
        }
        report() {
            console.log(this.type + " " + String(this.stock) + ": Units of " + this.type + " are remaining in the Pantry");
        }
        restock() {
            if (this.stock > 10) { }
            else if (this.stock <= 10) {
                this.stock = this.fullStock;
            }
        }
    }
    FarmSimulation.FoodSupply = FoodSupply;
})(FarmSimulation || (FarmSimulation = {}));
//# sourceMappingURL=FoodSupply.js.map