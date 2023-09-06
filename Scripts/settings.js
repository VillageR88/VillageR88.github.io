localStorage.getItem("theme1");

if (localStorage.getItem("theme1") == "light") {
    theme1.textContent = "Light theme";
    theme1.classList.add('enhanced');
    wrapper0.classList.add('enhanced');
    wrapper1.classList.add('enhanced');
    center.classList.add('enhanced');
    document.body.classList.add('enhanced');
    document.querySelectorAll('a').forEach(link => link.classList.add('enhanced'));
  } else {
    theme1.textContent = "Dark theme";
    localStorage.setItem('theme1', 'dark');
    theme1.classList.remove('enhanced');
    wrapper0.classList.remove('enhanced');
    wrapper1.classList.remove('enhanced');
    center.classList.remove('enhanced');
    document.body.classList.remove('enhanced');
    document.querySelectorAll('a').forEach(link => link.classList.remove('enhanced'));
  }

document.getElementById('theme1').addEventListener('click', function() {
  if (localStorage.getItem("theme1") == "dark") {
    theme1.textContent = "Light theme";
    localStorage.setItem('theme1', 'light');
    theme1.classList.add('enhanced');
    wrapper0.classList.add('enhanced');
    wrapper1.classList.add('enhanced');
    center.classList.add('enhanced');
    document.body.classList.add('enhanced');
    document.querySelectorAll('a').forEach(link => link.classList.add('enhanced'));

  } else {
    theme1.textContent = "Dark theme";
    localStorage.setItem('theme1', 'dark');
    theme1.classList.remove('enhanced');
    wrapper0.classList.remove('enhanced');
    wrapper1.classList.remove('enhanced');
    center.classList.remove('enhanced');
    document.body.classList.remove('enhanced');
    document.querySelectorAll('a').forEach(link => link.classList.remove('enhanced'));
  }
});