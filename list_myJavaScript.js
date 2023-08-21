async function displayFileContent() {
const response = await fetch("/myJavaScript.txt");
const text = await response.text();
const lines = text.split('\n');
const fileContentElement = document.getElementById('fileContent2');
const codeTitle = document.getElementById('codeTitle');

var lookfor;

lines.forEach((line) => {
    const p = document.createElement('p');
    const a = document.createElement('a');

    a.href = "javascript:void(0);";
    a.textContent = `1.2.`+ line.slice(0,6).split(/^0+/g).join("")+line.slice(6); // Tekst linku
    a.setAttribute('data-original-name', line);



    a.addEventListener('click', (event) => {
        document.getElementById("outputContainer").textContent = "Output:";
        document.getElementById("tipsfield").textContent = "Tips:";
        document.getElementById("debugfield").textContent = "Debug:";

        codeTitle.textContent = "My code: " + line.slice(7);
        const clickedElement = event.target; // Get the clicked element
        const originalName = clickedElement.getAttribute('data-original-name'); // Get the original name from the attribute
        window.scrollTo({
            top: 0,
            behavior: 'smooth' // Dla płynnego przewijania
        });
        const url = `https://raw.githubusercontent.com/VillageR88/Codewars/main/JavaScript/${originalName}`;
        document.getElementById("center_up_right").hidden = false;

        fetch(url)
        .then(response => response.text())
        .then(code => {
            editor1.setValue(code);
            var lines = code.match(/\/\/My(.*?)\/\/Codewars recommended/gs).toString().split('\n');
            lines.shift(); // Remove the first line
            lines.pop();   // Remove the last line
            const modifiedCode = lines.join('\n');
            editor2.setValue(modifiedCode);
            var parameters;
            if (modifiedCode.includes("function")) {
                lookfor = /function\s+(\w+)\s*\((.*?)\)/;
            }
            else if (modifiedCode.includes("const")){
                lookfor = /const\s+(\w+)\s*=\s*\((.*?)\)\s*=>\s*\{/;
            }
            else if (modifiedCode.includes("findSmallestInt")){
                lookfor = /(\w+)\s*\((.*?)\)/;
            }
            try {
                parameters = modifiedCode.match(lookfor)[2].split(",");

                function createInputFields(array) {
                    const inputFieldsDiv = document.getElementById("inputFields");
                    inputFieldsDiv.innerHTML = ""; // Wyczyść zawartość diva przed dodaniem nowych pól
          
                    for (let i = 0; i < array.length; i++) {
                        const label = document.createElement("label");
                        label.textContent = `${parameters[i]}:`;
                        label.setAttribute("for", `param${i}`);
                        
                        const textarea = document.createElement("textarea");
                        textarea.setAttribute("id", `param${i}`);
                        textarea.setAttribute("name", `param${i}`);
                        textarea.setAttribute("rows", "1");
                        textarea.setAttribute("cols", "180");
            
                        inputFieldsDiv.appendChild(label);
                        inputFieldsDiv.appendChild(textarea);
                    }
                }
                
                createInputFields(parameters);
                document.getElementById("debugfield").textContent = "Debug: (function line data mashup) => " + modifiedCode.match(lookfor) 
                + " || (function) => " +  modifiedCode.match(lookfor)[1]
                + " || (number of parameters) => " + document.getElementById("inputFields").children.length/2
                + " || (parameters) => "  + modifiedCode.match(lookfor)[2];
            }
            catch (error) {
                document.getElementById("debugfield").textContent = "Debug: " + "Function implementation in progress. Please come back later."}
                document.getElementById("runButton").disabled = false;
            })
            .catch(error => console.error('Error:', error));
    });

    // Dodaj link do paragrafu i paragraf do elementu fileContent
    p.appendChild(a);
    fileContentElement.appendChild(p);


// Run Button
document.getElementById("runButton").addEventListener("click", function () {
    try {
        var code = editor2.getValue();
        var oldConsoleLog = console.log;
        var output = "";
        console.log = function (message) {
            output += message + "\n";
        };

        var params_arr = new Array;
        var params_number = document.getElementById("inputFields").children.length / 2
        for (var i = 0; i < params_number; i++) {
            params_arr.push(document.getElementById(`param${i}`).value);
        }        
        
        var param = code.match(lookfor)[1] + "(" + params_arr + ");";
        console.log("Output: " + eval(code + param));
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





});
}
    displayFileContent();

