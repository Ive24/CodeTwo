"use strict";
var Asteroid_Project;
(function (Asteroid_Project) {
    class Asteroid {
        constructor(_size) {
            console.log("asteroid constructor"); //console.log to check if the method works
            this.position = new Asteroid_Project.Vector(0, 0);
            this.velocity = new Asteroid_Project.Vector(0, 0);
            this.velocity.random(100, 200); //Asteroiden sollen 100 bis 200 Pixel pro Sekunde fliegen können
            this.type = Math.floor(Math.random() * 4); //wir haben vier Pfade, von denen der Asteroid random einen aussuchen soll
            this.size = _size;
        }
        move(_timeslice) {
            console.log("Asteroid movement");
        }
        draw() {
            console.log("Asteroid draw");
        }
    }
    Asteroid_Project.Asteroid = Asteroid;
})(Asteroid_Project || (Asteroid_Project = {}));
//# sourceMappingURL=Asteroid.js.map