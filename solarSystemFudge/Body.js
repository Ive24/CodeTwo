"use strict";
var SolarSystemFudge;
(function (SolarSystemFudge) {
    class Body extends SolarSystemFudge.f.Node {
        constructor(_name, _size, _color) {
            super(_name);
            this.distance = 0;
            this.velocityOrbit = 0;
            this.vRotation = 0;
            this.name = _name;
            this.size = _size;
            this.cmpMesh = new SolarSystemFudge.f.ComponentMesh(Body.mesh);
            this.cmpMaterial = new SolarSystemFudge.f.ComponentMaterial(Body.material);
            this.addComponent(new SolarSystemFudge.f.ComponentTransform());
        }
        setTransforms(_velocityOrbit, _vRotation, _distance) {
            this.velocityOrbit = _velocityOrbit / 1000 * (Math.PI / 180);
            this.vRotation = _vRotation / 1000 * (Math.PI / 180);
            this.distance = _distance;
        }
    }
    Body.mesh = new SolarSystemFudge.f.MeshSphere("Body");
    Body.material = new SolarSystemFudge.f.Material("Body", SolarSystemFudge.f.ShaderLit);
    SolarSystemFudge.Body = Body;
})(SolarSystemFudge || (SolarSystemFudge = {}));
//# sourceMappingURL=Body.js.map