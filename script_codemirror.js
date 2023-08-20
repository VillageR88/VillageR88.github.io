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
        editor2.setValue(code);
    })
    .catch(error => console.error('Błąd:', error));
    

// Run Button
var runButton = document.getElementById("runButton");
runButton.addEventListener("click", function () {
    try {
        var code = editor2.getValue();
        var oldConsoleLog = console.log;
        var output = "";
        console.log = function (message) {
            output += message + "\n";
        };
        var functionRegex = code.match(/function\s+(\w+)\s*\((.*?)\)/);
        var x1 = document.getElementById("param1").value;
        var param = String(functionRegex).split(",")[1] + "(" + x1 + ");";
        console.log("Output: " + eval(param + code));
        console.log = oldConsoleLog;
        document.getElementById("outputContainer").textContent = output;
        document.getElementById("tipsfield").textContent = "Tips: ";
       
    } catch (error) {
        document.getElementById("outputContainer").textContent = "Output: " + "Error: " + String(error.message);
        if (String(error.message).includes("is not defined")) {
            document.getElementById("tipsfield").textContent = "Tips: " + 'Sometimes you have to put text between quotation marks => "Any text"';
        }
        else if (String(error.message).includes("is not iterable")) {
            document.getElementById("tipsfield").textContent = "Tips: " + 'Arrays should look like this => [first_element, second_element, ...]';
        }
        else if (String(error.message).includes("undefined")) {
            document.getElementById("tipsfield").textContent = "Tips: " + 'Maybe you should put some value?';
        }
    }
});