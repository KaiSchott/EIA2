"use strict";
/// <reference path="Moveable.ts" />
var L10_EntenteichClasses;
(function (L10_EntenteichClasses) {
    class Cloud extends L10_EntenteichClasses.Moveable {
        size;
        speed;
        constructor(_position, _size, _speed) {
            super(_position, { x: _speed, y: 0 });
            this.size = _size;
            this.speed = _speed;
        }
        draw(crc2) {
            let nParticles = 20;
            let radiusParticle = 50;
            let particle = new Path2D();
            let gradient = crc2.createRadialGradient(0, 0, 0, 0, 0, radiusParticle);
            particle.arc(0, 0, radiusParticle, 0, 2 * Math.PI);
            gradient.addColorStop(0, "rgba(255, 255, 255, 0.5)");
            gradient.addColorStop(1, "rgba(255, 255, 255, 0)");
            crc2.save();
            crc2.translate(this.position.x, this.position.y);
            crc2.fillStyle = gradient;
            for (let drawn = 0; drawn < nParticles; drawn++) {
                crc2.save();
                let x = (Math.random() - 0.5) * this.size.x;
                let y = -(Math.random() * this.size.y);
                crc2.translate(x, y);
                crc2.fill(particle);
                crc2.restore();
            }
            crc2.restore();
        }
        move(canvas) {
            this.position.x += this.speed;
            if (this.position.x > canvas.width) {
                this.position.x = -this.size.x;
            }
        }
    }
    L10_EntenteichClasses.Cloud = Cloud;
})(L10_EntenteichClasses || (L10_EntenteichClasses = {}));
//# sourceMappingURL=cloud.js.map