// Warten bis das DOM vollständig geladen ist
document.addEventListener("DOMContentLoaded", function () {
    var addItemButton = document.getElementById('newEntryButton'); // Hinzufügen-Button
    var entriesContainer = document.getElementById('entries'); // Container für Einträge
    // Überprüfen, ob die Elemente gefunden wurden
    if (addItemButton && entriesContainer) {
        // Event-Listener für Klick auf den Hinzufügen-Button hinzufügen
        addItemButton.addEventListener('click', handleAddItemClick);
    }
    else {
        console.error("Hinzufügen-Button oder Eintragscontainer nicht gefunden.");
    }
});
// Funktion zur Behandlung des Klicks auf den Hinzufügen-Button
function handleAddItemClick(event) {
    event.preventDefault(); // Verhindere das Standardverhalten des Buttons (Seitenneuladen)
    // Erfassen der eingegebenen Informationen aus dem Formular
    var newItemData = gatherNewItemData();
    // Überprüfen, ob alle erforderlichen Daten erfasst wurden
    if (newItemData.itemName && newItemData.itemQuantity && newItemData.lastPurchase && newItemData.itemComment) {
        // Neuen Eintrag erstellen und zum DOM hinzufügen
        var newRow = createNewRow(newItemData);
        appendRowToEntriesContainer(newRow);
        // Formularfelder leeren
        resetAddItemForm();
    }
    else {
        console.error("Bitte füllen Sie alle Felder aus.");
    }
}
// Funktion zum Erfassen der eingegebenen Daten aus dem Formular
function gatherNewItemData() {
    var itemNameInput = document.getElementById('itemName').value;
    var itemQuantityInput = document.getElementById('itemQuantity').value;
    var lastPurchaseInput = document.getElementById('lastPurchase').value;
    var itemCommentInput = document.getElementById('itemComment').value;
    return {
        itemName: itemNameInput,
        itemQuantity: itemQuantityInput,
        lastPurchase: lastPurchaseInput,
        itemComment: itemCommentInput
    };
}
// Funktion zum Erstellen einer neuen Tabellenzeile für einen Eintrag
function createNewRow(newItemData) {
    var newRow = document.createElement('tr');
    // HTML für die neue Zeile einfügen
    newRow.innerHTML = "\n      <td>".concat(newItemData.itemName, "</td>\n      <td>").concat(newItemData.itemQuantity, "</td>\n      <td>").concat(newItemData.lastPurchase, "</td>\n      <td>").concat(newItemData.itemComment, "</td>\n      <td class=\"checkbox-cell\"><input type=\"checkbox\" class=\"check\"></td>\n      <td class=\"delete-cell\"><button class=\"delete\">L\u00F6schen</button></td>\n  ");
    // Funktionalität zum Löschen hinzufügen
    var deleteButton = newRow.querySelector('.delete');
    if (deleteButton) {
        deleteButton.addEventListener('click', handleDeleteItemClick);
    }
    else {
        console.error("Löschen-Button nicht gefunden.");
    }
    return newRow;
}
// Funktion zum Hinzufügen einer neuen Zeile zum Eintragscontainer im DOM
function appendRowToEntriesContainer(newRow) {
    var entriesContainer = document.getElementById('entries');
    if (entriesContainer) {
        entriesContainer.appendChild(newRow);
    }
    else {
        console.error("Eintragscontainer nicht gefunden.");
    }
}
// Funktion zum Zurücksetzen der Formularfelder
function resetAddItemForm() {
    var addItemForm = document.getElementById('addItemForm');
    if (addItemForm) {
        addItemForm.reset();
    }
    else {
        console.error("Formular nicht gefunden.");
    }
}
// Funktion zur Behandlung des Klicks auf den Löschen-Button
function handleDeleteItemClick() {
    var rowToDelete = this.parentNode.parentNode;
    if (rowToDelete) {
        rowToDelete.remove();
    }
    else {
        console.error("Zu löschende Zeile nicht gefunden.");
    }
}
