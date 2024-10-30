namespace FarmSimulation {

    export class Dog extends Animal {

        walklength: number;
        favtoy: string;

        constructor(_species: string, _name: string, _noise: string, _food: FoodSupply, _stomach: number, _walklength: number, _favtoy: string) {  // Animal constructor(_species: string, _name: string, _noise: string, _food: FoodSupply, _stomach: number)
            super(_species, _name, _noise, _food, _stomach); //call superclass constructor 
            this.walklength = _walklength;
            this.favtoy = _favtoy;
        }

        dospecialAction(): void {
            console.log("TI can walk for" + this.walklength + "hours.");
        }
    }

}