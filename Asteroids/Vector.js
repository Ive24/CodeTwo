"use strict";
var Asteroid_Project;
(function (Asteroid_Project) {
    class Vector {
        constructor(_x, _y) {
            this.x = _x;
            this.y = _y;
            this.set(_x, _y);
        }
        set(_x, _y) {
            this.x = _x;
            this.y = _y;
        }
        scale(_factor) {
            this.x *= _factor;
            this.y *= _factor;
        }
        add(_addend) {
            this.x += _addend.x;
            this.y += _addend.y;
        }
    }
    Asteroid_Project.Vector = Vector;
})(Asteroid_Project || (Asteroid_Project = {}));
//# sourceMappingURL=Vector.js.map