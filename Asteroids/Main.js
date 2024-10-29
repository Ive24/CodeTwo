"use strict";
var Asteroid_Project;
(function (Asteroid_Project) {
    window.addEventListener("load", handleLoad);
    Asteroid_Project.linewidth = 2;
    const asteroids = [];
    function handleLoad(_event) {
        console.log("Asteroids are starting.");
        const canvas = document.querySelector("canvas"); //  | bedeutet "oder", die Konstante canvas kann entweder
        if (!canvas) // if(canvas == null), andere Schreibweise / ! bedeutet "nicht" und null wäre false / es steht sozusagen false ist gleich false hier 
            return;
        Asteroid_Project.crc2 = canvas.getContext("2d");
        Asteroid_Project.crc2.fillStyle = "black";
        Asteroid_Project.crc2.strokeStyle = "white";
        // crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height); //Background-color
        Asteroid_Project.createPaths();
        console.log("Asteroids paths", Asteroid_Project.asteroidPaths);
        createAsteroids(5);
        //createShip();
        //canvas.addEventListener("mousedown", loadLaser);
        canvas.addEventListener("mouseup", shootLaser);
        //canvas.addEventListener("keypress", handleKeypress);
        //canvas.addEventListener("mousemove", setHeading);
        window.setInterval(update, 20); //alle 20 Millisekunden/ 50 mal pro Sekunde wird die Methode update aufgerufen
    }
    function shootLaser(_event) {
        console.log("shoot laser");
        const hotspot = new Asteroid_Project.Vector(_event.clientX - Asteroid_Project.crc2.canvas.offsetLeft, _event.clientY - Asteroid_Project.crc2.canvas.offsetTop); // hotspot, wo der Laser trifft
        const asteroidHit = getAsteroidHit(hotspot);
        console.log(asteroidHit);
        if (asteroidHit)
            breakAsteroid(asteroidHit);
    }
    function getAsteroidHit(_hotspot) {
        for (const asteroid of asteroids) {
            if (asteroid.isHit(_hotspot)) //der Asteroid checkt, ob er getroffen wurde (er kennt seine Position, Form etc., das Hauptprogramm nicht)
                return asteroid;
        }
        return null;
    }
    function breakAsteroid(_asteroid) {
        if (_asteroid.size > 0.3) {
            for (let i = 0; i < 2; i++) {
                const fragment = new Asteroid_Project.Asteroid(_asteroid.size / 2, _asteroid.position); //der getroffene Asteroid wird in zwei neue Fragmente gespalten
                fragment.velocity.add(_asteroid.velocity); //die Fragmente bekommen eine eigene Geschwindigkeit, abhängig von der ursprünglichen Geschwindigkeit
                asteroids.push(fragment);
            }
        }
        const index = asteroids.indexOf(_asteroid); //indexOf, schau an welcher Stelle im Array der Asteroid ist
        asteroids.splice(index, 1); //splice, löscht ein Element aus dem Array (der getroffene Asteroid wird gelöscht und nur die neuen Fragmente bleiben bestehen)
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