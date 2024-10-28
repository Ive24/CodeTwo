namespace Asteroid_Project {

    export class Asteroid {

        position: Vector;
        velocity: Vector;
        type: number;
        size: number;

        constructor(_size: number) {
            console.log("asteroid constructor"); //console.log to check if the method works
        }

        moveBy(_timeslice: number): void {
            console.log("Asteroid movement")
        }

        draw(): void {
            console.log("Asteroid draw");
        }

    }
}