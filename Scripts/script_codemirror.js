var editor1 = CodeMirror.fromTextArea(document.getElementById("codeEditor1"), {
    lineNumbers: true,
    mode: "javascript",
    lineWrapping: true,
    readOnly: true,
    theme: "twilight",
});

var editor2 = CodeMirror.fromTextArea(document.getElementById("codeEditor2"), {
    lineNumbers: false,
    mode: "javascript",
    lineWrapping: true,
    readOnly: true,
    theme: "twilight",
});
editor1.setValue('console.log("Hello World!");');
editor2.setValue('console.log("Hello World!");');
var editorElement = document.querySelectorAll(".CodeMirror");
editorElement[1].style.visibility = "hidden";