namespace SolarSystemFudge {

    export class Body extends f.Node {

        private static mesh: f.Mesh = new f.MeshSphere("Body");
        private static material: f.Material = new f.Material("Body", f.ShaderLit);

        // public position: f.Vector3;
        // public name: string;

        private size: number;
        private distance: number = 0;
        private velocityOrbit: number = 0;
        private vRotation: number = 0;
        private cmpMesh: f.ComponentMesh;
        private cmpMaterial: f.ComponentMaterial;

        public constructor(_name: string, _size: number, _color: string) {
            super(_name);
            this.name = _name;
            this.size = _size;

            this.cmpMesh = new f.ComponentMesh(Body.mesh);
            this.cmpMaterial = new f.ComponentMaterial(Body.material);
            this.addComponent(new f.ComponentTransform());

        }

        public setTransforms(_velocityOrbit: number, _vRotation: number, _distance: number): void {
            this.velocityOrbit = _velocityOrbit / 1000 * (Math.PI / 180);
            this.vRotation = _vRotation / 1000 * (Math.PI / 180);
            this.distance = _distance;
        }

    }
}