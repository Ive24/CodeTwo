"use strict";
var FarmSimulation;
(function (FarmSimulation) {
    class Horse extends FarmSimulation.Animal {
        constructor(_species, _name, _noise, _food, _stomach, _speed, _race) {
            super(_species, _name, _noise, _food, _stomach); //call superclass constructor 
            this.speed = _speed;
            this.race = _race;
        }
        dospecialAction() {
            console.log("I have a speed up to" + this.speed + "km/h.");
        }
    }
    FarmSimulation.Horse = Horse;
})(FarmSimulation || (FarmSimulation = {}));
//# sourceMappingURL=Horse.js.map