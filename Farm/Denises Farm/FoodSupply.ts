namespace FarmSimulation {

    export class FoodSupply {

        public type: string;
        public stock: number;
        public fullStock: number;

        public constructor(_type: string, _stock: number, _fullStock: number) {
            this.type = _type;
            this.stock = _stock;
            this.fullStock = _fullStock;
        }

        public report(): void {
            console.log(this.type + String(this.stock) + "remaining in the Pantry");
        }

        public restock(): void {
            if (this.stock > 10) { }
            else if (this.stock <= 10) {
                this.stock = this.fullStock;
            }
        }
    }
}