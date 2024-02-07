document.addEventListener('DOMContentLoaded', function () {
    function toggleNav() {
        if (document.querySelector('.sidebar').style.width === '340px') {
            document.querySelector('.sidebar').style.width = '0';
        } else {
            document.querySelector('.sidebar').style.width = '340px';
        }
    }
    document.querySelector('.togglebtn').addEventListener('click', toggleNav);
});
