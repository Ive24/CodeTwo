namespace FarmSimulation {

    export class Cat extends Animal {

        furrcolor: string;
        friendly: boolean;

        constructor(_species: string, _name: string, _noise: string, _food: FoodSupply, _stomach: number, _furrcolor: string, _friendly: boolean) {  // Animal constructor(_species: string, _name: string, _noise: string, _food: FoodSupply, _stomach: number)
            super(_species, _name, _noise, _food, _stomach); //call superclass constructor 
            this.furrcolor = _furrcolor;
            this.friendly = _friendly;
        }

        dospecialAction(): void {
            console.log("catch mouse");
        }
    }
}