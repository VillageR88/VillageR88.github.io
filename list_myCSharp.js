async function displayFileContent() {
const response = await fetch("Scripts/myCSharp.txt");
const text = await response.text();
const lines = text.split('\n');
const fileContentElement = document.getElementById('fileContent4');
const codeTitle = document.getElementById('codeTitle');

lines.forEach((line) => {
    const p = document.createElement('p');
    const a = document.createElement('a');

    a.href = "javascript:void(0);";
    a.textContent = `1.4.`+ line.slice(0,6).split(/^0+/g).join("")+line.slice(6).slice(0, -13); // Tekst linku
    a.setAttribute('data-original-name', line);

     a.addEventListener('click', (event) => {
        const inputFieldsDiv = document.getElementById("inputFields");
        inputFieldsDiv.innerHTML = ""; // Wyczyść zawartość diva przed dodaniem nowych pól
        document.getElementById("outputContainer").textContent = "Output:";
        document.getElementById("tipsfield").textContent = "Tips:";
        document.getElementById("debugfield").textContent = "Debug:";
        document.getElementById("runButton").disabled = true;
        document.getElementById("center_up_right").hidden = true;
        codeTitle.textContent = "My code: " + line.slice(7).slice(0, -13);
        const clickedElement = event.target; // Get the clicked element
        const originalName = clickedElement.getAttribute('data-original-name'); // Get the original name from the attribute

        window.scrollTo({
            top: 0,
            behavior: 'smooth' // Dla płynnego przewijania
        });
        const url = `https://raw.githubusercontent.com/VillageR88/Codewars/main/C Sharp/${originalName}`;

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
        })
        .catch(error => console.error('Błąd:', error));
    });

    // Dodaj link do paragrafu i paragraf do elementu fileContent
    p.appendChild(a);
    fileContentElement.appendChild(p);
});
}
    displayFileContent();