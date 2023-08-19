var editor1 = CodeMirror.fromTextArea(document.getElementById("codeEditor1"), {
    lineNumbers: true,
    mode: "javascript",
    lineWrapping: true,
    readOnly: true,
    theme: "twilight",
});

var editor2 = CodeMirror.fromTextArea(document.getElementById("codeEditor2"), {
    lineNumbers: true,
    mode: "javascript",
    lineWrapping: true,
    readOnly: true,
    theme: "twilight",
});

// Pobierz zawartość z linku i wstaw ją do edytora
fetch('hello_world.js')
    .then(response => response.text())
    .then(code => {
        editor1.setValue(code);
    })
    .catch(error => console.error('Błąd:', error));
    

// Run Button
var runButton = document.getElementById("runButton");
var outputContainer = document.getElementById("outputContainer");
runButton.addEventListener("click", function () {
    try {
        var code = editor1.getValue();
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

var themeButton = document.getElementById("themeButton");
// Under construction Button
themeButton.addEventListener("click", function () {
    try {
        fetch('https://raw.githubusercontent.com/VillageR88/Codewars/main/JavaScript/000011.%20Calculate%20BMI.js')
    .then(response => response.text())
    .then(code => {
        editor1.setValue(code);
    })
    .catch(error => console.error('Błąd:', error));
    } catch (error) {
        outputContainer.textContent = "Error: " + error.message;
    }
});
