"use strict";
var FirstFudge;
(function (FirstFudge) {
    var f = FudgeCore;
    console.log(f);
    window.addEventListener("load", start); //add a event Listener to the window to load the canvas before executing the script 
    const node = new f.Node("Node");
    const ground = new f.Node("Ground");
    ground.appendChild(node);
    let viewport;
    f.Loop.addEventListener("loopFrame" /* f.EVENT.LOOP_FRAME */, moveCube);
    function start() {
        const canvas = document.querySelector("canvas");
        console.log(canvas);
        const mesh = new f.MeshCube("Mesh");
        console.log(mesh);
        const groundMesh = new f.MeshQuad("Ground");
        const camera = new f.ComponentCamera();
        console.log(camera);
        const compMesh = new f.ComponentMesh(mesh);
        node.addComponent(compMesh);
        const cmpGroundMesh = new f.ComponentMesh(groundMesh);
        ground.addComponent(cmpGroundMesh);
        const material = new f.Material("Material", f.ShaderLit);
        const compMaterial = new f.ComponentMaterial(material);
        compMaterial.clrPrimary.set(0.8, 0.7, 0.9, 0.5);
        node.addComponent(compMaterial);
        camera.mtxPivot.translateZ(15);
        camera.mtxPivot.rotateY(180);
        // camera.mtxPivot.translateY(15);
        // camera.mtxPivot.rotateX(45);
        node.addComponent(new f.ComponentTransform());
        node.getComponent(f.ComponentTransform).mtxLocal.translateX(2);
        //the shortcut to line above: node.mtxLocal.translateX(2);
        //another version is to save it in a variable first const compTransform: f.ComponentTransform = new f.ComponentTransform(); node.addComponent(compTransform);
        console.log(node);
        viewport = new f.Viewport();
        viewport.initialize("Viewport", node, camera, canvas);
        viewport.draw();
        f.Loop.start(f.LOOP_MODE.TIME_GAME, 5);
        f.Time.game.setScale(5);
    }
    function moveCube() {
        const tSpeed = 1 / 1;
        const rSpeed = 360 / 1;
        const frameTimeInMilliSeconds = f.Loop.timeFrameGame; //Millisecond
        const frameTimeInSeconds = (frameTimeInMilliSeconds / 1000);
        // const degrees: number = 360 * frameTimeInSeconds; //amount of degree that we want to move in one second
        node.mtxLocal.translateX(-0.001, false);
        // console.log(degrees);
        node.mtxLocal.rotateY(1, false);
        if (f.Keyboard.isPressedOne([f.KEYBOARD_CODE.W]))
            node.mtxLocal.translateZ(tSpeed * frameTimeInSeconds);
        if (f.Keyboard.isPressedOne([f.KEYBOARD_CODE.S]))
            node.mtxLocal.translateZ(-tSpeed * frameTimeInSeconds);
        if (f.Keyboard.isPressedOne([f.KEYBOARD_CODE.A]))
            node.mtxLocal.rotateY(rSpeed * frameTimeInSeconds);
        if (f.Keyboard.isPressedOne([f.KEYBOARD_CODE.D]))
            node.mtxLocal.rotateY(-rSpeed * frameTimeInSeconds); //false: bedeutet hier, dass er sich, um das Weltsystem drehen soll (true wäre das lokale)
        viewport.camera.mtxPivot.lookAt(ground.mtxWorld.translation); // world matrix: the absolute position in the world 
        // viewport.camera.mtxPivot.lookAt(new f.Vector3(0, 0, 0)); //viewport knows the camera 
        viewport.draw();
    }
})(FirstFudge || (FirstFudge = {}));
//# sourceMappingURL=FirstFudge.js.map