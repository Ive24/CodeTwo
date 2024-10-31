"use strict";
var Asteroid_Project;
(function (Asteroid_Project) {
    class Moveable {
        constructor(_position) {
            //console.log("moveable constructor"); //console.log to check if the method works
            if (_position)
                this.position = _position.copy();
            else
                this.position = new Asteroid_Project.Vector(0, 0);
            this.velocity = new Asteroid_Project.Vector(0, 0);
        }
        move(_timeslice) {
            //console.log("moveable movement");
            const offset = new Asteroid_Project.Vector(this.velocity.x, this.velocity.y); //so weit würde der Asteroid in einer Sekunde kommen
            offset.scale(_timeslice); // um die Zeitspanne skalieren (kleinerer Wert)
            this.position.add(offset); //die Veränderung auf die aktuelle Position draufrechnen
            if (this.position.x < 0) // wenn die Asteroiden das Canvas verlassen sollen sie auf der anderen Seite wieder erscheinen
                this.position.x += Asteroid_Project.crc2.canvas.width; // dazu wird der Asteroid. um die Canvas-Länge/Höhe verschoben
            if (this.position.y < 0)
                this.position.y += Asteroid_Project.crc2.canvas.height;
            if (this.position.x > Asteroid_Project.crc2.canvas.width)
                this.position.x -= Asteroid_Project.crc2.canvas.width;
            if (this.position.y > Asteroid_Project.crc2.canvas.height)
                this.position.y -= Asteroid_Project.crc2.canvas.height;
        }
        draw() {
            //console.log("Asteroid draw");
            Asteroid_Project.crc2.save(); // speichern der alten transformation
            Asteroid_Project.crc2.translate(this.position.x, this.position.y);
            Asteroid_Project.crc2.scale(this.size, this.size);
            Asteroid_Project.crc2.translate(-50, -50); // Verschiebung nach oben links damt er Asteroid um sein Zentrum gezeichnet wird und weniger von der Ecke aus
            Asteroid_Project.crc2.lineWidth = Asteroid_Project.widthLine / this.size;
            Asteroid_Project.crc2.stroke(Asteroid_Project.asteroidPaths[this.type]); //der zu dem typ gehörende Pfad soll gezeichnet werden
            Asteroid_Project.crc2.restore();
        }
        isHit(_hotspot) {
            const hitsize = 50 * this.size;
            const difference = new Asteroid_Project.Vector(_hotspot.x - this.position.x, _hotspot.y - this.position.y); //sozusagen eine Collisionbox
            return (Math.abs(difference.x) < hitsize && Math.abs(difference.y) < hitsize); // abs, absolut (ohne Vorzeichen)
        }
    }
    Asteroid_Project.Moveable = Moveable;
})(Asteroid_Project || (Asteroid_Project = {}));
//# sourceMappingURL=Moveable.js.map