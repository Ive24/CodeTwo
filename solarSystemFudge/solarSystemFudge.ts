namespace SolarSystemFudge {

    window.addEventListener("load", start);

    let sun: Body;
    let viewport: f.Viewport;
    let rotationNode: f.Node;

    function start(): void {

        // nodes 
        sun = new Body("Sun", 1, 0, 0, "yellow");
        const earth: Body = new Body("Earth", 1, 2, 0.5, "blue");
        const moon: Body = new Body("Moon", 0.5, 1, 0.5, "grey");

        sun.addChild(earth.rotationNode);
        earth.addChild(moon.rotationNode);

        console.log("earth");


        // viewport and camera
        const canvas: HTMLCanvasElement = document.querySelector("canvas")!;

        const camera: f.ComponentCamera = new f.ComponentCamera();

        // camera.mtxPivot.translateZ(25);
        // camera.mtxPivot.rotateY(180);
        camera.mtxPivot.rotateY(180);
        camera.mtxPivot.translateZ(-10);

        viewport = new f.Viewport();
        viewport.initialize("Viewport", sun, camera, canvas);
        viewport.draw();

        f.Loop.start(f.LOOP_MODE.TIME_GAME, 5);
        f.Time.game.setScale(5);

        //update
        f.Loop.addEventListener(f.EVENT.LOOP_FRAME, update);
        f.Loop.start();
    }

    function update(): void {

        // rotationNode.mtxLocal.rotateY(1);

        sun.step();

        viewport.draw();
    }
}