var _a;
(_a = document.getElementById("new")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", newElement);
var deletes = document.querySelectorAll(".delete");
var checked = document.querySelectorAll(".check");
// Loop to add eventListeners to every element of a class
for (var i = 0; i < deletes.length; i++) {
    deletes[i].addEventListener("click", deleteElement);
}
for (var i = 0; i < checked.length; i++) {
    checked[i].addEventListener("click", changePosition);
}
function newElement() {
    console.log("Mach was Neues!");
}
function deleteElement() {
    console.log("gelöscht");
}
function changePosition() {
    console.log("jetzt isses wo anders");
}
