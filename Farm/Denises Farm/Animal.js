"use strict";
var FarmSimulation;
(function (FarmSimulation) {
    class Animal {
        constructor(_species, _name, _noise, _food, _stomach) {
            this.species = _species;
            this.name = _name;
            this.noise = _noise;
            this.food = _food;
            this.stomach = _stomach;
        }
        eat() {
            this.food.stock -= this.stomach; // kennt die Variablen durch FoodSupply, kann darauf zugreifen / x -= y ist die Abkürzung für x - y = x
            this.food.report();
        }
        sing() {
            const song = this.noise + this.noise;
            const verse1 = "Old MacDonald had a farm.E - I - E - I - O.And on that farm he had a" + this.name + ".E - I - E - I - O With an " + song + " here. And an " + song + " there. Here an " + this.noise + ". There an " + this.noise + ". Everywhere an " + song + ". Old MacDonald had a farm.E - I - E - I - O.";
            console.log("This is" + this.name + "the" + this.species);
            console.log(verse1);
        }
    }
    FarmSimulation.Animal = Animal;
})(FarmSimulation || (FarmSimulation = {}));
//# sourceMappingURL=Animal.js.map