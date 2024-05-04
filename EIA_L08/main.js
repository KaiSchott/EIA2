// Canvas-Element aus dem HTML-Dokument auswählen
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
// Canvas-Größe setzen
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
// Funktion zur Generierung einer zufälligen Farbe
function randomColor() {
    return "rgb(".concat(Math.random() * 255, ", ").concat(Math.random() * 255, ", ").concat(Math.random() * 255, ")");
}
// Funktion zur Generierung des abstrakten Bildes
function generateAbstractArt() {
    // Anzahl der Kreise
    var numCircles = 100;
    for (var i = 0; i < numCircles; i++) {
        // Zufällige Position für den Kreis
        var x = Math.random() * canvas.width;
        var y = Math.random() * canvas.height;
        // Zufälliger Radius für den Kreis
        var radius = Math.random() * 100;
        // Zufällige Farbe für den Kreis
        var color = randomColor();
        // Kreis zeichnen
        ctx.beginPath();
        ctx.arc(x, y, radius, 0, Math.PI * 2);
        ctx.fillStyle = color;
        ctx.fill();
        ctx.closePath();
    }
}
// Generierung des Bildes beim Laden der Seite
window.onload = generateAbstractArt;
