"use strict";
var FarmSimulation;
(function (FarmSimulation) {
    class Farm {
        constructor(_stable, _pantry) {
            this.stable = _stable;
            this.pantry = _pantry;
        }
        simulateDay() {
            for (let i = 0; i < this.stable.length; i++) {
            }
        }
    }
    FarmSimulation.Farm = Farm;
})(FarmSimulation || (FarmSimulation = {}));
