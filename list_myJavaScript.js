async function displayFileContent() {
const response = await fetch("/myJavaScript.txt");
const text = await response.text();
const lines = text.split('\n');

const fileContentElement = document.getElementById('fileContent2');

lines.forEach((line) => {
    const p = document.createElement('p');
    const a = document.createElement('a');

    // Utwórz link do pliku/katalogu
    const link = `https://github.com/VillageR88/Codewars/tree/main/JavaScript/${line}`; // Zastąp ścieżką do katalogu

    a.href = link;
    a.textContent = `1.2.`+ line.slice(0,6).split(/^0+/g).join("")+line.slice(6) // Tekst linku
    
    // Dodaj link do paragrafu i paragraf do elementu fileContent
    p.appendChild(a);
    fileContentElement.appendChild(p);
    });
}
    displayFileContent();