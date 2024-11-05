"use strict";
var SolarSystem;
(function (SolarSystem) {
    class CelestialBody {
        constructor(_data) {
            const children = [];
            const earthSpeed = 0.00015;
            this.children = children;
            this.name = _data.name;
            this.color = _data.color;
            this.radius = _data.radius;
            this.rotAngle = _data.rotAngle;
            this.rotSpeed = _data.speedFactor * earthSpeed;
            this.distanceFromCenter = _data.distanceFromCenter;
            this.path = new Path2D;
        }
        draw() {
            //draw every celestial body in the children array
            // console.log("draw celestial bodies");
            const path = new Path2D;
            SolarSystem.crc2.save();
            SolarSystem.crc2.rotate(this.rotAngle);
            SolarSystem.crc2.translate(this.distanceFromCenter, 0);
            SolarSystem.crc2.fillStyle = this.color;
            path.arc(0, 0, this.radius, 0, 2 * Math.PI);
            SolarSystem.crc2.fill(path);
            path.closePath();
            this.path = path;
            for (let i = 0; i < this.children.length; i++) {
                const child = this.children[i];
                child.draw();
            }
            SolarSystem.crc2.restore();
        }
        orbitStep(_speedModifier) {
            // console.log("orbit step");
            this.rotAngle += this.rotSpeed * _speedModifier;
            if (this.rotAngle > 360) {
                this.rotAngle -= 360;
            }
            for (let i = 0; i < this.children.length; i++) {
                const child = this.children[i];
                child.orbitStep(_speedModifier);
            }
        }
        checkedIfClicked(_event) {
            // console.log("clicked");
            SolarSystem.crc2.save();
            SolarSystem.crc2.rotate(this.rotAngle);
            SolarSystem.crc2.translate(this.distanceFromCenter, 0);
            const x = _event.offsetX;
            const y = _event.offsetY;
            //check if the the planet = its path is clicked -> else: check for the children 
            if (SolarSystem.crc2.isPointInPath(this.path, x, y))
                return this;
            else
                for (const child of this.children) {
                    child.checkedIfClicked(_event);
                }
            SolarSystem.crc2.restore();
            return null;
        }
        addChild(_child) {
            this.children.push(_child);
        }
    }
    SolarSystem.CelestialBody = CelestialBody;
})(SolarSystem || (SolarSystem = {}));
//# sourceMappingURL=CelestialBody.js.map