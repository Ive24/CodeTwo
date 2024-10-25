namespace FarmSimulation {

 export class Farm {

    stable: Animal[];
    pantry: FoodSupply[];

    constructor (_stable: Animal[], _pantry: FoodSupply[]){
        this.stable = _stable;
        this.pantry = _pantry; 
    }

    fillPantry (): void {
        this.pantry.push(new FoodSupply("Meat", 20, 50));
        this.pantry.push(new FoodSupply("Hay", 60, 100));
        this.pantry.push(new FoodSupply("Corn", 35, 80));
    }

    createStable (): void {
        this.stable.push(new Animal("Cat", "Maurizius", "Miau", this.pantry[0], 1));
        this.stable.push(new Animal("Dog", "Milo", "Wouff", this.pantry[0], 2));
        this.stable.push(new Animal("Horse", "Schattenfell", "Hüh", this.pantry[1], 4));
        this.stable.push(new Animal("Cow", "Beatrice", "Muh", this.pantry[2], 5));
        this.stable.push(new Animal("Goat", "MGisela", "Mäh", this.pantry[1], 2));
    }

    simulateDay (): void {
        for (let i: number = 0; i < this.stable.length; i++) {
            const animal: Animal = this.stable[i];
            animal.sing();
            animal.eat();

            if (i == this.stable.length){
                console.log ("Finished Singing");
            }
        }

        for (let i:number = 0; i < this.pantry.length; i++) {
            const food: FoodSupply = this.pantry[i];
            food.restock();   
        }
    }

    }

}