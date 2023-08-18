async function displayFileContent() {
const response = await fetch("/myPython.txt");
const text = await response.text();
const lines = text.split('\n');

const fileContentElement = document.getElementById('fileContent3');

lines.forEach((line) => {
    const p = document.createElement('p');
    const a = document.createElement('a');

    a.href = "javascript:void(0);";
    a.textContent = `1.3.`+ line.slice(0,6).split(/^0+/g).join("")+line.slice(6); // Tekst linku
    a.setAttribute('data-original-name', line);



     a.addEventListener('click', (event) => {
        const clickedElement = event.target; // Get the clicked element
        const originalName = clickedElement.getAttribute('data-original-name'); // Get the original name from the attribute

        window.scrollTo({
            top: 0,
            behavior: 'smooth' // Dla płynnego przewijania
        });
        const url = `https://raw.githubusercontent.com/VillageR88/Codewars/main/Python/${originalName}`;

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