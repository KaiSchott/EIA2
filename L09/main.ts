"use strict";

namespace L09_Ententeich {
    window.addEventListener("load", handleLoad);
    let crc2: CanvasRenderingContext2D;
    let line: number = 0.46;

    function handleLoad(_event: Event): void {
        let canvas: HTMLCanvasElement | null = document.querySelector("canvas");
        if (!canvas) return;
        crc2 = canvas.getContext("2d");
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        let horizon: number = crc2.canvas.height * line;

        drawBackground();
        drawSun({ x: canvas.width - 100, y: 75 }); 
        drawCloud({ x: 200, y: 150 }, { x: 250, y: 75 });
        drawCloud({ x: 500, y: 100 }, { x: 200, y: 50 });
        drawCloud({ x: 800, y: 200 }, { x: 150, y: 100 });
        drawMountains({ x: 0, y: horizon }, 75, 200, "rgb(114, 166, 176)", "white");
        drawMountains({ x: 0, y: horizon }, 50, 150, "rgb(101, 144, 151)", "rgb(230, 238, 242)");
        drawGrass();
        drawTree(); 
        drawLake();
       
        drawDuck();
    }

    function drawBackground(): void {
        console.log("Background");
        let gradient: CanvasGradient = crc2.createLinearGradient(0, 0, 0, crc2.canvas.height);
        gradient.addColorStop(0, "rgb(152, 217, 226)");
        gradient.addColorStop(0.3, "rgb(186, 226, 232)");
        gradient.addColorStop(0.75, "rgb(106, 178, 190)");
        gradient.addColorStop(1, "rgb(152, 217, 226)");
        crc2.fillStyle = gradient;
        crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);
    }

    function drawSun(_position: { x: number; y: number }): void {
        console.log("Sun", _position);
        let r1: number = 50;
        let r2: number = 150;
        let gradient: CanvasGradient = crc2.createRadialGradient(0, 0, r1, 0, 0, r2);
        gradient.addColorStop(0, "rgba(255, 255, 0, 0.6)"); // Gelbliche Farbe
        gradient.addColorStop(1, "rgba(253, 184, 19, 0)");
        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.fillStyle = gradient;
        crc2.arc(0, 0, r2, 0, 2 * Math.PI);
        crc2.fill();
        crc2.restore();
    }

    function drawCloud(_position: { x: number; y: number }, _size: { x: number; y: number }): void {
        console.log("Cloud", _position, _size);
        let nParticles: number = 20;
        let radiusParticle: number = 50;
        let particle: Path2D = new Path2D();
        let gradient: CanvasGradient = crc2.createRadialGradient(0, 0, 0, 0, 0, radiusParticle);
        particle.arc(0, 0, radiusParticle, 0, 2 * Math.PI);
        gradient.addColorStop(0, "rgba(255, 255, 255, 0.5)");
        gradient.addColorStop(1, "rgba(255, 255, 255, 0)");
        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.fillStyle = gradient;
        for (let drawn: number = 0; drawn < nParticles; drawn++) {
            crc2.save();
            let x: number = (Math.random() - 0.5) * _size.x;
            let y: number = -(Math.random() * _size.y);
            crc2.translate(x, y);
            crc2.fill(particle);
            crc2.restore();
        }
        crc2.restore();
    }

    function drawMountains(_position: { x: number; y: number }, _min: number, _max: number, _colorLow: string, _colorHigh: string): void {
        console.log("Mountains");
        let stepMin: number = 50;
        let stepMax: number = 150;
        let x: number = 0;
        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.beginPath();
        crc2.moveTo(0, 0);
        crc2.lineTo(0, -_max);
        do {
            x += stepMin + Math.random() * (stepMax - stepMin);
            let y: number = -_min - Math.random() * (_max - _min);
            crc2.lineTo(x, y);
        } while (x < crc2.canvas.width);
        crc2.lineTo(x, 0);
        crc2.closePath();
        let gradient: CanvasGradient = crc2.createLinearGradient(0, 0, 0, -_max);
        gradient.addColorStop(0, _colorLow);
        gradient.addColorStop(0.9, _colorHigh);
        crc2.fillStyle = gradient;
        crc2.fill();
        crc2.restore();
    }

    function drawGrass(): void {
        console.log("Grass");
        crc2.fillStyle = "rgb(106, 178, 106)";
        crc2.fillRect(0, crc2.canvas.height * line, crc2.canvas.width, crc2.canvas.height * (1 - line));
    }

    function drawTree(): void {
        console.log("Tree");
        crc2.fillStyle = "rgb(139, 69, 19)";
        crc2.fillRect(50, 400, 30, 200); // Stamm
        crc2.beginPath();
        crc2.arc(65, 350, 60, 0, Math.PI * 2); // Krone
        crc2.fillStyle = "rgb(0, 128, 0)";
        crc2.fill();
        crc2.closePath();
        crc2.beginPath();
        crc2.arc(30, 330, 60, 0, Math.PI * 2); // Krone
        crc2.fillStyle = "rgb(0, 128, 0)";
        crc2.fill();
        crc2.closePath();
        crc2.beginPath();
        crc2.arc(80, 330, 60, 0, Math.PI * 2); // Krone
        crc2.fillStyle = "rgb(0, 128, 0)";
        crc2.fill();
        crc2.closePath();
    }

    function drawLake(): void {
        console.log("Lake");
        crc2.fillStyle = "rgb(0, 119, 190)";
        crc2.beginPath();
        crc2.ellipse(crc2.canvas.width / 2, crc2.canvas.height * 0.6 + 100, 600, 200, 0, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.fill();
    }



    function drawDuck(): void {
        console.log("Duck");
        crc2.fillStyle = "rgb(255, 215, 0)";
        crc2.beginPath();
        crc2.arc(600, 650, 30, 0, 2 * Math.PI); // Körper
        crc2.fill();
        crc2.fillStyle = "black";
        crc2.beginPath();
        crc2.arc(585, 635, 5, 0, 2 * Math.PI); // Auge links
        crc2.fill();
        crc2.beginPath();
        crc2.arc(615, 635, 5, 0, 2 * Math.PI); // Auge rechts
        crc2.fill();
        crc2.beginPath();
        crc2.moveTo(580, 665);
        crc2.lineTo(600, 665);
        crc2.lineTo(615, 680);
        crc2.lineTo(585, 680);
        crc2.closePath();
        crc2.fill(); // Schnabel
    }
}
