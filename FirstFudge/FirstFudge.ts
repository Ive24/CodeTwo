namespace FirstFudge {
    import f = FudgeCore;
    console.log(f);

    window.addEventListener("load", start); //add a event Listener to the window to load the canvas before executing the script 

    function start(): void {
        const canvas: HTMLCanvasElement = document.querySelector("canvas")!;
        console.log(canvas);

        const cube: f.MeshCube = new f.MeshCube("Cube");
        console.log(cube);

        const camera: f.ComponentCamera = new f.ComponentCamera();
        console.log(camera);

        const viewport: f.Viewport = new f.Viewport();
        viewport.initialize("Viewport", null, camera, canvas);
    }
}