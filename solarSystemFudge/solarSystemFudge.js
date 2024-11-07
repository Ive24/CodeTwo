"use strict";
var SolarSystemFudge;
(function (SolarSystemFudge) {
    window.addEventListener("load", start);
    let sun;
    let viewport;
    let rotationNode;
    function start() {
        // nodes 
        sun = new SolarSystemFudge.Body("Sun", 1, 0, 0, "yellow");
        const earth = new SolarSystemFudge.Body("Earth", 1, 2, 0.5, "blue");
        const moon = new SolarSystemFudge.Body("Moon", 0.5, 1, 0.5, "grey");
        sun.addChild(earth.rotationNode);
        earth.addChild(moon.rotationNode);
        console.log("earth");
        // viewport and camera
        const canvas = document.querySelector("canvas");
        const camera = new SolarSystemFudge.f.ComponentCamera();
        // camera.mtxPivot.translateZ(25);
        // camera.mtxPivot.rotateY(180);
        camera.mtxPivot.rotateY(180);
        camera.mtxPivot.translateZ(-10);
        viewport = new SolarSystemFudge.f.Viewport();
        viewport.initialize("Viewport", sun, camera, canvas);
        viewport.draw();
        SolarSystemFudge.f.Loop.start(SolarSystemFudge.f.LOOP_MODE.TIME_GAME, 5);
        SolarSystemFudge.f.Time.game.setScale(5);
        //update
        SolarSystemFudge.f.Loop.addEventListener("loopFrame" /* f.EVENT.LOOP_FRAME */, update);
        SolarSystemFudge.f.Loop.start();
    }
    function update() {
        // rotationNode.mtxLocal.rotateY(1);
        sun.step();
        viewport.draw();
    }
})(SolarSystemFudge || (SolarSystemFudge = {}));
//# sourceMappingURL=solarSystemFudge.js.map