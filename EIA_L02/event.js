var Events;
(function (Events) {
    // Fenster wird erst geladen, dann wird "handleload" ausgeführt, um eine Variable "span" zu erstellen.
    window.addEventListener("load", handleload);
    // Diese Funktion wird ausgeführt, wenn das Fenster geladen ist.
    // Sie fügt Eventlistener für "mousemove", "click" und "keyup" hinzu.
    // Es spielt keine Rolle, ob das Element existiert oder nicht.
    function handleload() {
        var _a, _b, _c, _d;
        document.addEventListener("mousemove", setinfoBox);
        document.addEventListener("click", logInfo);
        document.addEventListener("keyup", logInfo);
        document.body.addEventListener("click", logInfo);
        document.body.addEventListener("keyup", logInfo);
        (_a = document.getElementById("div0")) === null || _a === void 0 ? void 0 : _a.addEventListener("keyup", logInfo);
        (_b = document.getElementById("div1")) === null || _b === void 0 ? void 0 : _b.addEventListener("keyup", logInfo);
        (_c = document.getElementById("div0")) === null || _c === void 0 ? void 0 : _c.addEventListener("click", logInfo);
        (_d = document.getElementById("div1")) === null || _d === void 0 ? void 0 : _d.addEventListener("click", logInfo);
    }
    // Diese Funktion setzt die Position der Info-Box entsprechend der Mausposition relativ zum "span"-Element.
    function setinfoBox(_event) {
        var x = _event.clientX;
        var y = _event.clientY;
        var span = document.getElementById("span");
        span.style.top = y + "px";
        span.style.left = x + "px";
        span.innerHTML = "Mouseposition " + x + " " + y + _event.target;
    }
    // Diese Funktion gibt Informationen über das Event in der Konsole aus.
    function logInfo(_event) {
        console.log("Type: " + _event.type);
        console.log("Target: " + _event.target);
        console.log("CurrentTarget: " + _event.currentTarget);
        console.log("Event: " + _event);
    }
})(Events || (Events = {}));
