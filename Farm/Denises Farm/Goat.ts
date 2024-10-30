namespace FarmSimulation {

    export class Goat extends Animal {

        jumpheight: number;
        horns: boolean;

        constructor(_species: string, _name: string, _noise: string, _food: FoodSupply, _stomach: number, _jumpheigth: number, _horns: boolean) {  // Animal constructor(_species: string, _name: string, _noise: string, _food: FoodSupply, _stomach: number)
            super(_species, _name, _noise, _food, _stomach); //call superclass constructor 
            this.jumpheight = _jumpheigth;
            this.horns = _horns;
        }

        dospecialAction(): void {
            console.log(Goat.name + "i jumped" + this.jumpheight + "meters.");
        }
    }
}