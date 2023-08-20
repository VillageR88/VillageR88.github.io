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