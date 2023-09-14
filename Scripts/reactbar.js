// Pobieramy przycisk i okno
const reactorButton = document.getElementById('reactor');
const myReactbar = document.getElementById('myReactbar');

// Utwórz zmienną do śledzenia stanu okna
let isReactbarOpen = false;

// Funkcja do przesuwania okna w górę lub w dół
function toggleReactbar() {
  if (isReactbarOpen) {
    // Jeśli okno jest otwarte, zamknij je
    myReactbar.style.transform = 'translate(0px, 0px)';
  } else {
    // Jeśli okno jest zamknięte, otwórz je
    myReactbar.style.transform = 'translate(0px, -100%)';
  }
  // Zmień stan okna
  isReactbarOpen = !isReactbarOpen;
}

// Obsługa zdarzenia kliknięcia przycisku "reactor"
reactorButton.addEventListener('click', toggleReactbar);

// Obsługa zdarzenia zamknięcia okna (np. przez przycisk "Zamknij")
const closeButton = document.getElementById('closeButton'); // Dodaj przycisk "Zamknij" w HTML
closeButton.addEventListener('click', () => {
  // Zamknij okno i zaktualizuj stan
  myReactbar.style.transform = 'translate(0px, 0px)';
  isReactbarOpen = false;
});
