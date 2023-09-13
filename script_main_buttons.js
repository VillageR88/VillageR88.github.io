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

function collapseAll() {
    document.getElementById('nestedList1').style.display = 'none';
    document.getElementById('nestedList1b').style.display = 'none';
    document.getElementById('nestedList2').style.display = 'none';
    document.getElementById('nestedList3').style.display = 'none';
    document.getElementById('nestedList4').style.display = 'none';
};