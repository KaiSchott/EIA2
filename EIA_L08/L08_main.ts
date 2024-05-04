namespace L08 {
    window.addEventListener("load", handleLoad);
    let crc2: CanvasRenderingContext2D; // Globale Variable für den Canvas-Kontext

    function handleLoad(_event: Event) { // Event-Handler für das Laden der Seite
        let canvas: HTMLCanvasElement | null = document.querySelector("canvas"); // Canvas-Element abrufen
        if (!canvas) return; // Falls kein Canvas gefunden wurde, beende die Funktion

        crc2 = <CanvasRenderingContext2D>canvas.getContext("2d"); // Canvas-Kontext abrufen und speichern

        // Hintergrund mit Verlauf zeichnen
        let gradient: CanvasGradient = crc2.createLinearGradient(0, 0, 0, canvas.height);
        gradient.addColorStop(0, "#1e1e1e"); // Startfarbe des Verlaufs
        gradient.addColorStop(1, "#4d4d4d"); // Endfarbe des Verlaufs
        crc2.fillStyle = gradient; // Füllstil setzen
        crc2.fillRect(0, 0, canvas.width, canvas.height); // Rechteck mit Verlauf zeichnen

        // Anzahl der Formen festlegen
        let shapeCount: number = Math.floor(Math.random() * 20) + 20;

        // Zufällige Formen zeichnen
        for (let i = 0; i < shapeCount; i++) {
            drawRandomShape(); // Funktion zum Zeichnen einer zufälligen Form aufrufen
        }
    }

    // Funktion zum Zeichnen einer zufälligen Form
    function drawRandomShape() {
        let x: number = Math.random() * crc2.canvas.width; // Zufällige x-Position
        let y: number = Math.random() * crc2.canvas.height; // Zufällige y-Position
        let size: number = Math.random() * 50 + 20; // Größe zwischen 20 und 70
        let color: string = getRandomColor(); // Zufällige Farbe
        let transparency: number = Math.random() * 0.5 + 0.8; // Zufällige Transparenz zwischen 0.8 und 1.3
        let shapeType: number = Math.floor(Math.random() * 3); // Zufälliger Formtyp (0: Kreis, 1: Rechteck, 2: Dreieck)

        crc2.beginPath(); // Neuer Pfad beginnen

        switch (shapeType) { // Form je nach Typ zeichnen
            case 0:
                crc2.arc(x, y, size, 0, 2 * Math.PI); // Kreis zeichnen
                break;
            case 1:
                crc2.rect(x, y, size, size); // Rechteck zeichnen
                break;
            case 2:
                crc2.moveTo(x, y); // Anfangspunkt des Dreiecks
                crc2.lineTo(x + size, y); // Linie zur nächsten Ecke
                crc2.lineTo(x + size / 2, y + size); // Linie zur nächsten Ecke
                crc2.closePath(); // Linie zur Anfangsecke schließen
                break;
        }

        crc2.strokeStyle = color; // Umrandungsfarbe setzen
        crc2.globalAlpha = transparency; // Transparenz anwenden
        crc2.stroke(); // Umrisse zeichnen
        crc2.globalAlpha = 1; // Transparenz zurücksetzen
    }

    // Funktion zum Generieren einer zufälligen Farbe
    function getRandomColor(): string {
        return `rgba(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.random()})`;
    }
}
