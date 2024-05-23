namespace L09_Ententeich {
    export class Dragonfly {
        private position: { x: number, y: number };
        private velocity: { x: number, y: number };

        constructor(initialPosition: { x: number, y: number }) {
            this.position = initialPosition;
            this.velocity = { x: (Math.random() - 0.5) * 4, y: (Math.random() - 0.5) * 4 };
        }

        public draw(crc2: CanvasRenderingContext2D): void {
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

        public updatePosition(canvas: HTMLCanvasElement, horizon: number): void {
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
}
