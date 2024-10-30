namespace FarmSimulation {

    export class Cow extends Animal {

        milkcow: boolean;
        place: string;

        constructor(_species: string, _name: string, _noise: string, _food: FoodSupply, _stomach: number, _milkcow: boolean, _place: string) {  // Animal constructor(_species: string, _name: string, _noise: string, _food: FoodSupply, _stomach: number)
            super(_species, _name, _noise, _food, _stomach); //call superclass constructor 
            this.milkcow = _milkcow;
            this.place = _place;
        }

        dospecialAction(): void {
            console.log("I prefer to be" + this.place);
        }
    }
}