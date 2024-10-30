"use strict";
var FarmSimulation;
(function (FarmSimulation) {
    class Cow extends FarmSimulation.Animal {
        constructor(_species, _name, _noise, _food, _stomach, _milkcow, _place) {
            super(_species, _name, _noise, _food, _stomach); //call superclass constructor 
            this.milkcow = _milkcow;
            this.place = _place;
        }
        dospecialAction() {
            console.log("I prefer to be" + this.place);
        }
    }
    FarmSimulation.Cow = Cow;
})(FarmSimulation || (FarmSimulation = {}));
//# sourceMappingURL=Cow.js.map