"use strict";
var FarmSimulation;
(function (FarmSimulation) {
    class Cat extends FarmSimulation.Animal {
        dospecialAction() {
            console.log("catch mouse");
        }
    }
    FarmSimulation.Cat = Cat;
})(FarmSimulation || (FarmSimulation = {}));
//# sourceMappingURL=Cat.js.map