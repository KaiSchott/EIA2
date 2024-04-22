// Event-Listener für das Klicken auf den "Hinzufügen" Button
document.getElementById("addItemButton")?.addEventListener("click", addItem);

// Selektieren aller Elemente mit der Klasse "remove"
let removeButtons: NodeListOf<Element> = document.querySelectorAll(".remove");
// Selektieren aller Elemente mit der Klasse "checkbox"
let checkboxes: NodeListOf<Element> = document.querySelectorAll(".checkbox");

// Schleife zum Hinzufügen von Event-Listenern zu jedem Element mit der Klasse "remove"
for (let i: number = 0; i < removeButtons.length; i++) {
    removeButtons[i].addEventListener("click", removeItem);
}

// Schleife zum Hinzufügen von Event-Listenern zu jedem Element mit der Klasse "checkbox"
for (let i: number = 0; i < checkboxes.length; i++) {
    checkboxes[i].addEventListener("click", toggleCheckbox);
}

// Funktion, die aufgerufen wird, wenn ein neues Element hinzugefügt werden soll
function addItem(): void {
    console.log("Neues Element hinzugefügt!");
}

// Funktion, die aufgerufen wird, wenn ein Element entfernt werden soll
function removeItem(): void {
    console.log("Element entfernt");
}

// Funktion, die aufgerufen wird, wenn der Zustand einer Checkbox geändert wird
function toggleCheckbox(): void {
    console.log("Checkbox-Zustand geändert");
}
