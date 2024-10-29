"use strict";
var FarmSimulation;
(function (FarmSimulation) {
    class Cat extends FarmSimulation.Animal {
        dospecialAction() {
            console.log("eat even more");
        }
    }
    FarmSimulation.Cat = Cat;
})(FarmSimulation || (FarmSimulation = {}));
//# sourceMappingURL=Cat.js.map