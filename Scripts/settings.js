localStorage.getItem("theme1");

document.getElementById('theme1').addEventListener('click', function() {
  if (localStorage.getItem("theme1") == "dark") {
    theme1.textContent = "Light theme";
    localStorage.setItem('theme1', 'light');
    theme1.style.backgroundColor = 'white';
    theme1.style.color = 'black';
  } else {
    theme1.textContent = "Dark theme";
    localStorage.setItem('theme1', 'dark');
    theme1.style.backgroundColor = 'black';
    theme1.style.color = 'white';
  }
});