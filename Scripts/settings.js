var light = "default";
var dark = "twilight";
var customized = "customized";

localStorage.getItem("theme1");
if (localStorage.getItem("theme1") == "light") {
    editor1.setOption("theme", light);
    editor2.setOption("theme", light);
    editor1.setOption();
    theme1.textContent = "Light theme";
    theme1.classList.add('enhanced');
    wrapper1.classList.add('enhanced');
    center.classList.add('enhanced');
    document.body.classList.add('enhanced');
    outputContainer.classList.add('enhanced');
    tipsfield.classList.add('enhanced');
    debugfield.classList.add('enhanced');
    img1.classList.add('enhanced');
  } 
  else {
    editor1.setOption("theme", dark);
    editor2.setOption("theme", dark);
    theme1.textContent = "Dark theme";
    localStorage.setItem('theme1', 'dark');
    theme1.classList.remove('enhanced');
    wrapper1.classList.remove('enhanced');
    center.classList.remove('enhanced');
    document.body.classList.remove('enhanced');
    outputContainer.classList.remove('enhanced');
    tipsfield.classList.remove('enhanced');
    debugfield.classList.remove('enhanced');
    img1.classList.remove('enhanced');
  }

document.getElementById('theme1').addEventListener('click', function() {
  if (localStorage.getItem("theme1") == "dark") {
    editor1.setOption("theme", light);
    editor2.setOption("theme", light);
    theme1.textContent = "Light theme";
    localStorage.setItem('theme1', 'light');
    theme1.classList.add('enhanced');
    wrapper1.classList.add('enhanced');
    center.classList.add('enhanced');
    document.body.classList.add('enhanced');
    outputContainer.classList.add('enhanced');
    tipsfield.classList.add('enhanced');
    debugfield.classList.add('enhanced');
    document.querySelectorAll('a').forEach(link => link.classList.add('enhanced'));
    document.querySelectorAll('label').forEach(label => label.style.color = 'black');
    img1.classList.add('enhanced');
  } 
  else {
    editor1.setOption("theme", dark);
    editor2.setOption("theme", dark);
    theme1.textContent = "Dark theme";
    localStorage.setItem('theme1', 'dark');
    theme1.classList.remove('enhanced');
    wrapper1.classList.remove('enhanced');
    center.classList.remove('enhanced');
    document.body.classList.remove('enhanced');
    outputContainer.classList.remove('enhanced');
    tipsfield.classList.remove('enhanced');
    debugfield.classList.remove('enhanced');
    document.querySelectorAll('a').forEach(link => link.classList.remove('enhanced'));
    document.querySelectorAll('label').forEach(label => label.style.color = 'white');
    img1.classList.remove('enhanced');
  }
});

function workaround() {
  if (localStorage.getItem("theme1") == "light") {
    document.querySelectorAll('a').forEach(link => link.classList.add('enhanced'));
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