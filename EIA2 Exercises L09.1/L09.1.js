"use strict";
var DnDKlassen;
(function (DnDKlassen) {
    class Krieger {
        //Methoden der Klasse
        //Bauplan von Objektaktionen 
        levelUp(_factor) {
            this.x *= _factor; //this bezieht sich auf die Werte innerhalb der Klasse, du musst es schreiben da das was du in der Methode angibst zwar ähnlich heißen kann, aber icht dasselbe ist. Ergo musst du dir veränderung dem ursprungswert zuweisen. Grüé an Jirka
            this.y *= _factor;
        }
        ;
        nope(_addend) {
            this.x += _addend.x;
            this.y += _addend.y;
        }
        ;
        firstLevel(_x, _y) {
            this.x = _x;
            this.y = _y;
        }
    }
    const aragorn = new Krieger(); //Erstellen eines neuen Objektes (Krieger) basierend auf dem Bauplan
    aragorn.firstLevel(5, 5);
    console.log("Ich bin ein krieger oder so");
    console.log(aragorn);
    aragorn.levelUp(2);
    console.log(aragorn);
})(DnDKlassen || (DnDKlassen = {}));
//# sourceMappingURL=L09.1.js.map