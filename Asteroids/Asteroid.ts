namespace Asteroid_Project {

    export class Asteroid {

        position: Vector;
        velocity: Vector;
        type: number;
        size: number;

        constructor(_size: number) {
            console.log("asteroid constructor"); //console.log to check if the method works
            this.position = new Vector(0, 0);
            this.velocity = new Vector(0, 0);
            this.velocity.random(100, 200); //Asteroiden sollen 100 bis 200 Pixel pro Sekunde fliegen können

            this.type = Math.floor(Math.random() * 4); //wir haben vier Pfade, von denen der Asteroid random einen aussuchen soll
            this.size = _size;
        }

        move(_timeslice: number): void {
            console.log("Asteroid movement")
        }

        draw(): void {
            console.log("Asteroid draw");
        }

    }
}