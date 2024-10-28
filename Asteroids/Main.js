"use strict";
var Asteroid_Project;
(function (Asteroid_Project) {
    window.addEventListener("load", handleLoad);
    function handleLoad(_event) {
        console.log("Asteroids are starting.");
        const canvas = document.querySelector("canvas"); //  |
        if (!canvas)
            return;
        Asteroid_Project.crc2 = canvas.getContext("2d");
        Asteroid_Project.crc2.fillStyle = "black";
        Asteroid_Project.crc2.strokeStyle = "red";
        Asteroid_Project.createPaths();
        console.log("Asteroids paths", Asteroid_Project.asteroidPaths);
        const asteroid = new Asteroid_Project.Asteroid(1); // = ist immer eine Zuweisung, der Konstante asteroid vom Typ Asteroid wird ein neu kreiertes Objekt zugewiesen mit der Größe 1
        console.log(asteroid);
        asteroid.draw();
    }
})(Asteroid_Project || (Asteroid_Project = {}));
//# sourceMappingURL=Main.js.map