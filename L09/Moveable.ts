namespace L10_EntenteichClasses {
    export abstract class Moveable {
        protected position: { x: number, y: number };
        protected velocity: { x: number, y: number };

        constructor(_position: { x: number, y: number }, _velocity: { x: number, y: number }) {
            this.position = _position;
            this.velocity = _velocity;
        }

        abstract draw(crc2: CanvasRenderingContext2D): void;
        abstract move(canvas: HTMLCanvasElement, horizon: number): void;
    }
}
