"use strict";
var L10_EntenteichClasses;
(function (L10_EntenteichClasses) {
    window.addEventListener("load", handleLoad);
    let crc2;
    let line = 0.46;
    let canvas;
    let moveables = [];
    let horizon;
    const numberOfDucks = 10;
    const numberOfDragonflies = 5;
    function handleLoad(_event) {
        canvas = document.querySelector("canvas");
        if (!canvas) {
            console.error("Canvas not found!");
            return;
        }
        crc2 = canvas.getContext("2d");
        if (!crc2) {
            console.error("2D context not found!");
            return;
        }
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        horizon = crc2.canvas.height * line;
        drawBackground();
        drawSun({ x: canvas.width - 100, y: 75 });
        createClouds();
        createDucks(numberOfDucks);
        createDragonflies(numberOfDragonflies);
        drawStaticMountains();
        drawGrass();
        drawLake();
        drawAdditionalTrees();
        animate();
    }
    function drawBackground() {
        let gradient = crc2.createLinearGradient(0, 0, 0, crc2.canvas.height);
        gradient.addColorStop(0, "rgb(152, 217, 226)");
        gradient.addColorStop(0.3, "rgb(186, 226, 232)");
        gradient.addColorStop(0.75, "rgb(106, 178, 190)");
        gradient.addColorStop(1, "rgb(152, 217, 226)");
        crc2.fillStyle = gradient;
        crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);
    }
    function drawSun(_position) {
        let r1 = 50;
        let r2 = 150;
        let gradient = crc2.createRadialGradient(0, 0, r1, 0, 0, r2);
        gradient.addColorStop(0, "rgba(255, 255, 0, 0.6)");
        gradient.addColorStop(1, "rgba(253, 184, 19, 0)");
        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.fillStyle = gradient;
        crc2.arc(0, 0, r2, 0, 2 * Math.PI);
        crc2.fill();
        crc2.restore();
    }
    function drawStaticMountains() {
        crc2.fillStyle = "rgb(114, 166, 176)";
        crc2.beginPath();
        crc2.moveTo(0, horizon);
        crc2.lineTo(200, horizon - 150);
        crc2.lineTo(400, horizon);
        crc2.lineTo(600, horizon - 200);
        crc2.lineTo(800, horizon);
        crc2.lineTo(1000, horizon - 150);
        crc2.lineTo(1200, horizon);
        crc2.lineTo(canvas.width, horizon - 100);
        crc2.lineTo(canvas.width, horizon);
        crc2.closePath();
        crc2.fill();
        crc2.fillStyle = "rgb(101, 144, 151)";
        crc2.beginPath();
        crc2.moveTo(0, horizon);
        crc2.lineTo(150, horizon - 100);
        crc2.lineTo(300, horizon);
        crc2.lineTo(450, horizon - 125);
        crc2.lineTo(600, horizon);
        crc2.lineTo(750, horizon - 75);
        crc2.lineTo(900, horizon);
        crc2.lineTo(1050, horizon - 100);
        crc2.lineTo(1200, horizon);
        crc2.lineTo(canvas.width, horizon - 50);
        crc2.lineTo(canvas.width, horizon);
        crc2.closePath();
        crc2.fill();
    }
    function drawGrass() {
        crc2.fillStyle = "rgb(106, 178, 106)";
        crc2.fillRect(0, horizon, crc2.canvas.width, crc2.canvas.height - horizon);
    }
    function drawTree(position) {
        crc2.fillStyle = "rgb(139, 69, 19)";
        crc2.fillRect(position.x, position.y, 30, 200);
        crc2.beginPath();
        crc2.arc(position.x + 15, position.y - 50, 60, 0, Math.PI * 2);
        crc2.fillStyle = "rgb(0, 128, 0)";
        crc2.fill();
        crc2.closePath();
        crc2.beginPath();
        crc2.arc(position.x - 20, position.y - 70, 60, 0, Math.PI * 2);
        crc2.fillStyle = "rgb(0, 128, 0)";
        crc2.fill();
        crc2.closePath();
        crc2.beginPath();
        crc2.arc(position.x + 35, position.y - 70, 60, 0, Math.PI * 2);
        crc2.fillStyle = "rgb(0, 128, 0)";
        crc2.fill();
        crc2.closePath();
    }
    function drawAdditionalTrees() {
        let leftTreePositions = [
            { x: canvas.width / 2 - 700, y: horizon + 150 },
            { x: canvas.width / 2 - 800, y: horizon + 180 },
            { x: canvas.width / 2 - 900, y: horizon + 210 },
            { x: canvas.width / 2 - 1000, y: horizon + 240 },
            { x: canvas.width / 2 - 1100, y: horizon + 270 },
            { x: canvas.width / 2 - 1200, y: horizon + 300 }
        ];
        let rightTreePositions = [
            { x: canvas.width / 2 + 600, y: horizon + 150 },
            { x: canvas.width / 2 + 700, y: horizon + 180 },
            { x: canvas.width / 2 + 800, y: horizon + 210 },
            { x: canvas.width / 2 + 900, y: horizon + 240 },
            { x: canvas.width / 2 + 1000, y: horizon + 270 },
            { x: canvas.width / 2 + 1100, y: horizon + 300 }
        ];
        for (let position of leftTreePositions) {
            drawTree(position);
        }
        for (let position of rightTreePositions) {
            drawTree(position);
        }
    }
    function drawLake() {
        crc2.fillStyle = "rgb(0, 119, 190)";
        crc2.beginPath();
        crc2.ellipse(crc2.canvas.width / 2, crc2.canvas.height * 0.6 + 100, 600, 200, 0, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.fill();
    }
    function createClouds() {
        moveables.push(new L10_EntenteichClasses.Cloud({ x: 200, y: 150 }, { x: 250, y: 75 }, 1));
        moveables.push(new L10_EntenteichClasses.Cloud({ x: 500, y: 100 }, { x: 200, y: 50 }, 0.5));
        moveables.push(new L10_EntenteichClasses.Cloud({ x: 800, y: 200 }, { x: 150, y: 100 }, 2));
    }
    function createDucks(count) {
        let pondArea = {
            x: crc2.canvas.width / 2 - 600,
            y: crc2.canvas.height * 0.6,
            width: 1200,
            height: 200
        };
        for (let i = 0; i < count; i++) {
            let randomX = pondArea.x + Math.random() * pondArea.width;
            let randomY = pondArea.y + Math.random() * pondArea.height;
            moveables.push(new L10_EntenteichClasses.Duck({ x: randomX, y: randomY }, pondArea));
        }
    }
    function createDragonflies(count) {
        for (let i = 0; i < count; i++) {
            let randomX = Math.random() * canvas.width;
            let randomY = Math.random() * horizon;
            moveables.push(new L10_EntenteichClasses.Dragonfly({ x: randomX, y: randomY }));
        }
    }
    function animate() {
        function frame() {
            crc2.clearRect(0, 0, crc2.canvas.width, crc2.canvas.height);
            drawBackground();
            drawSun({ x: canvas.width - 100, y: 75 });
            drawStaticMountains();
            drawGrass();
            drawLake();
            drawAdditionalTrees();
            for (let moveable of moveables) {
                moveable.move(canvas, horizon);
                moveable.draw(crc2);
            }
            requestAnimationFrame(frame);
        }
        frame();
    }
})(L10_EntenteichClasses || (L10_EntenteichClasses = {}));
//# sourceMappingURL=main.js.map