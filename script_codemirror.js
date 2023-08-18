var editor = CodeMirror.fromTextArea(document.getElementById("codeEditor"), {
    lineNumbers: true,
    mode: "javascript",
    lineWrapping: true,
    readOnly: true,
    theme: "twilight",
});
var runButton = document.getElementById("runButton");
var themeButton = document.getElementById("thmeButton");
var outputContainer = document.getElementById("outputContainer");

runButton.addEventListener("click", function () {
    try {
        var code = editor.getValue();
        var oldConsoleLog = console.log;
        var output = "";
        console.log = function (message) {
            output += message + "\n";
        };
        eval(code);
        console.log = oldConsoleLog;
        outputContainer.textContent = output;
    } catch (error) {
        outputContainer.textContent = "Error: " + error.message;
    }

});
themeButton.addEventListener("click", function () {
    try {
        console.log("a");
    }
    catch (error) {
        outputContainer.textContent = "Error: " + error.message;
    }});

// Pobierz zawartość z linku i wstaw ją do edytora
fetch('https://raw.githubusercontent.com/VillageR88/Codewars/main/JavaScript/000011.%20Calculate%20BMI.js')
    .then(response => response.text())
    .then(code => {
        editor.setValue(code);
    })
    .catch(error => console.error('Błąd:', error));