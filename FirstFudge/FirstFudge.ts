namespace FirstFudge {
    import f = FudgeCore;
    console.log(f);


    window.addEventListener("load", start); //add a event Listener to the window to load the canvas before executing the script 

    const ground: f.Node = new f.Node("Ground");
    const car: f.Node = new f.Node("Node");
    ground.addChild(car);
    let viewport: f.Viewport;

    f.Loop.addEventListener(f.EVENT.LOOP_FRAME, moveCube);

    function start(): void {
        const canvas: HTMLCanvasElement = document.querySelector("canvas")!;

        //ground-node
        const groundMesh: f.MeshQuad = new f.MeshQuad("Ground");

        const cmpGroundMesh: f.ComponentMesh = new f.ComponentMesh(groundMesh);
        cmpGroundMesh.mtxPivot.rotateX(-90);
        cmpGroundMesh.mtxPivot.scale(new f.Vector3(50, 50, 50));
        ground.addComponent(cmpGroundMesh);

        const materialGround: f.Material = new f.Material("MaterialGround", f.ShaderLitTextured);
        const compMaterialGround: f.ComponentMaterial = new f.ComponentMaterial(materialGround);
        ground.addComponent(compMaterialGround);

        //car-node 
        const mesh: f.MeshCube = new f.MeshCube("Mesh");

        const compMesh: f.ComponentMesh = new f.ComponentMesh(mesh);
        compMesh.mtxPivot.translateY(0.5);
        car.addComponent(compMesh);

        const material: f.Material = new f.Material("Material", f.ShaderLit);
        const compMaterial: f.ComponentMaterial = new f.ComponentMaterial(material);
        compMaterial.clrPrimary.set(0.7, 0.5, 0.9, 0.5);
        car.addComponent(compMaterial);

        car.addComponent(new f.ComponentTransform());
        car.getComponent(f.ComponentTransform).mtxLocal.translateX(2);
        //the shortcut to line above: node.mtxLocal.translateX(2);
        //another version is to save it in a variable first const compTransform: f.ComponentTransform = new f.ComponentTransform(); node.addComponent(compTransform);


        //Viewport and camera
        const camera: f.ComponentCamera = new f.ComponentCamera();

        camera.mtxPivot.translateZ(25);
        camera.mtxPivot.rotateY(180);
        camera.mtxPivot.translateY(15);
        camera.mtxPivot.rotateX(45);

        viewport = new f.Viewport();
        viewport.initialize("Viewport", ground, camera, canvas);
        viewport.draw();

        f.Loop.start(f.LOOP_MODE.TIME_GAME, 5);
        f.Time.game.setScale(5);
    }

    function moveCube(): void {

        const tSpeed: number = 1 / 1;
        const rSpeed: number = 360 / 1;
        const frameTimeInMilliSeconds: number = f.Loop.timeFrameGame; //Millisecond
        const frameTimeInSeconds: number = (frameTimeInMilliSeconds / 1000);
        // const degrees: number = 360 * frameTimeInSeconds; //amount of degree that we want to move in one second

        car.mtxLocal.translateX(-0.001, false);

        // console.log(degrees);
        car.mtxLocal.rotateY(1, false);

        if (f.Keyboard.isPressedOne([f.KEYBOARD_CODE.W]))
            car.mtxLocal.translateZ(tSpeed * frameTimeInSeconds);
        if (f.Keyboard.isPressedOne([f.KEYBOARD_CODE.S]))
            car.mtxLocal.translateZ(-tSpeed * frameTimeInSeconds);

        if (f.Keyboard.isPressedOne([f.KEYBOARD_CODE.A]))
            car.mtxLocal.rotateY(rSpeed * frameTimeInSeconds);
        if (f.Keyboard.isPressedOne([f.KEYBOARD_CODE.D]))
            car.mtxLocal.rotateY(-rSpeed * frameTimeInSeconds); //false: bedeutet hier, dass er sich, um das Weltsystem drehen soll (true wäre das lokale)


        const up: f.Vector3 = f.Vector3.Y();
        viewport.camera.mtxPivot.lookAt(car.mtxWorld.translation, f.Vector3.Y()); // world matrix: the absolute position in the world 
        // viewport.camera.mtxPivot.lookAt(new f.Vector3(0, 0, 0)); //viewport knows the camera 
        f.Recycler.store(up);

        viewport.draw();
    }
}