const showPopupButton = document.getElementById('theme1settings');
const popupOverlay = document.getElementById('popupOverlay');
const closePopupButton = document.getElementById('closePopupButton');

// Wyświetlanie pop-upu po kliknięciu przycisku
showPopupButton.addEventListener('click', () => {
    popupOverlay.style.display = 'flex';
});

// Zamykanie pop-upu po kliknięciu przycisku zamykającego (X)
closePopupButton.addEventListener('click', () => {
    popupOverlay.style.display = 'none';
});