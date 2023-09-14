const reactorButton = document.getElementById('reactor');
const myReactbar = document.getElementById('myReactbar');

let isReactbarOpen = false;
myReactbar.style.transition = 'transform 5s ease';
myReactbar2.style.transition = 'transform 5s ease';


function toggleReactbar() {
    if (isReactbarOpen) {
        myReactbar.style.transform = 'translate(0px, 0px)';
        myReactbar2.style.transform = 'translate(0px, 0px)';
        document.querySelector('.togglebtn').disabled = false;
    } else {
        myReactbar.style.transform = 'translate(0px, -100%)';
        myReactbar2.style.transform = 'translate(0px, 100%)';
        document.querySelector('.sidebar').style.width = '0';
        document.querySelector('.togglebtn').disabled = true;
    }
    isReactbarOpen = !isReactbarOpen;
}
reactorButton.addEventListener('click', toggleReactbar);