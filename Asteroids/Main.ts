namespace Asteroid_Project {

    window.addEventListener("load", handleLoad);

    export let crc2: CanvasRenderingContext2D; //mit export deklarierte Variablen, Klassen und Funktionen können in anderen Files unter dem selben namespace genutzt werden

    const asteroids: Asteroid[] = [];

    function handleLoad(_event: Event): void { //Rückgabeparameter ist vom Typ Event
        console.log("Asteroids are starting.");
        const canvas: HTMLCanvasElement | null = document.querySelector("canvas"); //  | bedeutet "oder", die Konstante canvas kann entweder

        if (!canvas) // if(canvas == null), andere Schreibweise / ! bedeutet "nicht" und null wäre false / es steht sozusagen false ist gleich false hier 
            return;
        crc2 = <CanvasRenderingContext2D>canvas.getContext("2d");
        crc2.fillStyle = "black";
        crc2.strokeStyle = "white";
        crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height); //Background-color

        createPaths();
        console.log("Asteroids paths", asteroidPaths);

        createAsteroids(5);
        //createShip();

        //canvas.addEventListner("mousedown", loadLaser);
        //canvas.addEventListner("mouseup", shootLaser);
        //canvas.addEventListner("keypress", handleKeypress);
        //canvas.addEventListner("mousemove", setHeading);

        window.setInterval(update, 20); //alle 20 Millisekunden/ 50 mal pro Sekunde wird die Methode update aufgerufen
    }

    function shootLaser(_event: MouseEvent): void {
        console.log("shoot laser");
        const hotspot: Vector = new Vector(_event.clientX - crc2.canvas.offsetLeft, _event.clientY - crc2.canvas.offsetTop); // hotspot, wo der Laser trifft
        const asteroidHit: Asteroid | null = getAsteroidHit(hotspot);
        if (asteroidHIt)
            breakAsteroid(asteroidHit);
    }

    function getAsteroidHit(_hotspot: Vector): Asteroid | null {
        for (const asteroid of asteroids) {
            if (asteroid.isHit(_hotspot));
                return asteroid;
        }
        return null;
    }

    function createAsteroids(_nAsteroids: number): void { //Schleife läuft fünf mal durch (siehe Zeile 23), jedes Mal wird ein neuer Asteroid erstellt
        console.log("create asteroids");
        for (let i: number = 0; i < _nAsteroids; i++) {
            const asteroid: Asteroid = new Asteroid(1.0);
            asteroids.push(asteroid); //die Asteroiden werden in das asteroids Array gepackt
        }
    }

    function update(): void {
        console.log("Update");
        crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height); //clear background

        for (const asteroid of asteroids) { //gehe das Array asteroids durch und hole nacheinander alle Elemente/ Asteroiden
            asteroid.move(1 / 50); // timeslice sind jetzt hier die 20 Millisekunden 
            asteroid.draw();
        }

        // ship.draw();
        // handleCollisions();
    }
}