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
            Asteroid_Project.crc2.save(); // speichern der alten transformation
            Asteroid_Project.crc2.translate(this.position.x, this.position.y);
            Asteroid_Project.crc2.scale(this.size, this.size);
            Asteroid_Project.crc2.translate(-50, -50); // Verschiebung nach oben links damt er Asteroid um sein Zentrum gezeichnet wird und weniger von der Ecke aus
            Asteroid_Project.crc2.stroke(Asteroid_Project.asteroidPaths[this.type]); //der zu dem typ gehörende Pfad soll gezeichnet werden
            Asteroid_Project.crc2.restore();
        }
    }
    Asteroid_Project.Asteroid = Asteroid;
})(Asteroid_Project || (Asteroid_Project = {}));
//# sourceMappingURL=Asteroid.js.map