namespace L08 {
    window.addEventListener("load", handleLoad);
    let crc2: CanvasRenderingContext2D;

    function handleLoad(_event: Event) {
        let canvas: HTMLCanvasElement | null = document.querySelector("canvas");
        if (!canvas) return;

        crc2 = <CanvasRenderingContext2D>canvas.getContext("2d");

        // Hintergrund mit Verlauf
        let gradient: CanvasGradient = crc2.createLinearGradient(0, 0, 0, canvas.height);
        gradient.addColorStop(0, "#1e1e1e");
        gradient.addColorStop(1, "#4d4d4d");
        crc2.fillStyle = gradient;
        crc2.fillRect(0, 0, canvas.width, canvas.height);

        // Anzahl der Formen
        let shapeCount: number = Math.floor(Math.random() * 20) + 20;

        // Zeichne zufällige Formen
        for (let i = 0; i < shapeCount; i++) {
            drawRandomShape();
        }
    }

    // Zufällige Form zeichnen
    function drawRandomShape() {
        let x: number = Math.random() * crc2.canvas.width;
        let y: number = Math.random() * crc2.canvas.height;
        let size: number = Math.random() * 50 + 20; // Größe zwischen 20 und 70
        let color: string = getRandomColor();
        let transparency: number = Math.random() * 0.5 + 0.8; // Zufällige Transparenz zwischen 0.1 und 0.6
        let shapeType: number = Math.floor(Math.random() * 3); // 0: Kreis, 1: Rechteck, 2: Dreieck

        crc2.beginPath();

        switch (shapeType) {
            case 0:
                crc2.arc(x, y, size, 0, 2 * Math.PI);
                break;
            case 1:
                crc2.rect(x, y, size, size);
                break;
            case 2:
                crc2.moveTo(x, y);
                crc2.lineTo(x + size, y);
                crc2.lineTo(x + size / 2, y + size);
                crc2.closePath();
                break;
        }

        crc2.strokeStyle = color; // Umrandungsfarbe setzen
        crc2.globalAlpha = transparency; // Transparenz anwenden
        crc2.stroke(); // Nur den Umriss zeichnen
        crc2.globalAlpha = 1; // Transparenz zurücksetzen
    }

    // Zufällige Farbe generieren
    function getRandomColor(): string {
        return `rgba(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.random()})`;
    }
}
