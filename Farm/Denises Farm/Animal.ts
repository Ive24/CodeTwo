namespace FarmSimulation {

    export class Animal {

        public species: string;
        public name: string;
        public noise: string;
        public food: FoodSupply;
        public stomach: number;

        public constructor(_species: string, _name: string, _noise: string, _food: FoodSupply, _stomach: number) {
            this.species = _species;
            this.name = _name;
            this.noise = _noise;
            this.food = _food;
            this.stomach = _stomach;
        }

        public eat(): void {
            this.food.stock -= this.stomach; // kennt die Variablen durch FoodSupply, kann darauf zugreifen / x -= y ist die Abkürzung für x - y = x
            this.food.report();
        }

        public sing(): void {

            const song: string = this.noise + this.noise;

            console.log("This is" + this.name + "the" + this.species);
            console.log(song);
        }
    }
}