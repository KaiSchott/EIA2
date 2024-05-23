"use strict";
var L09_Ententeich;
(function (L09_Ententeich) {
    class Duck {
        position;
        velocity;
        pondArea;
        constructor(initialPosition, pondArea) {
            this.position = initialPosition;
            this.velocity = { x: (Math.random() - 0.5) * 2, y: (Math.random() - 0.5) * 2 };
            this.pondArea = {
                x: pondArea.x + 50,
                y: pondArea.y + 50,
                width: pondArea.width - 100,
                height: pondArea.height - 100
            };
        }
        draw(crc2) {
            // Körper der Ente
            crc2.fillStyle = "rgb(255, 223, 186)"; // Helleres Orange
            crc2.beginPath();
            crc2.ellipse(this.position.x, this.position.y, 35, 25, 0, 0, Math.PI * 2);
            crc2.closePath();
            crc2.fill();
            // Kopf der Ente
            crc2.beginPath();
            crc2.arc(this.position.x + 25, this.position.y - 15, 20, 0, Math.PI * 2);
            crc2.closePath();
            crc2.fill();
            // Schnabel der Ente
            crc2.fillStyle = "rgb(255, 140, 0)"; // Etwas dunkleres Orange
            crc2.beginPath();
            crc2.moveTo(this.position.x + 35, this.position.y - 10);
            crc2.lineTo(this.position.x + 45, this.position.y - 15);
            crc2.lineTo(this.position.x + 45, this.position.y - 5);
            crc2.closePath();
            crc2.fill();
            // Augen der Ente
            crc2.fillStyle = "black";
            crc2.beginPath();
            crc2.arc(this.position.x + 30, this.position.y - 20, 3, 0, Math.PI * 2);
            crc2.closePath();
            crc2.fill();
            // Flügel der Ente
            crc2.fillStyle = "rgb(205, 133, 63)"; // Dunkleres Orange für die Flügel
            crc2.beginPath();
            crc2.ellipse(this.position.x - 10, this.position.y, 20, 10, 0, 0, Math.PI * 2);
            crc2.closePath();
            crc2.fill();
            this.updatePosition();
        }
        updatePosition() {
            this.position.x += this.velocity.x;
            this.position.y += this.velocity.y;
            if (this.position.x < this.pondArea.x || this.position.x > this.pondArea.x + this.pondArea.width) {
                this.velocity.x *= -1;
            }
            if (this.position.y < this.pondArea.y || this.position.y > this.pondArea.y + this.pondArea.height) {
                this.velocity.y *= -1;
            }
        }
    }
    L09_Ententeich.Duck = Duck;
})(L09_Ententeich || (L09_Ententeich = {}));
//# sourceMappingURL=Duck.js.map