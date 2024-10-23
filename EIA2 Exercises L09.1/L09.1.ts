namespace DnDKlassen {

    class Krieger { //allgemeine Baupläne für alle Objekte dieser Klasse
        //Attribute der Klasse
        //Bauplan Objekteigenschaften
        x: number ; 
        y: number ;
    
        //Methoden der Klasse
        //Bauplan von Objektaktionen 
       levelUp (_factor: number): void { 
            this.x *= _factor; //this bezieht sich auf die Werte innerhalb der Klasse, du musst es schreiben da das was du in der Methode angibst zwar ähnlich heißen kann, aber icht dasselbe ist. Ergo musst du dir veränderung dem ursprungswert zuweisen. Grüé an Jirka
            this.y *= _factor;
        };
    
        nope (_addend: Krieger): void {
            this.x += _addend.x;
            this.y += _addend.y;
        };

        firstLevel (_x: number, _y: number): void {
           this.x = _x;
           this.y = _y;
        }
    }

    const aragorn: Krieger = new Krieger(); //Erstellen eines neuen Objektes (Vektor) basierend auf dem Bauplan
    aragorn.firstLevel(5,5)
    console.log("Ich bin ein krieger oder so")
    console.log(aragorn)
    aragorn.levelUp(2);
    console.log(aragorn);

    

}