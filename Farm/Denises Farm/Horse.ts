namespace FarmSimulation {

    export class Horse extends Animal {

        speed: number;
        race: string;

        constructor(_species: string, _name: string, _noise: string, _food: FoodSupply, _stomach: number, _speed: number, _race: string) {  // Animal constructor(_species: string, _name: string, _noise: string, _food: FoodSupply, _stomach: number)
            super(_species, _name, _noise, _food, _stomach); //call superclass constructor 
            this.speed = _speed;
            this.race = _race;
        }

        dospecialAction(): void {
            console.log("I have a speed up to" + this.speed + "km/h.");
        }
    }
}