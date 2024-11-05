"use strict";
var FirstFudge;
(function (FirstFudge) {
    var f = FudgeCore;
    console.log(f);
    window.addEventListener("load", start); //add a event Listener to the window to load the canvas before executing the script 
    function start() {
        const canvas = document.querySelector("canvas");
        console.log(canvas);
        const cube = new f.MeshCube("Cube");
        console.log(cube);
        const camera = new f.ComponentCamera();
        console.log(camera);
        const viewport = new f.Viewport();
        viewport.initialize("Viewport", null, camera, canvas);
    }
})(FirstFudge || (FirstFudge = {}));
//# sourceMappingURL=FirstFudge.js.map