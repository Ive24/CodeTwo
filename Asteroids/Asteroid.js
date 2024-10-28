"use strict";
var Asteroid_Project;
(function (Asteroid_Project) {
    class Asteroid {
        constructor(_size) {
            console.log("asteroid constructor"); //console.log to check if the method works
        }
        moveBy(_timeslice) {
            console.log("Asteroid movement");
        }
        draw() {
            console.log("Asteroid draw");
        }
    }
    Asteroid_Project.Asteroid = Asteroid;
})(Asteroid_Project || (Asteroid_Project = {}));
//# sourceMappingURL=Asteroid.js.map