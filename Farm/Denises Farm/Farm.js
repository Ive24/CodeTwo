"use strict";
var FarmSimulation;
(function (FarmSimulation) {
    class Farm {
        constructor(_stable, _pantry) {
            this.stable = _stable;
            this.pantry = _pantry;
        }
        fillPantry() {
            this.pantry.push(new FarmSimulation.FoodSupply("Meat", 20, 50));
            this.pantry.push(new FarmSimulation.FoodSupply("Hay", 60, 100));
            this.pantry.push(new FarmSimulation.FoodSupply("Corn", 35, 80));
        }
        createStable() {
            this.stable.push(new FarmSimulation.Animal("Cat", "Maurizius", "Miau", this.pantry[0], 1));
            this.stable.push(new FarmSimulation.Animal("Dog", "Milo", "Wouff", this.pantry[0], 2));
            this.stable.push(new FarmSimulation.Animal("Horse", "Schattenfell", "Hüh", this.pantry[1], 4));
            this.stable.push(new FarmSimulation.Animal("Cow", "Beatrice", "Muh", this.pantry[2], 5));
            this.stable.push(new FarmSimulation.Animal("Goat", "MGisela", "Mäh", this.pantry[1], 2));
        }
        simulateDay() {
            for (let i = 0; i < this.stable.length; i++) {
                const animal = this.stable[i];
                animal.sing();
                animal.eat();
                if (i == this.stable.length) {
                    console.log("Finished Singing");
                }
            }
            for (let i = 0; i < this.pantry.length; i++) {
                const food = this.pantry[i];
                food.restock();
            }
        }
    }
    FarmSimulation.Farm = Farm;
})(FarmSimulation || (FarmSimulation = {}));
