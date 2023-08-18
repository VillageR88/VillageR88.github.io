async function displayFileContent() {
const response = await fetch("/myJavaScript.txt");
const text = await response.text();
const lines = text.split('\n');

const fileContentElement = document.getElementById('fileContent2');

lines.forEach((line) => {
    const p = document.createElement('p');
    const a = document.createElement('a');

    // Utwórz link do pliku/katalogu
    const link = "javascript:void(0);";

    //`https://github.com/VillageR88/Codewars/tree/main/JavaScript/${line}`; // Zastąp ścieżką do katalogu

    a.href = "javascript:void(0);";
    a.textContent = `1.2.`+ line.slice(0,6).split(/^0+/g).join("")+line.slice(6); // Tekst linku
    a.setAttribute('data-original-name', line);

    // Dodaj obsługę zdarzeń click
    a.addEventListener('click', (event) => {
        const clickedElement = event.target; // Get the clicked element
        const originalName = clickedElement.getAttribute('data-original-name'); // Get the original name from the attribute

        // Utwórz URL na podstawie oryginalnej nazwy
        const url = `https://raw.githubusercontent.com/VillageR88/Codewars/main/JavaScript/${originalName}`;

        fetch(url)
        .then(response => response.text())
        .then(code => {
            editor.setValue(code);
        })
        .catch(error => console.error('Błąd:', error));
    });

    // Dodaj link do paragrafu i paragraf do elementu fileContent
    p.appendChild(a);
    fileContentElement.appendChild(p);
});
}
    displayFileContent();
/*
    ///
  fileContent2.addEventListener('click', () => {
    const clickedElement = event.target; // Get the clicked element
    const originalName = clickedElement.getAttribute('data-original-name').slice(6); // Get the original name from the attribute

    const url = `https://raw.githubusercontent.com/VillageR88/Codewars/main/JavaScript/${originalName}`;

    fetch(url)
    .then(response => response.text())
    .then(code => {
        editor.setValue(code);
    })
    .catch(error => console.error('Błąd:', error));
});
///
*/