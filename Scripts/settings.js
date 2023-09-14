var light = "default";
var dark = "twilight";
var customized = "customized";
const mediaQuery = window.matchMedia("(max-height: 500px)");

if (localStorage.getItem("theme1") == dark) {
  editor1.setOption("theme", dark);
  editor2.setOption("theme", dark);
  theme1.textContent = "☽";
  if (mediaQuery.matches) theme1.textContent = theme1.textContent.slice(0, -6);  
  localStorage.setItem('theme1', dark);
}
else if (localStorage.getItem("theme1") == light) {
  editor1.setOption("theme", light);
  editor2.setOption("theme", light);
  theme1.textContent = "☀";
  theme1.classList.add('enhanced');
  reactor.classList.add('enhanced');
  debugButton.classList.add('enhanced');
  runButton.classList.add('enhanced');
  debugButton.classList.add('enhanced');
  document.querySelector('.togglebtn').classList.add('enhanced');
  wrapper1.classList.add('enhanced');
  center.classList.add('enhanced');
  codeEditor1Title.classList.add('enhanced');
  codeEditor2Title.classList.add('enhanced');
  document.body.classList.add('enhanced');
  outputContainer.classList.add('enhanced');
  tipsfield.classList.add('enhanced');
  debugfield.classList.add('enhanced');
  img1.classList.add('enhanced');
  myReactbar.classList.add('enhanced');
  document.querySelectorAll('h1').forEach(link => link.classList.add('enhanced'));
  document.querySelectorAll('ul').forEach(link => link.classList.add('enhanced'));
  document.querySelectorAll('a').forEach(link => link.classList.add('enhanced'));
  document.querySelectorAll('hr').forEach(link => link.classList.add('enhanced'));
}
else if (localStorage.getItem("theme1") == customized) {
  editor1.setOption("theme", customized);
  editor2.setOption("theme", customized);
  theme1.textContent = "✰";
  theme1.classList.add('customized');
  reactor.classList.add('customized');
  debugButton.classList.add('customized');
  document.querySelector('.togglebtn').classList.add('customized');
  runButton.classList.add('customized');
  theme1settings.classList.add('customized');
  wrapper1.classList.add('customized');
  center.classList.add('customized');
  codeEditor1Title.classList.add('customized');
  codeEditor2Title.classList.add('customized');
  document.body.classList.add('customized');
  outputContainer.classList.add('customized');
  tipsfield.classList.add('customized');
  debugfield.classList.add('customized');
  img1.classList.add('customized');
  myReactbar.classList.add('customized');
  document.querySelectorAll('h1').forEach(link => link.classList.add('customized'));
  document.querySelectorAll('ul').forEach(link => link.classList.add('customized'));
  document.querySelectorAll('a').forEach(link => link.classList.add('customized'));
  document.querySelectorAll('hr').forEach(link => link.classList.add('customized'));
}
else localStorage.setItem('theme1', dark);

document.getElementById('theme1').addEventListener('click', function () {
  if (localStorage.getItem("theme1") == dark) {
    editor1.setOption("theme", light);
    editor2.setOption("theme", light);
    theme1.textContent = "☀";
    localStorage.setItem('theme1', light);
    theme1.classList.add('enhanced');
    reactor.classList.add('enhanced');
    debugButton.classList.add('enhanced');
    document.querySelector('.togglebtn').classList.add('enhanced');
    runButton.classList.add('enhanced');
    wrapper1.classList.add('enhanced');
    center.classList.add('enhanced');
    codeEditor1Title.classList.add('enhanced');
    codeEditor2Title.classList.add('enhanced');
    document.body.classList.add('enhanced');
    outputContainer.classList.add('enhanced');
    tipsfield.classList.add('enhanced');
    debugfield.classList.add('enhanced');
    myReactbar.classList.add('enhanced');
    document.querySelectorAll('h1').forEach(link => link.classList.add('enhanced'));
    document.querySelectorAll('ul').forEach(link => link.classList.add('enhanced'));
    document.querySelectorAll('a').forEach(link => link.classList.add('enhanced'));
    document.querySelectorAll('hr').forEach(link => link.classList.add('enhanced'));
    document.querySelectorAll('label').forEach(label => label.style.color = 'black');
    img1.classList.add('enhanced');
    document.querySelectorAll("label").forEach(function (label) {label.style.color = "black"});
    document.querySelectorAll("textarea").forEach(function (textarea) {
      textarea.style.backgroundColor = "white";
      textarea.style.borderColor = "white";
      textarea.style.color = "black";
    });
  }
  else if (localStorage.getItem("theme1") == light) {
    editor1.setOption("theme", customized);
    editor2.setOption("theme", customized);
    theme1.textContent = "✰";
    localStorage.setItem('theme1', customized);
    theme1.classList.add('customized');
    reactor.classList.add('customized');
    debugButton.classList.add('customized');
    document.querySelector('.togglebtn').classList.add('customized');
    runButton.classList.add('customized');
    theme1settings.classList.add('customized');
    wrapper1.classList.add('customized');
    center.classList.add('customized');
    codeEditor1Title.classList.add('customized');
    codeEditor2Title.classList.add('customized');
    document.body.classList.add('customized');
    outputContainer.classList.add('customized');
    tipsfield.classList.add('customized');
    debugfield.classList.add('customized');
    myReactbar.classList.add('customized');
    document.querySelectorAll('h1').forEach(link => link.classList.add('customized'));
    document.querySelectorAll('ul').forEach(link => link.classList.add('customized'));
    document.querySelectorAll('a').forEach(link => link.classList.add('customized'));
    document.querySelectorAll('hr').forEach(link => link.classList.add('customized'));
    document.querySelectorAll('label').forEach(label => label.style.color = 'white');
    img1.classList.add('customized');
    document.querySelectorAll("label").forEach(function (label) {label.style.color = "white"});
    document.querySelectorAll("textarea").forEach(function (textarea) {
      textarea.style.backgroundColor = "#5239cc";
      textarea.style.borderColor = "#2b1e6b";
      textarea.style.color = "white";
    });
  }
  else if (localStorage.getItem("theme1") == customized) {
    editor1.setOption("theme", dark);
    editor2.setOption("theme", dark);
    theme1.textContent = "☽";
    localStorage.setItem('theme1', dark);
    theme1.classList.remove('enhanced', 'customized');
    reactor.classList.remove('enhanced', 'customized');
    debugButton.classList.remove('enhanced', 'customized');
    document.querySelector('.togglebtn').classList.remove('enhanced', 'customized');
    runButton.classList.remove('enhanced', 'customized');
    theme1settings.classList.remove('enhanced', 'customized');
    wrapper1.classList.remove('enhanced', 'customized');
    center.classList.remove('enhanced', 'customized');
    codeEditor1Title.classList.remove('enhanced', 'customized');
    codeEditor2Title.classList.remove('enhanced', 'customized');
    document.body.classList.remove('enhanced', 'customized');
    outputContainer.classList.remove('enhanced', 'customized');
    tipsfield.classList.remove('enhanced', 'customized');
    debugfield.classList.remove('enhanced', 'customized');
    myReactbar.classList.remove('enhanced', 'customized');
    document.querySelectorAll('h1').forEach(link => link.classList.remove('enhanced', 'customized'));
    document.querySelectorAll('ul').forEach(link => link.classList.remove('enhanced', 'customized'));
    document.querySelectorAll('a').forEach(link => link.classList.remove('enhanced', 'customized'));
    document.querySelectorAll('hr').forEach(link => link.classList.remove('enhanced', 'customized'));
    document.querySelectorAll('label').forEach(label => label.style.color = 'white');
    img1.classList.remove('enhanced', 'customized');
    document.querySelectorAll("label").forEach(function (label) {label.style.color = "white"});
    document.querySelectorAll("textarea").forEach(function (textarea) {
      textarea.style.backgroundColor = "#2b2d30";
      textarea.style.borderColor = "#212225";
      textarea.style.color = "white";
    });
  }
});

function workaround() {
  if (localStorage.getItem("theme1") == light) {
    document.querySelectorAll('a').forEach(link => link.classList.add('enhanced'));
  }
  else if (localStorage.getItem("theme1") == customized) {
    document.querySelectorAll('a').forEach(link => link.classList.add('customized'));
  }
};
setTimeout(workaround, 100);
setTimeout(workaround, 500);
setTimeout(workaround, 1000);
setTimeout(workaround, 2000);
setTimeout(workaround, 5000);