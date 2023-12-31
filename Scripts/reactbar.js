import { runReact } from "./myReactortext.js";

/*debug
localStorage.removeItem("firstTime");*/
document.addEventListener("DOMContentLoaded", function () {
    if (document.getElementById('reactor').disabled == false && localStorage.getItem("firstTime") != "no") {
        toggleReactbar();
    }
});

const reactorButton = document.getElementById('reactor');
const myReactbar = document.getElementById('myReactbar');
const myReactbar2 = document.getElementById('myReactbar2');
const myReactbar3 = document.getElementById('myReactbar3');

let isReactbarOpen = false;
myReactbar.style.transition = 'transform 0.6s ease';
myReactbar2.style.transition = 'transform 0.6s ease';
myReactbar3.style.transition = 'transform 0.6s ease';

export function toggleReactbar() {
    if (isReactbarOpen) {
        myReactbar.style.transform = 'translate(0px, 0px)';
        myReactbar2.style.transform = 'translate(0px, 0px)';
        myReactbar3.style.transform = 'translate(0%, 0%)';
        document.querySelector('.togglebtn').disabled = false;
        document.getElementById('myReactortext').textContent = "";
        document.getElementById('myReactortext3').textContent = "";

    } else {
        myReactbar.style.transform = 'translate(0px, -100%)';
        myReactbar2.style.transform = 'translate(0px, 100%)';
        document.querySelector('.sidebar').style.width = '0';
        document.querySelector('.togglebtn').disabled = true;
    }
    isReactbarOpen = !isReactbarOpen;
}


export function toggleReactbar3() {
    myReactbar3.style.transform = 'translate(-103%, 0%)';
}

myReactbar.addEventListener('transitionend', afterTransition);
function afterTransition() {
    if (myReactbar.style.transform == 'translate(0px, -100%)' && myReactbar2.style.transform == 'translate(0px, 100%)') {
        runReact();
    }
}