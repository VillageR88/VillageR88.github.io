async function displayFileContent() {
var lookfor;

(await (await fetch("Scripts/myJavaScript.txt")).text()).split('\n').forEach((line) => {
    const p = document.createElement('p');
    const a = document.createElement('a');
    a.href = "javascript:void(0);";
    a.textContent = `1.1.`+ line.slice(0,6).split(/^0+/g).join("")+line.slice(6).slice(0, -3);
    a.setAttribute('data-original-name', line);
    a.addEventListener('click', (event) => {
        if (window.innerWidth >= 1000) editorElement[1].style.visibility = "visible";
        document.getElementById("outputContainer").textContent = "Output:";
        document.getElementById("tipsfield").textContent = "Tips:";
        document.getElementById("debugfield").textContent = "Debug:";
        document.getElementById('codeTitle').textContent = "My code: " + line.slice(7).slice(0, -3);
        const clickedElement = event.target;
        const originalName = clickedElement.getAttribute('data-original-name');
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
        const url = `https://raw.githubusercontent.com/VillageR88/Codewars/main/JavaScript/${originalName}`;
        fetch(url)
        .then(response => response.text())
        .then(code => {
            editor1.setOption("mode", "javascript");
            editor2.setOption("mode", "javascript");
            editor2.setOption("lineNumbers", "true");
            editor1.setValue(code);
            var lines = code.match(/\/\/My(.*?)\/\/Codewars recommended/gs).toString().split('\n');
            lines.shift();
            lines.pop();
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
                    inputFieldsDiv.innerHTML = "";
                    for (let i = 0; i < array.length; i++) {
                        document.getElementById("crane_img").style.top = `${(i + 1) * 56}px`; //drops crane_img
                        const label = document.createElement("label");
                        label.textContent = `${parameters[i]}:`;
                        if (localStorage.getItem("theme1") == "light")
                        {label.style.color = "black";}
                        else {label.style.color = "white";}
                        label.setAttribute("for", `param${i}`);
                        const textarea = document.createElement("textarea");
                        textarea.setAttribute("id", `param${i}`);
                        textarea.setAttribute("name", `param${i}`);
                        textarea.setAttribute("rows", "1");
                        textarea.setAttribute("cols", "182");
                        textarea.style.resize = "none";
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
    p.appendChild(a);
    document.getElementById('fileContent1').appendChild(p);
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