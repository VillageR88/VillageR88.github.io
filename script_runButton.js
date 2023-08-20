// Run Button
document.getElementById("runButton").addEventListener("click", function () {
    try {
        var code = editor2.getValue();
        var oldConsoleLog = console.log;
        var output = "";
        console.log = function (message) {
            output += message + "\n";
        };

        var functionRegex = code.match(/function\s+(\w+)\s*\((.*?)\)/);
        var x1 = document.getElementById("param1a").value;
        var param = String(functionRegex).split(",")[1] + "(" + x1 + ");";
        console.log("Output: " + eval(param + code) +"DBG: " + "");
        console.log = oldConsoleLog;
        document.getElementById("outputContainer").textContent = output;
        document.getElementById("tipsfield").textContent = "Tips: ";

        document.getElementById("debugfield").textContent = "Debug3: ";
       
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