"use strict";
var FarmSimulation;
(function (FarmSimulation) {
    window.addEventListener("load", handleLoad);
    function handleLoad() {
        const stableMacDonald = [];
        const pantryMacDonald = [];
        const meat = new FarmSimulation.FoodSupply("Meat", 20, 50);
        const hay = new FarmSimulation.FoodSupply("Hay", 60, 100);
        const corn = new FarmSimulation.FoodSupply("Corn", 35, 80);
        pantryMacDonald.push(meat, hay, corn);
        const cat = new FarmSimulation.Animal("Cat", "Maurizius", "Miau", pantryMacDonald[0], 1);
        const dog = new FarmSimulation.Animal("Dog", "Milo", "Wouff", pantryMacDonald[0], 2);
        const horse = new FarmSimulation.Animal("Horse", "Schattenfell", "Hüh", pantryMacDonald[1], 4);
        const cow = new FarmSimulation.Animal("Cow", "Beatrice", "Muh", pantryMacDonald[2], 5);
        const goat = new FarmSimulation.Animal("Goat", "MGisela", "Mäh", pantryMacDonald[1], 2);
        stableMacDonald.push(cat, dog, horse, cow, goat);
        const macDonald = new FarmSimulation.Farm(stableMacDonald, pantryMacDonald);
        window.addEventListener("click", macDonald.simulateDay);
    }
})(FarmSimulation || (FarmSimulation = {}));
//# sourceMappingURL=main.js.map