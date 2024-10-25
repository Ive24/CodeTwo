namespace FarmSimulation {

    window.addEventListener("load", handleLoad);

    function handleLoad (): void {

        const stable: Animal[] = [];
        const pantry: FoodSupply[] = [];

        const meat: FoodSupply = new FoodSupply("Meat", 20, 50);
        const hay: FoodSupply = new FoodSupply("Hay", 60, 100);
        const corn: FoodSupply = new FoodSupply("Corn", 35, 80);

        pantry.push(meat, hay, corn); 

        const cat: Animal = new Animal("Cat", "Maurizius", "Miau", pantry[0], 1);
        const dog: Animal = new Animal("Dog", "Milo", "Wouff", pantry[0], 2);
        const horse: Animal = new Animal("Horse", "Schattenfell", "Hüh", pantry[1], 4);
        const cow: Animal = new Animal("Cow", "Beatrice", "Muh", pantry[2], 5);
        const goat: Animal = new Animal("Goat", "MGisela", "Mäh", pantry[1], 2);

        stable.push(cat, dog, horse, cow, goat);


        //window.addEventListener("click", );

        }
    }


