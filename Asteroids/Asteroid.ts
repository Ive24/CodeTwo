namespace Asteroid_Project {

    export class Asteroid {

        position: Vector;
        velocity: Vector;
        type: number;
        size: number;

        constructor(_size: number, _position?: Vector) { //? bedeutet der Ausdruck kann da sein, muss aber nicht
            console.log("asteroid constructor"); //console.log to check if the method works

            if (_position)
                this.position = _position.copy();
            else
                this.position = new Vector(0, 0);

            this.velocity = new Vector(0, 0);
            this.velocity.random(100, 200); //Asteroiden sollen 100 bis 200 Pixel pro Sekunde fliegen können

            this.type = Math.floor(Math.random() * 4); //wir haben vier Pfade, von denen der Asteroid random einen aussuchen soll
            this.size = _size;
        }

        move(_timeslice: number): void {
            //console.log("Asteroid movement");
            const offset: Vector = new Vector(this.velocity.x, this.velocity.y); //so weit würde der Asteroid in einer Sekunde kommen
            offset.scale(_timeslice); // um die Zeitspanne skalieren (kleinerer Wert)
            this.position.add(offset); //die Veränderung auf die aktuelle Position draufrechnen

            if (this.position.x < 0) // wenn die Asteroiden das Canvas verlassen sollen sie auf der anderen Seite wieder erscheinen
                this.position.x += crc2.canvas.width; // dazu wird der Asteroid. um die Canvas-Länge/Höhe verschoben
            if (this.position.y < 0)
                this.position.y += crc2.canvas.height;
            if (this.position.x > crc2.canvas.width)
                this.position.x -= crc2.canvas.width;
            if (this.position.y > crc2.canvas.height)
                this.position.y -= crc2.canvas.height;
        }

        draw(): void {
            //console.log("Asteroid draw");
            crc2.save(); // speichern der alten transformation
            crc2.translate(this.position.x, this.position.y);
            crc2.scale(this.size, this.size);
            crc2.translate(-50, -50); // Verschiebung nach oben links damt er Asteroid um sein Zentrum gezeichnet wird und weniger von der Ecke aus
            crc2.stroke(asteroidPaths[this.type]); //der zu dem typ gehörende Pfad soll gezeichnet werden
            crc2.restore();
        }

        isHit(_hotspot: Vector): boolean { //eine Metjode soll immer eine Aktivität beschreiben, wenn es eine Prüfung ist sollte es mit "is" anfangen
            const hitsize: number = 50 * this.size;
            const difference: Vector = new Vector(_hotspot.x - this.position.x, _hotspot.y - this.position.y); //sozusagen eine Collisionbox
            return (Math.abs(difference.x) < hitsize && Math.abs(difference.y) < hitsize); // abs, absolut (ohne Vorzeichen)
        }

    }
}