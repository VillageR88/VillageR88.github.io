async function displayFileContent() {
const response = await fetch("/myJavaScript.txt");
const text = await response.text();
const lines = text.split('\n');
const fileContentElement = document.getElementById('fileContent2');
const codeTitle = document.getElementById('codeTitle');


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
            document.getElementById("param1Label").hidden = false;
            var lookfor;
            var position;
            var parameters;
            if (modifiedCode.includes("function")) {
                lookfor = /function\s+(\w+)\s*\((.*?)\)/;
                position = 2;
            }
            else if (modifiedCode.includes("const")){
                lookfor = /const\s+(\w+)\s*=\s*\((.*?)\)\s*=>\s*\{/;
                position = 2;
            }
            else if (modifiedCode.includes("findSmallestInt")){
                lookfor = /findSmallestInt\s*\((.*?)\)/;
                position = 1;
            }
            try {
                parameters = modifiedCode.match(lookfor)[position].split(",");
                document.getElementById("debugfield").textContent = "Debug: " + "" + modifiedCode.match(lookfor) + " Debug2:" + parameters;
                document.getElementById("param1").value = modifiedCode.match(lookfor)[position];
            }
            catch (error) {
                document.getElementById("debugfield").textContent = "Debug: " + "Function implementation in progress. Please come back later."}
                document.getElementById("param1").hidden = false;
                document.getElementById("runButton").disabled = false;
            })
            .catch(error => console.error('Error:', error));
    });

    // Dodaj link do paragrafu i paragraf do elementu fileContent
    p.appendChild(a);
    fileContentElement.appendChild(p);
});
}
    displayFileContent();