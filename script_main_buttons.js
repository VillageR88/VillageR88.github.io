const toggleButton1 = document.getElementById('toggleList1');
    const nestedList1 = document.getElementById('nestedList1');
    toggleButton1.addEventListener('click', () => {
        if (nestedList1.style.display === 'none') {
            nestedList1.style.display = 'block';
        } else {
            nestedList1.style.display = 'none';
        }
    });

    const toggleButton2 = document.getElementById('toggleList2');
    const nestedList2 = document.getElementById('nestedList2');
    toggleButton2.addEventListener('click', () => {
        if (nestedList2.style.display === 'none') {
            nestedList2.style.display = 'block';
        } else {
            nestedList2.style.display = 'none';
        }
    });

    const toggleButton3 = document.getElementById('toggleList3');
    const nestedList3 = document.getElementById('nestedList3');
    toggleButton3.addEventListener('click', () => {
        if (nestedList3.style.display === 'none') {
            nestedList3.style.display = 'block';
        } else {
            nestedList3.style.display = 'none';
        }
    });