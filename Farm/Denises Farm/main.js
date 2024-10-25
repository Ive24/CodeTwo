"use strict";
var FarmSimulation;
(function (FarmSimulation) {
    window.addEventListener("load", handleLoad);
    function handleLoad() {
        const stable = [];
        const pantry = [];
        const meat = new FarmSimulation.FoodSupply("Meat", 20, 50);
        const hay = new FarmSimulation.FoodSupply("Hay", 60, 100);
        const corn = new FarmSimulation.FoodSupply("Corn", 35, 80);
        pantry.push(meat, hay, corn);
        const cat = new FarmSimulation.Animal("Cat", "Maurizius", "Miau", pantry[0], 1);
        const dog = new FarmSimulation.Animal("Dog", "Milo", "Wouff", pantry[0], 2);
        const horse = new FarmSimulation.Animal("Horse", "Schattenfell", "Hüh", pantry[1], 4);
        const cow = new FarmSimulation.Animal("Cow", "Beatrice", "Muh", pantry[2], 5);
        const goat = new FarmSimulation.Animal("Goat", "MGisela", "Mäh", pantry[1], 2);
        stable.push(cat, dog, horse, cow, goat);
        //window.addEventListener("click", );
    }
})(FarmSimulation || (FarmSimulation = {}));
