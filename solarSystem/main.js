"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var SolarSystem;
(function (SolarSystem) {
    // global variables
    //const child: CelestialBody[] = [];
    let sun;
    //setting up the canvas
    const canvas = document.querySelector("canvas");
    SolarSystem.crc2 = canvas.getContext("2d");
    //Slider for the SpeedModifier
    const speedSlider = document.getElementById("SpeedModifier");
    window.addEventListener("load", handleLoad);
    // speedSlider.addEventListener("input", handleSliderInput);
    function handleLoad() {
        return __awaiter(this, void 0, void 0, function* () {
            //preparing the simulation
            console.log("loading page");
            const response = yield fetch("Data.json");
            const jsonData = yield response.json();
            const infoResponse = yield fetch("info.json");
            SolarSystem.jsonInfo = yield infoResponse.json();
            // console.log(jsonInfo[body.name].info);
            sun = createCelestialBodies(jsonData, SolarSystem.jsonInfo);
            canvas.addEventListener("click", handleClick);
            setInterval(update, 25);
        });
    }
    function createCelestialBodies(_data, _description) {
        //creating all simulated celestial bodies
        const body = new SolarSystem.CelestialBody(_data);
        for (const child of _data.children) {
            body.addChild(createCelestialBodies(child, _description));
        }
        return body;
    }
    function handleClick(_event) {
        const hit = sun.checkedIfClicked(_event);
        let planetName = "";
        let planetInfo = "";
        let planetText = "";
        //display planetName, planetInfo and planetText in div element beneath slider
        const nameBox = document.querySelector(".infoBlock .nameBox");
        const infoBox = document.querySelector(".infoBlock .infoBox");
        const textBox = document.querySelector(".infoBlock .textBox");
        if (hit) {
            planetName = hit.name;
            planetInfo = SolarSystem.jsonInfo[hit.name].info;
            planetText = SolarSystem.jsonInfo[hit.name].text;
            console.log(planetName);
            console.log(planetInfo);
            console.log(planetText);
            nameBox.innerHTML = planetName;
            infoBox.innerHTML = planetInfo;
            textBox.innerHTML = planetText;
        }
    }
    function update() {
        //updating and redrawing the simulation
        // console.log("updating");
        SolarSystem.crc2.clearRect(0, 0, canvas.width, canvas.height);
        SolarSystem.crc2.fillStyle = "black";
        SolarSystem.crc2.fillRect(0, 0, canvas.width, canvas.height);
        sun.draw();
        sun.orbitStep(Number(speedSlider.value));
    }
})(SolarSystem || (SolarSystem = {}));
//# sourceMappingURL=main.js.map