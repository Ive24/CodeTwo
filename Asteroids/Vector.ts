namespace Asteroid_Project {

    export class Vector {
        x: number;
        y: number;

        constructor(_x: number, _y: number) {
            this.x = _x;
            this.y = _y;
            this.set(_x, _y);
        }

        set(_x: number, _y: number): void { //kann auch auf bereits bestehende Objekte angewandt werden
            this.x = _x;
            this.y = _y;
        }

        scale(_factor: number): void { //void, da hier der Vektor (das Objekt) selbst verändert wird und kein neu generierter Wert zurückgegeben werden soll
            this.x *= _factor;
            this.y *= _factor;
        }

        add(_addend: Vector): void {
            this.x += _addend.x;
            this.y += _addend.y;
        }

        random(_minLength: number, _maxLength: number): void {
            const length: number = _minLength + Math.random() * (_maxLength - _minLength);
            const direction: number = Math.random() * 2 * Math.PI;

            this.set(Math.cos(direction), Math.sin(direction));
            this.scale(length);
        }

        copy(): Vector {
            return new Vector(this.x, this.y);
        }

    }
}