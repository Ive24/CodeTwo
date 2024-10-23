"use strict";
//global variables
const gravity = 5;
const cannons = [];
const cannonBalls = [];
const posPlayers = [];
const canvas = document.getElementsByTagName("canvas")[0];
const ctx = canvas.getContext("2d");
const peak = Math.floor(Math.random() * canvas.height * 0.5) + canvas.height * 0.25;
const platform1 = Math.floor(Math.random() * canvas.height * 0.5) + canvas.height * 0.5;
const platform2 = Math.floor(Math.random() * canvas.height * 0.5) + canvas.height * 0.5;
// Slider Variables
let slider1 = document.getElementById("angle1");
let angle1 = Number(slider1.value);
let slider2 = document.getElementById("angle2");
let angle2 = Number(slider2.value);
let slider3 = document.getElementById("gunpower1");
let gunpower1 = Number(slider3.value);
let slider4 = document.getElementById("gunpower2");
let gunpower2 = Number(slider4.value);
window.addEventListener("load", handleLoad);
setInterval(animationFrame, 16);
// Slider Values on Input
slider1.oninput = function () {
    angle1 = Number(slider1.value);
    console.log(angle1);
};
slider2.oninput = function () {
    angle2 = Number(slider2.value);
};
slider3.oninput = function () {
    gunpower1 = Number(slider3.value);
};
slider4.oninput = function () {
    gunpower2 = Number(slider4.value);
};
function handleLoad() {
    generateCannons(2);
    drawTerrain();
    drawCannons();
}
function generateCannons(_amount) {
    const pos1 = canvas.width * 0.15;
    const pos2 = canvas.width * 0.85;
    posPlayers.push(pos1);
    posPlayers.push(pos2);
    for (let i = 0; i < _amount; i++) {
        const newCannon = {
            player: i + 1,
            posX: posPlayers[i],
            posY: 0,
            path: new Path2D,
            shoot: false
        };
        cannons.push(newCannon);
    }
}
//generates cannonballs
function generateBall(_cannon) {
    const newBall = {
        player: _cannon.player,
        speed: 0,
        angle: 0,
        radius: 5,
        posX: _cannon.posX,
        posY: _cannon.posY,
        shoot: false
    };
    cannonBalls.push(newBall);
}
function drawTerrain() {
    ctx.beginPath();
    ctx.moveTo(0, platform1);
    ctx.lineTo(canvas.width * 0.3, platform1);
    ctx.lineTo(Math.floor(Math.random() * canvas.width * 0.3) + canvas.width * 0.3, peak);
    ctx.lineTo(canvas.width * 0.7, platform2);
    ctx.lineTo(canvas.width, platform2);
    ctx.strokeStyle = "black";
    ctx.stroke();
    ctx.fillStyle = "black";
    //ctx.fill();
}
//draws cannons
function drawCannons() {
    for (let i = 0; i < cannons.length; i++) {
        const cannon = cannons[i];
        const x = cannon.posX;
        const y = cannon.posY;
        const angle = 0;
        const cannonRadius = 15;
        cannon.path.moveTo(x, y);
        cannon.path.arc(x, y, cannonRadius, 0, 360);
        ctx.fillStyle = "black";
        ctx.fill(cannon.path);
    }
}
//draws the cannonballs currently in the air
function drawBalls() {
}
//fires the cannon
function fireCannon(_cannon) {
}
//calculates the balls flight path if cannon is fired
function ballFly(_ball) {
    if (_ball.shoot)
        _ball.posX += _ball.speed;
    _ball.posY += gravity;
    collisionCheck(_ball);
}
//checks if the ball hits something
function collisionCheck(_ball) {
}
function winner(_player) {
}
function animationFrame() {
    drawCannons();
    drawBalls();
    for (let i = 0; i < cannonBalls.length; i++) {
        ballFly(cannonBalls[i]);
    }
}
//# sourceMappingURL=ballerburg.js.map