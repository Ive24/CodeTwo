namespace SolarSystemFudge {

    export class Body3D {

        private static mesh: f.Mesh;
        private static material: f.Material;

        public position: f.Vector3;
        private size: number;
        private distance: number;
        private velocityOrbit: number;
        private cmpMesh: f.ComponentMesh;
        private cmpMaterial: f.ComponentMaterial;
        private cmpTransform: f.ComponentTransform;

        public constructor() {

        }

    }
}