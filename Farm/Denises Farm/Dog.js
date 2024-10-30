"use strict";
var FarmSimulation;
(function (FarmSimulation) {
    class Dog extends FarmSimulation.Animal {
        constructor(_species, _name, _noise, _food, _stomach, _walklength, _favtoy) {
            super(_species, _name, _noise, _food, _stomach); //call superclass constructor 
            this.walklength = _walklength;
            this.favtoy = _favtoy;
        }
        dospecialAction() {
            console.log("TI can walk for" + this.walklength + "hours.");
        }
    }
    FarmSimulation.Dog = Dog;
})(FarmSimulation || (FarmSimulation = {}));
//# sourceMappingURL=Dog.js.map