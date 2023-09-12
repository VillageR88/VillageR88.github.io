function toggler() {
    if (localStorage.getItem('debugButtonToggle') == "hidden") {
        debugfield.style.display = "none";
        hr3.style.display = "none";
        hiddenConsole.textContent = "";
    }
    else if (localStorage.getItem('debugButtonToggle') == "visible") {
        debugfield.style.display = "block";
        hr3.style.display = "block";
        hiddenConsole.textContent = "--debug visible\n";
    }
    else localStorage.setItem('debugButtonToggle', "hidden");
}
toggler();
debugButton.addEventListener('click', function () {
    if (localStorage.getItem('debugButtonToggle') == "hidden") {
        localStorage.setItem('debugButtonToggle', "visible");
        toggler();
    }
    else {
        localStorage.setItem('debugButtonToggle', "hidden");
        toggler();
    }
});