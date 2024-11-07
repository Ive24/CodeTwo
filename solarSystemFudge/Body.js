"use strict";
var SolarSystemFudge;
(function (SolarSystemFudge) {
    SolarSystemFudge.f = FudgeCore;
    class Body extends SolarSystemFudge.f.Node {
        constructor(_name, _size, _distance, _velocityOrbit, _color) {
            super(_name);
            this.distance = 0;
            this.velocityOrbit = 0;
            this.vRotation = 0;
            this.name = _name;
            this.size = _size;
            this.velocityOrbit = _velocityOrbit;
            this.rotationNode = new SolarSystemFudge.f.Node(_name + "Rotation Node");
            this.rotationNode.addComponent(new SolarSystemFudge.f.ComponentTransform());
            this.rotationNode.addChild(this);
            const tempMat = new SolarSystemFudge.f.ComponentMaterial(Body.material);
            tempMat.clrPrimary.setCSS(_color);
            this.addComponent(new SolarSystemFudge.f.ComponentMesh(Body.mesh));
            this.addComponent(tempMat);
            this.addComponent(new SolarSystemFudge.f.ComponentTransform());
            this.mtxLocal.translateX(_distance);
        }
        step() {
            this.rotationNode.mtxLocal.rotateY(this.velocityOrbit);
            const c = this.getChild(0);
            if (c) {
                for (const bn of c.getChildren()) {
                    bn.step();
                }
            }
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