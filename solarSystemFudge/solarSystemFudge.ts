namespace SolarSystemFudge {
    export import f = FudgeCore;

    window.addEventListener("load", start);

    const sun: f.Node = new f.Node("Sun");
    let viewport: f.Viewport;

    function start(): void {

        // nodes 
        const body: Body = new Body("Sun", 1, "yellow");
        console.log("body");


        // viewport and camera
        const canvas: HTMLCanvasElement = document.querySelector("canvas")!;

        const camera: f.ComponentCamera = new f.ComponentCamera();

        camera.mtxPivot.translateZ(25);
        camera.mtxPivot.rotateY(180);

        viewport = new f.Viewport();
        viewport.initialize("Viewport", body, camera, canvas);
        viewport.draw();

        f.Loop.start(f.LOOP_MODE.TIME_GAME, 5);
        f.Time.game.setScale(5);

        //update
        f.Loop.addEventListener(f.EVENT.LOOP_FRAME, update);
    }

    function update(): void {

        //viewport.draw();
    }
}