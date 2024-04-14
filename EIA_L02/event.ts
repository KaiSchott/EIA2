namespace Events {

    // Fenster wird erst geladen, dann wird "handleload" ausgeführt, um eine Variable "span" zu erstellen.
    window.addEventListener("load", handleload);

    // Diese Funktion wird ausgeführt, wenn das Fenster geladen ist.
    // Sie fügt Eventlistener für "mousemove", "click" und "keyup" hinzu.
    // Es spielt keine Rolle, ob das Element existiert oder nicht.
    function handleload(): void {
        document.addEventListener("mousemove", setinfoBox);
        document.addEventListener("click", logInfo);
        document.addEventListener("keyup", logInfo);
        document.body.addEventListener("click", logInfo);
        document.body.addEventListener("keyup", logInfo);
        document.getElementById("div0")?.addEventListener("keyup", logInfo);
        document.getElementById("div1")?.addEventListener("keyup", logInfo);
        document.getElementById("div0")?.addEventListener("click", logInfo);
        document.getElementById("div1")?.addEventListener("click", logInfo);
    }

    // Diese Funktion setzt die Position der Info-Box entsprechend der Mausposition relativ zum "span"-Element.
    function setinfoBox(_event: MouseEvent): void {
        let x: number = _event.clientX;
        let y: number = _event.clientY;
        let span: HTMLElement = <HTMLElement>document.getElementById("span");
        span.style.top = y + "px";
        span.style.left = x + "px";
        span.innerHTML = "Mouseposition " + x + " " + y + _event.target;
    }

    // Diese Funktion gibt Informationen über das Event in der Konsole aus.
    function logInfo(_event: Event): void {
        console.log("Type: " + _event.type);
        console.log("Target: " + _event.target);
        console.log("CurrentTarget: " + _event.currentTarget);
        console.log("Event: " + _event);
    }
}
