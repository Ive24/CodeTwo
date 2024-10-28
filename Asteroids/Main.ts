namespace Asteroid_Project {

    window.addEventListener("load", handleLoad);

    export let crc2: CanvasRenderingContext2D; //mit export deklarierte Variablen, Klassen und Funktionen können in anderen Files unter dem selben namespace genutzt werden

    function handleLoad(_event: Event): void { //Rückgabeparameter ist vom Typ Event
        console.log("Asteroids are starting.");
        const canvas: HTMLCanvasElement | null = document.querySelector("canvas"); //  |

        if (!canvas)
            return;
        crc2 = <CanvasRenderingContext2D>canvas.getContext("2d");
        crc2.fillStyle = "black";
        crc2.strokeStyle = "white";

        createPaths();
        console.log("Asteroids paths", asteroidPaths);

        const asteroid: Asteroid = new Asteroid(1); // = ist immer eine Zuweisung, der Konstante asteroid vom Typ Asteroid wird ein neu kreiertes Objekt zugewiesen mit der Größe 1
        console.log(asteroid);
    }
}