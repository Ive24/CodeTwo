namespace FirstFudge {
    import f = FudgeCore;
    console.log(f);


    window.addEventListener("load", start); //add a event Listener to the window to load the canvas before executing the script 

    const node: f.Node = new f.Node("Node");
    let viewport: f.Viewport;

    f.Loop.addEventListener(f.EVENT.LOOP_FRAME, moveCube);

    function start(): void {
        const canvas: HTMLCanvasElement = document.querySelector("canvas")!;
        console.log(canvas);

        const mesh: f.MeshCube = new f.MeshCube("Mesh");
        console.log(mesh);

        const camera: f.ComponentCamera = new f.ComponentCamera();
        console.log(camera);

        const compMesh: f.ComponentMesh = new f.ComponentMesh(mesh);
        node.addComponent(compMesh);

        const material: f.Material = new f.Material("Material", f.ShaderLit);
        const compMaterial: f.ComponentMaterial = new f.ComponentMaterial(material);
        compMaterial.clrPrimary.set(0.8, 0.7, 0.9, 0.5);
        node.addComponent(compMaterial);

        camera.mtxPivot.translateZ(5);
        camera.mtxPivot.rotateY(180);

        node.addComponent(new f.ComponentTransform());
        node.getComponent(f.ComponentTransform).mtxLocal.translateX(2);
        //the shortcut to line above: node.mtxLocal.translateX(2);
        //another version is to save it in a variable first const compTransform: f.ComponentTransform = new f.ComponentTransform(); node.addComponent(compTransform);

        console.log(node);

        viewport = new f.Viewport();
        viewport.initialize("Viewport", node, camera, canvas);
        viewport.draw();

        f.Loop.start(f.LOOP_MODE.TIME_GAME, 5);
        f.Time.game.setScale(50);
    }

    function moveCube(): void {

        const tSpeed: number = 1 / 1;
        const rSpeed: number = 360 / 1;
        const frameTimeInMilliSeconds: number = f.Loop.timeFrameGame; //Millisecond
        const frameTimeInSeconds: number = (frameTimeInMilliSeconds / 1000);
        // const degrees: number = 360 * frameTimeInSeconds; //amount of degree that we want to move in one second

        node.mtxLocal.translateX(-0.001, false);

        // console.log(degrees);
        node.mtxLocal.rotateY(1, false);

        if (f.Keyboard.isPressedOne([f.KEYBOARD_CODE.W]))
            node.mtxLocal.translateZ(tSpeed * frameTimeInSeconds);
        if (f.Keyboard.isPressedOne([f.KEYBOARD_CODE.S]))
            node.mtxLocal.translateZ(-tSpeed * frameTimeInSeconds);

        if (f.Keyboard.isPressedOne([f.KEYBOARD_CODE.A]))
            node.mtxLocal.translateZ(rSpeed * frameTimeInSeconds, false);
        if (f.Keyboard.isPressedOne([f.KEYBOARD_CODE.D]))
            node.mtxLocal.translateZ(-rSpeed * frameTimeInSeconds, false); //false: bedeutet hier, dass er sich, um das Weltsystem drehen soll (true wäre das lokale)
        viewport.draw();
    }
}