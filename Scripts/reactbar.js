const reactorButton = document.getElementById('reactor');
const myReactbar = document.getElementById('myReactbar');

let isReactbarOpen = false;

function toggleReactbar() {
    if (isReactbarOpen) {
        myReactbar.style.transform = 'translate(0px, 0px)';
    } else {
        myReactbar.style.transform = 'translate(0px, -100%)';
    }
    isReactbarOpen = !isReactbarOpen;
}
reactorButton.addEventListener('click', toggleReactbar);