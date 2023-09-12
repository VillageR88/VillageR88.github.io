var light = "default";
var dark = "twilight";
var customized = "customized"
if (localStorage.getItem("theme1") == dark) {
  editor1.setOption("theme", dark);
  editor2.setOption("theme", dark);
  theme1.textContent = "Dark theme";
  localStorage.setItem('theme1', dark);
}
else if(localStorage.getItem("theme1") == light) {
  editor1.setOption("theme", light);
  editor2.setOption("theme", light);
  theme1.textContent = "Light theme";
  theme1.classList.add('enhanced');
  wrapper1.classList.add('enhanced');
  center.classList.add('enhanced');
  document.body.classList.add('enhanced');
  outputContainer.classList.add('enhanced');
  tipsfield.classList.add('enhanced');
  debugfield.classList.add('enhanced');
  img1.classList.add('enhanced');
  document.querySelectorAll('h1').forEach(link => link.classList.add('enhanced'));
  document.querySelectorAll('a').forEach(link => link.classList.add('enhanced'));
}
else if(localStorage.getItem("theme1") == customized) {
  editor1.setOption("theme", customized);
  editor2.setOption("theme", customized);
  theme1.textContent = "Custom theme";
  theme1.classList.add('customized');
  theme1settings.classList.add('customized');
  wrapper1.classList.add('customized');
  center.classList.add('customized');
  document.body.classList.add('customized');
  outputContainer.classList.add('customized');
  tipsfield.classList.add('customized');
  debugfield.classList.add('customized');
  img1.classList.add('customized');
  document.querySelectorAll('h1').forEach(link => link.classList.add('customized'));
  document.querySelectorAll('a').forEach(link => link.classList.add('customized'));
}
else localStorage.setItem('theme1', dark);

document.getElementById('theme1').addEventListener('click', function () {
  if (localStorage.getItem("theme1") == dark) {
    editor1.setOption("theme", light);
    editor2.setOption("theme", light);
    theme1.textContent = "Light theme";
    localStorage.setItem('theme1', light);
    theme1.classList.add('enhanced');
    wrapper1.classList.add('enhanced');
    center.classList.add('enhanced');
    document.body.classList.add('enhanced');
    outputContainer.classList.add('enhanced');
    tipsfield.classList.add('enhanced');
    debugfield.classList.add('enhanced');
    document.querySelectorAll('h1').forEach(link => link.classList.add('enhanced'));
    document.querySelectorAll('a').forEach(link => link.classList.add('enhanced'));
    document.querySelectorAll('label').forEach(label => label.style.color = 'black');
    img1.classList.add('enhanced');
  }
  else if (localStorage.getItem("theme1") == light) {
    editor1.setOption("theme", customized);
    editor2.setOption("theme", customized);
    theme1.textContent = "Custom theme";
    localStorage.setItem('theme1', customized);
    theme1.classList.add('customized');
    theme1settings.classList.add('customized');
    wrapper1.classList.add('customized');
    center.classList.add('customized');
    document.body.classList.add('customized');
    outputContainer.classList.add('customized');
    tipsfield.classList.add('customized');
    debugfield.classList.add('customized');
    document.querySelectorAll('h1').forEach(link => link.classList.add('customized'));
    document.querySelectorAll('a').forEach(link => link.classList.add('customized'));
    document.querySelectorAll('label').forEach(label => label.style.color = 'white');
    img1.classList.add('customized');
  }
  else if (localStorage.getItem("theme1") == customized) {
    editor1.setOption("theme", dark);
    editor2.setOption("theme", dark);
    theme1.textContent = "Dark theme";
    localStorage.setItem('theme1', dark);
    theme1.classList.remove('enhanced', 'customized');
    theme1settings.classList.remove('enhanced', 'customized');
    wrapper1.classList.remove('enhanced', 'customized');
    center.classList.remove('enhanced', 'customized');
    document.body.classList.remove('enhanced', 'customized');
    outputContainer.classList.remove('enhanced', 'customized');
    tipsfield.classList.remove('enhanced', 'customized');
    debugfield.classList.remove('enhanced', 'customized');
    document.querySelectorAll('a').forEach(link => link.classList.remove('enhanced', 'customized'));
    document.querySelectorAll('h1').forEach(link => link.classList.remove('enhanced', 'customized'));
    document.querySelectorAll('label').forEach(label => label.style.color = 'white');
    img1.classList.remove('enhanced', 'customized');
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
workaround();
setTimeout(workaround, 500);
workaround();
setTimeout(workaround, 1000);
workaround();
setTimeout(workaround, 2000);
workaround();
setTimeout(workaround, 5000);
workaround();