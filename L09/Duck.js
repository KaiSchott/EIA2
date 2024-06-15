"use strict";
var L10_EntenteichClasses;
(function (L10_EntenteichClasses) {
    class Duck extends L10_EntenteichClasses.Moveable {
        pondArea;
        isVisible;
        constructor(initialPosition, pondArea) {
            super(initialPosition, { x: (Math.random() - 0.5) * 2, y: (Math.random() - 0.5) * 2 });
            this.pondArea = {
                x: pondArea.x + 50,
                y: pondArea.y + 50,
                width: pondArea.width - 100,
                height: pondArea.height - 100
            };
            this.isVisible = true;
        }
        draw(crc2) {
            if (!this.isVisible)
                return;
            // Körper der Ente
            crc2.fillStyle = "rgb(255, 223, 186)";
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
            crc2.fillStyle = "rgb(255, 140, 0)";
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
            crc2.fillStyle = "rgb(205, 133, 63)";
            crc2.beginPath();
            crc2.ellipse(this.position.x - 10, this.position.y, 20, 10, 0, 0, Math.PI * 2);
            crc2.closePath();
            crc2.fill();
            this.updatePosition();
        }
        move(canvas, horizon) {
            this.updatePosition();
        }
        handleClick(event, canvas) {
            let rect = canvas.getBoundingClientRect();
            let mouseX = event.clientX - rect.left;
            let mouseY = event.clientY - rect.top;
            if (this.checkCollision(mouseX, mouseY)) {
                this.isVisible = false;
            }
        }
        checkCollision(mouseX, mouseY) {
            let dx = mouseX - this.position.x;
            let dy = mouseY - this.position.y;
            let distance = Math.sqrt(dx * dx + dy * dy);
            return distance < 35; // radius of the duck body
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
        followMouse(mouseX, mouseY) {
            let dx = mouseX - this.position.x;
            let dy = mouseY - this.position.y;
            let angle = Math.atan2(dy, dx);
            this.velocity.x = Math.cos(angle);
            this.velocity.y = Math.sin(angle);
        }
    }
    L10_EntenteichClasses.Duck = Duck;
})(L10_EntenteichClasses || (L10_EntenteichClasses = {}));
//# sourceMappingURL=Duck.js.map