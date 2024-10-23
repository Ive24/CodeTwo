var DnDKlassen;
(function (DnDKlassen) {
    var Krieger = /** @class */ (function () {
        function Krieger() {
        }
        //Methoden der Klasse
        //Bauplan von Objektaktionen 
        Krieger.prototype.levelUp = function (_factor) {
            this.x *= _factor; //this bezieht sich auf die Werte innerhalb der Klasse, du musst es schreiben da das was du in der Methode angibst zwar ähnlich heißen kann, aber icht dasselbe ist. Ergo musst du dir veränderung dem ursprungswert zuweisen. Grüé an Jirka
            this.y *= _factor;
        };
        ;
        Krieger.prototype.nope = function (_addend) {
            this.x += _addend.x;
            this.y += _addend.y;
        };
        ;
        Krieger.prototype.firstLevel = function (_x, _y) {
            this.x = _x;
            this.y = _y;
        };
        return Krieger;
    }());
    var aragorn = new Krieger(); //Erstellen eines neuen Objektes (Vektor) basierend auf dem Bauplan
    aragorn.firstLevel(5, 5);
    console.log("Ich bin ein krieger oder so");
    console.log(aragorn);
    aragorn.levelUp(2);
    console.log(aragorn);
})(DnDKlassen || (DnDKlassen = {}));
