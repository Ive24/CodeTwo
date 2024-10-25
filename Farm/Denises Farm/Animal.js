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
            console.log("This is" + this.name + "the" + this.species);
            console.log(song);
        }
    }
    FarmSimulation.Animal = Animal;
})(FarmSimulation || (FarmSimulation = {}));
