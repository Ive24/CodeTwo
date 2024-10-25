"use strict";
var FarmSimulation;
(function (FarmSimulation) {
    class Farm {
        constructor(_stable, _pantry) {
            // public simulateDay(): void { // alternative (if bind used in the main.ts)
            this.simulateDay = () => {
                console.log("Ok");
                for (let i = 0; i < this.stable.length; i++) {
                    const animal = this.stable[i];
                    animal.sing();
                    animal.eat();
                    if (i == this.stable.length) {
                        console.log("Finished Singing!");
                    }
                }
                for (let i = 0; i < this.pantry.length; i++) {
                    const food = this.pantry[i];
                    food.restock();
                    if (i == this.pantry.length) {
                        console.log("Pantry restocked.");
                    }
                }
            };
            this.stable = _stable;
            this.pantry = _pantry;
        }
    }
    FarmSimulation.Farm = Farm;
})(FarmSimulation || (FarmSimulation = {}));
//# sourceMappingURL=Farm.js.map