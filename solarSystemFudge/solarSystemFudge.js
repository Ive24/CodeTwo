"use strict";
var SolarSystemFudge;
(function (SolarSystemFudge) {
    SolarSystemFudge.f = FudgeCore;
    window.addEventListener("load", start);
    const sun = new SolarSystemFudge.f.Node("Sun");
    let viewport;
    function start() {
        // nodes 
        const body = new SolarSystemFudge.Body("Sun", 1, "yellow");
        console.log("body");
        // viewport and camera
        const canvas = document.querySelector("canvas");
        const camera = new SolarSystemFudge.f.ComponentCamera();
        camera.mtxPivot.translateZ(25);
        camera.mtxPivot.rotateY(180);
        camera.mtxPivot.translateY(15);
        camera.mtxPivot.rotateX(45);
        viewport = new SolarSystemFudge.f.Viewport();
        viewport.initialize("Viewport", body, camera, canvas);
        viewport.draw();
        SolarSystemFudge.f.Loop.start(SolarSystemFudge.f.LOOP_MODE.TIME_GAME, 5);
        SolarSystemFudge.f.Time.game.setScale(5);
        //update
        SolarSystemFudge.f.Loop.addEventListener("loopFrame" /* f.EVENT.LOOP_FRAME */, update);
    }
    function update() {
        viewport.draw();
    }
})(SolarSystemFudge || (SolarSystemFudge = {}));
//# sourceMappingURL=solarSystemFudge.js.map