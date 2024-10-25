namespace FarmSimulation {

    export class Farm {

        private stable: Animal[];
        private pantry: FoodSupply[];

        public constructor(_stable: Animal[], _pantry: FoodSupply[]) {
            this.stable = _stable;
            this.pantry = _pantry;
        }

        public simulateDay(): void {
            for (let i: number = 0; i < this.stable.length; i++) {
                const animal: Animal = this.stable[i];
                animal.sing();
                animal.eat();

                if (i == this.stable.length) {
                    console.log("Finished Singing!");
                }
            }

            for (let i: number = 0; i < this.pantry.length; i++) {
                const food: FoodSupply = this.pantry[i];
                food.restock();

                if (i == this.pantry.length) {
                    console.log("Pantry restocked.");
                }
            }
        }

    }

}