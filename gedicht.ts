// Namespace mit den Arrays für Subjekte, Prädikate und Objekte
namespace AssassinCreedSätze {
    export const subjekte: string[] = ["Altair", "Ezio", "Connor", "Edward", "Arno", "Jacob", "Evie"];
    export const praedikate: string[] = ["kämpft gegen", "schleicht sich an", "erforscht", "segelt mit", "untersucht", "plant einen Anschlag auf", "verbündet sich mit"];
    export const objekte: string[] = ["Templars", "Abstergo Industries", "Assassins", "die Freiheitskämpfer", "den Animus", "die versteckten Klingen", "den Apfel von Eden"];
}

// Definition der Funktion getVerse
function getVerse(_subjekte_: string[], _praedikate_: string[], _objekte_: string[]): string {
    // Variable für den Vers initialisieren
    let vers: string = "";

    // Zufallszahl für Subjekte erzeugen
    let randomSubjektIndex: number = Math.floor(Math.random() * _subjekte_.length);
    // Zufälliges Subjekt auswählen und zum Vers hinzufügen
    vers += _subjekte_.splice(randomSubjektIndex, 1)[0] + " ";

    // Zufallszahl für Prädikate erzeugen
    let randomPraedikatIndex: number = Math.floor(Math.random() * _praedikate_.length);
    // Zufälliges Prädikat auswählen und zum Vers hinzufügen
    vers += _praedikate_.splice(randomPraedikatIndex, 1)[0] + " ";

    // Zufallszahl für Objekte erzeugen
    let randomObjektIndex: number = Math.floor(Math.random() * _objekte_.length);
    // Zufälliges Objekt auswählen und zum Vers hinzufügen
    vers += _objekte_.splice(randomObjektIndex, 1)[0];

    // Vers zurückgeben
    return vers;
}

// Ausgabe der Arrays für Subjekte, Prädikate und Objekte
console.log("Subjekte:", AssassinCreedSätze.subjekte);
console.log("Prädikate:", AssassinCreedSätze.praedikate);
console.log("Objekte:", AssassinCreedSätze.objekte);

// Bestimme die maximale Länge der Arrays
const maxLength = Math.max(AssassinCreedSätze.subjekte.length, AssassinCreedSätze.praedikate.length, AssassinCreedSätze.objekte.length);

// Rückwärts zählen mit einer for-Schleife
for (let i = maxLength; i >= 1; i--) {
    // Aufruf der Funktion mit den Arrays für Subjekte, Prädikate und Objekte
    const result = getVerse(AssassinCreedSätze.subjekte.slice(), AssassinCreedSätze.praedikate.slice(), AssassinCreedSätze.objekte.slice());
    // Ausgabe des Ergebnisses
    console.log(result);
}
