"use strict";
var FarmSimulation;
(function (FarmSimulation) {
    class Cat extends FarmSimulation.Animal {
        constructor(_species, _name, _noise, _food, _stomach, _furrcolor, _friendly) {
            super(_species, _name, _noise, _food, _stomach); //call superclass constructor 
            this.furrcolor = _furrcolor;
            this.friendly = _friendly;
        }
        dospecialAction() {
            console.log("I have" + this.furrcolor + "furr.");
        }
    }
    FarmSimulation.Cat = Cat;
})(FarmSimulation || (FarmSimulation = {}));
//# sourceMappingURL=Cat.js.map