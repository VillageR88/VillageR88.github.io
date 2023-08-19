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
        codeTitle.textContent = "My code: " + line.slice(7);
        const clickedElement = event.target; // Get the clicked element
        const originalName = clickedElement.getAttribute('data-original-name'); // Get the original name from the attribute
        window.scrollTo({
            top: 0,
            behavior: 'smooth' // Dla płynnego przewijania
        });
        const url = `https://raw.githubusercontent.com/VillageR88/Codewars/main/JavaScript/${originalName}`;

        fetch(url)
        .then(response => response.text())
        .then(code => {
            editor1.setValue(code);
            var regex = code.match(/\/\/My(.*?)\/\/Codewars recommended/gs);            
            var lines = regex.toString().split('\n');
            lines.shift(); // Remove the first line
            lines.pop();   // Remove the last line
            const modifiedCode = lines.join('\n');
            editor2.setValue(modifiedCode);
            document.getElementById("param1Label").textContent = code.match(/function\s+(\w+)\s*\((.*?)\)/)[1];
            document.getElementById("param1").value = `(${code.match(/function\s+(\w+)\s*\((.*?)\)/)[2]})`;

            const functionRegex2 = /function\s+(\w+)\s*\((.*?)\)/;
            const matches = code.match(functionRegex2);



        })
        .catch(error => console.error('Błąd:', error));
    });

    // Dodaj link do paragrafu i paragraf do elementu fileContent
    p.appendChild(a);
    fileContentElement.appendChild(p);
});
}
    displayFileContent();