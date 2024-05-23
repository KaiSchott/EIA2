"use strict";
var L09_Ententeich;
(function (L09_Ententeich) {
    class Dragonfly {
        position;
        velocity;
        constructor(initialPosition) {
            this.position = initialPosition;
            this.velocity = { x: (Math.random() - 0.5) * 4, y: (Math.random() - 0.5) * 4 };
        }
        draw(crc2) {
            crc2.fillStyle = "rgb(0, 0, 0)";
            // Draw body
            crc2.beginPath();
            crc2.ellipse(this.position.x, this.position.y, 3, 10, Math.PI / 2, 0, 2 * Math.PI);
            crc2.fill();
            // Draw tail
            for (let i = 1; i < 7; i++) {
                crc2.beginPath();
                crc2.ellipse(this.position.x, this.position.y + i * 10, 2, 5, Math.PI / 2, 0, 2 * Math.PI);
                crc2.fill();
            }
            // Draw wings
            crc2.beginPath();
            crc2.ellipse(this.position.x + 5, this.position.y - 10, 20, 5, Math.PI / 4, 0, 2 * Math.PI);
            crc2.fill();
            crc2.beginPath();
            crc2.ellipse(this.position.x - 5, this.position.y - 10, 20, 5, -Math.PI / 4, 0, 2 * Math.PI);
            crc2.fill();
            crc2.beginPath();
            crc2.ellipse(this.position.x + 5, this.position.y, 20, 5, -Math.PI / 4, 0, 2 * Math.PI);
            crc2.fill();
            crc2.beginPath();
            crc2.ellipse(this.position.x - 5, this.position.y, 20, 5, Math.PI / 4, 0, 2 * Math.PI);
            crc2.fill();
        }
        updatePosition(canvas, horizon) {
            this.position.x += this.velocity.x;
            this.position.y += this.velocity.y;
            if (this.position.x < 0 || this.position.x > canvas.width) {
                this.velocity.x *= -1;
            }
            if (this.position.y < 0 || this.position.y > horizon) {
                this.velocity.y *= -1;
            }
        }
    }
    L09_Ententeich.Dragonfly = Dragonfly;
})(L09_Ententeich || (L09_Ententeich = {}));
//# sourceMappingURL=Dragonfly.js.map