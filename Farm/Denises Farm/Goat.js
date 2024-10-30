"use strict";
var FarmSimulation;
(function (FarmSimulation) {
    class Goat extends FarmSimulation.Animal {
        constructor(_species, _name, _noise, _food, _stomach, _jumpheigth, _horns) {
            super(_species, _name, _noise, _food, _stomach); //call superclass constructor 
            this.jumpheight = _jumpheigth;
            this.horns = _horns;
        }
        dospecialAction() {
            console.log(Goat.name + "i jumped" + this.jumpheight + "meters.");
        }
    }
    FarmSimulation.Goat = Goat;
})(FarmSimulation || (FarmSimulation = {}));
//# sourceMappingURL=Goat.js.map