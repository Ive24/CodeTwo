"use strict";
var FarmSimulation;
(function (FarmSimulation) {
    class Dog extends FarmSimulation.Animal {
        dospecialAction() {
            console.log("Trick");
        }
    }
    FarmSimulation.Dog = Dog;
})(FarmSimulation || (FarmSimulation = {}));
//# sourceMappingURL=Dog.js.map