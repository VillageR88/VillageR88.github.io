document.getElementById('toggleList1').addEventListener('click', () => {
    if (document.getElementById('nestedList1').style.display === 'none') {
        document.getElementById('nestedList1').style.display = 'block';
    } else {
        document.getElementById('nestedList1').style.display = 'none';
    }
});

document.getElementById('toggleList1b').addEventListener('click', () => {
    if (document.getElementById('nestedList1b').style.display === 'none') {
        document.getElementById('nestedList1b').style.display = 'block';
    } else {
        document.getElementById('nestedList1b').style.display = 'none';
    }
});

document.getElementById('toggleList2').addEventListener('click', () => {
    if (document.getElementById('nestedList2').style.display === 'none') {
        document.getElementById('nestedList2').style.display = 'block';
    } else {
        document.getElementById('nestedList2').style.display = 'none';
    }
});

document.getElementById('toggleList3').addEventListener('click', () => {
    if (document.getElementById('nestedList3').style.display === 'none') {
        document.getElementById('nestedList3').style.display = 'block';
    } else {
        document.getElementById('nestedList3').style.display = 'none';
    }
});

document.getElementById('toggleList4').addEventListener('click', () => {
    if (document.getElementById('nestedList4').style.display === 'none') {
        document.getElementById('nestedList4').style.display = 'block';
    } else {
        document.getElementById('nestedList4').style.display = 'none';
    }
});

document.getElementById('toggleList5').addEventListener('click', () => {
    if (document.getElementById('nestedList5').style.display === 'none') {
        document.getElementById('nestedList5').style.display = 'block';
    } else {
        document.getElementById('nestedList5').style.display = 'none';
    }
});

var lock = 0;
function toggleLock() {
    if (lock == 0) {
        lock = 1;
        document.getElementById("locker").textContent = "🔒";
    }
    else {
        lock = 0;
        document.getElementById("locker").textContent = "🔓";
    }
}

function collapser() {
    document.getElementById('nestedList1').style.display = 'none';
    document.getElementById('nestedList1b').style.display = 'none';
    document.getElementById('nestedList2').style.display = 'none';
    document.getElementById('nestedList3').style.display = 'none';
    document.getElementById('nestedList4').style.display = 'none';
    document.getElementById('nestedList5').style.display = 'none';
}

function collapseAll() {
    if (lock == 0) {
        setTimeout(collapser, 500);
        document.querySelector('.sidebar').style.width = '0';
    }
}