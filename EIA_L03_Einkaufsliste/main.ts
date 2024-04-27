// Warten bis das DOM vollständig geladen ist
document.addEventListener("DOMContentLoaded", function() {
  const addItemButton = document.getElementById('newEntryButton'); // Hinzufügen-Button
  const entriesContainer = document.getElementById('entries'); // Container für Einträge

  // Überprüfen, ob die Elemente gefunden wurden
  if (addItemButton && entriesContainer) {
      // Event-Listener für Klick auf den Hinzufügen-Button hinzufügen
      addItemButton.addEventListener('click', handleAddItemClick);
  } else {
      console.error("Hinzufügen-Button oder Eintragscontainer nicht gefunden.");
  }
});

// Funktion zur Behandlung des Klicks auf den Hinzufügen-Button
function handleAddItemClick(event: Event) {
  event.preventDefault(); // Verhindere das Standardverhalten des Buttons (Seitenneuladen)

  // Erfassen der eingegebenen Informationen aus dem Formular
  const newItemData = gatherNewItemData();

  // Überprüfen, ob alle erforderlichen Daten erfasst wurden
  if (newItemData.itemName && newItemData.itemQuantity && newItemData.lastPurchase && newItemData.itemComment) {
      // Neuen Eintrag erstellen und zum DOM hinzufügen
      const newRow = createNewRow(newItemData);
      appendRowToEntriesContainer(newRow);

      // Formularfelder leeren
      resetAddItemForm();
  } else {
      console.error("Bitte füllen Sie alle Felder aus.");
  }
}

// Funktion zum Erfassen der eingegebenen Daten aus dem Formular
function gatherNewItemData() {
  const itemNameInput = (document.getElementById('itemName') as HTMLInputElement).value;
  const itemQuantityInput = (document.getElementById('itemQuantity') as HTMLInputElement).value;
  const lastPurchaseInput = (document.getElementById('lastPurchase') as HTMLInputElement).value;
  const itemCommentInput = (document.getElementById('itemComment') as HTMLInputElement).value;

  return {
      itemName: itemNameInput,
      itemQuantity: itemQuantityInput,
      lastPurchase: lastPurchaseInput,
      itemComment: itemCommentInput
  };
}

// Funktion zum Erstellen einer neuen Tabellenzeile für einen Eintrag
function createNewRow(newItemData: any) {
  const newRow = document.createElement('tr');

  // HTML für die neue Zeile einfügen
  newRow.innerHTML = `
      <td>${newItemData.itemName}</td>
      <td>${newItemData.itemQuantity}</td>
      <td>${newItemData.lastPurchase}</td>
      <td>${newItemData.itemComment}</td>
      <td class="checkbox-cell"><input type="checkbox" class="check"></td>
      <td class="delete-cell"><button class="delete">Löschen</button></td>
  `;

  // Funktionalität zum Löschen hinzufügen
  const deleteButton = newRow.querySelector('.delete') as HTMLButtonElement;
  if (deleteButton) {
      deleteButton.addEventListener('click', handleDeleteItemClick);
  } else {
      console.error("Löschen-Button nicht gefunden.");
  }

  return newRow;
}

// Funktion zum Hinzufügen einer neuen Zeile zum Eintragscontainer im DOM
function appendRowToEntriesContainer(newRow: HTMLTableRowElement) {
  const entriesContainer = document.getElementById('entries');
  if (entriesContainer) {
      entriesContainer.appendChild(newRow);
  } else {
      console.error("Eintragscontainer nicht gefunden.");
  }
}

// Funktion zum Zurücksetzen der Formularfelder
function resetAddItemForm() {
  const addItemForm = document.getElementById('addItemForm') as HTMLFormElement;
  if (addItemForm) {
      addItemForm.reset();
  } else {
      console.error("Formular nicht gefunden.");
  }
}

// Funktion zur Behandlung des Klicks auf den Löschen-Button
function handleDeleteItemClick(this: HTMLButtonElement) {
  const rowToDelete = this.parentNode!.parentNode as HTMLTableRowElement;
  if (rowToDelete) {
      rowToDelete.remove();
  } else {
      console.error("Zu löschende Zeile nicht gefunden.");
  }
}
