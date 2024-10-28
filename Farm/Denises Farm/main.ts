namespace FarmSimulation {

    window.addEventListener("load", handleLoad);

    function handleLoad(): void {

        const stableMacDonald: Animal[] = [];
        const pantryMacDonald: FoodSupply[] = [];

        const meat: FoodSupply = new FoodSupply("Meat", 20, 50);
        const hay: FoodSupply = new FoodSupply("Hay", 60, 100);
        const corn: FoodSupply = new FoodSupply("Corn", 35, 80);

        pantryMacDonald.push(meat, hay, corn);

        const cat: Animal = new Animal("Cat", "Maurizius", "Miau", pantryMacDonald[0], 1);
        const dog: Animal = new Animal("Dog", "Milo", "Wouff", pantryMacDonald[0], 2);
        const horse: Animal = new Animal("Horse", "Schattenfell", "Hüh", pantryMacDonald[1], 4);
        const cow: Animal = new Animal("Cow", "Beatrice", "Muh", pantryMacDonald[2], 5);
        const goat: Animal = new Animal("Goat", "MGisela", "Mäh", pantryMacDonald[1], 2);

        stableMacDonald.push(cat, dog, horse, cow, goat);

        // create the farm object
        const macDonald: Farm = new Farm(stableMacDonald, pantryMacDonald);

        // add a listner for a click event 
        window.addEventListener("click", macDonald.simulateDay); //.bind(macDonald)); an alternative to declare that the called function gets used with the wanted object

    }

}


