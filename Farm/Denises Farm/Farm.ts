namespace FarmSimulation {

 export class Farm {

    stable: Animal[];
    pantry: FoodSupply[];

    constructor (_stable: Animal[], _pantry: FoodSupply[]){
        this.stable = _stable;
        this.pantry = _pantry; 
    }

    simulateDay (): void {
        for (let i: number = 0; i < this.stable.length; i++) {
            const animal: Animal = this.stable[i];
            animal.sing();
            animal.eat();
        }
    }
}

}