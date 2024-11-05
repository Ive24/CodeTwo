"use strict";
var FirstFudge;
(function (FirstFudge) {
    var f = FudgeCore;
    console.log(f);
    window.addEventListener("load", start); //add a event Listener to the window to load the canvas before executing the script 
    f.Loop.addEventListener("loopFrame" /* f.EVENT.LOOP_FRAME */, moveCube);
    function start() {
        const canvas = document.querySelector("canvas");
        console.log(canvas);
        const mesh = new f.MeshCube("Mesh");
        console.log(mesh);
        const camera = new f.ComponentCamera();
        console.log(camera);
        const node = new f.Node("Node");
        const compMesh = new f.ComponentMesh(mesh);
        node.addComponent(compMesh);
        const material = new f.Material("Material", f.ShaderLit);
        const compMaterial = new f.ComponentMaterial(material);
        compMaterial.clrPrimary.set(0.8, 0.7, 0.9, 0.5);
        node.addComponent(compMaterial);
        camera.mtxPivot.translateZ(5);
        camera.mtxPivot.rotateY(180);
        node.addComponent(new f.ComponentTransform());
        node.getComponent(f.ComponentTransform).mtxLocal.translateX(2);
        //the shortcut to line above: node.mtxLocal.translateX(2);
        //another version is to save it in a variable first const compTransform: f.ComponentTransform = new f.ComponentTransform(); node.addComponent(compTransform);
        console.log(node);
        const viewport = new f.Viewport();
        viewport.initialize("Viewport", node, camera, canvas);
        viewport.draw();
    }
    function moveCube() {
        console.log("move cube");
    }
})(FirstFudge || (FirstFudge = {}));
//# sourceMappingURL=FirstFudge.js.map