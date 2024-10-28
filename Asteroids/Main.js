"use strict";
var Asteroid_Project;
(function (Asteroid_Project) {
    window.addEventListener("load", handleLoad);
    const asteroids = [];
    function handleLoad(_event) {
        console.log("Asteroids are starting.");
        const canvas = document.querySelector("canvas"); //  | bedeutet "oder", die Konstante canvas kann entweder
        if (!canvas) // if(canvas == null), andere Schreibweise / ! bedeutet "nicht" und null wäre false / es steht sozusagen false ist gleich false hier 
            return;
        Asteroid_Project.crc2 = canvas.getContext("2d");
        Asteroid_Project.crc2.fillStyle = "black";
        Asteroid_Project.crc2.strokeStyle = "white";
        Asteroid_Project.crc2.fillRect(0, 0, Asteroid_Project.crc2.canvas.width, Asteroid_Project.crc2.canvas.height); //Background-color
        Asteroid_Project.createPaths();
        console.log("Asteroids paths", Asteroid_Project.asteroidPaths);
        createAsteroids(5);
        //createShip();
        //canvas.addEventListner("mousedown", loadLaser);
        //canvas.addEventListner("mouseup", shootLaser);
        //canvas.addEventListner("keypress", handleKeypress);
        //canvas.addEventListner("mousemove", setHeading);
        window.setInterval(update, 20); //alle 20 Millisekunden/ 50 mal pro Sekunde wird die Methode update aufgerufen
    }
    function createAsteroids(_nAsteroids) {
        console.log("create asteroids");
        for (let i = 0; i < _nAsteroids; i++) {
            const asteroid = new Asteroid_Project.Asteroid(1.0);
            asteroids.push(asteroid); //die Asteroiden werden in das asteroids Array gepackt
        }
    }
    function update() {
        console.log("Update");
        Asteroid_Project.crc2.fillRect(0, 0, Asteroid_Project.crc2.canvas.width, Asteroid_Project.crc2.canvas.height); //clear background
        for (const asteroid of asteroids) { //gehe das Array asteroids durch und hole nacheinander alle Elemente/ Asteroiden
            asteroid.move(1 / 50); // timeslice sind jetzt hier die 20 Millisekunden 
            asteroid.draw();
        }
        // ship.draw();
        // handleCollisions();
    }
})(Asteroid_Project || (Asteroid_Project = {}));
//# sourceMappingURL=Main.js.map