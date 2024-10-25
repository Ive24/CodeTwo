namespace FarmSimulation {

    export class FoodSupply{
    
        type: string;
        stock: number;
        fullStock: number;
    
        constructor (_type: string, _stock: number, _fullStock: number){
            this.type = _type;
            this.stock = _stock;
            this.fullStock = _fullStock;
        }
    
        report (): void {
            console.log (this.type + String(this.stock) + "remaining in the Pantry");
        }
    
        restock (): void {
            if (this.stock > 10){}
            else if (this.stock <= 10) {
                this.stock = this.fullStock;
            } 
        }
    }
}