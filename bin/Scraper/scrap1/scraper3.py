import requests
from bs4 import BeautifulSoup

# URL strony, którą chcesz przescrapować
url = 'https://www.frontendmentor.io/profile/VillageR88'

# Wysyłamy żądanie HTTP, aby pobrać zawartość strony
response = requests.get(url)

# Analizujemy zawartość strony za pomocą BeautifulSoup
soup = BeautifulSoup(response.text, 'html.parser')

# Znajdź interesujący cię div za pomocą jego atrybutów (np. klasa CSS)
# Przykład: <div class="nazwa-diva">...</div>
div = soup.find('div', class_='Spacer__Wrapper-sc-1qmp1cv-0 Stack__Wrapper-sc-11gzqgt-0 dnUBVk Ea-dmS column-wrapper')

# Sprawdź, czy div został znaleziony
if div:
    # Tworzymy lub otwieramy plik do zapisu
    with open('wynik.txt', 'w', encoding='utf-8') as file:
        # Zapisujemy zawartość diva do pliku
        file.write(div.text)
    print("Zapisano wynik do pliku 'wynik.txt'.")
else:
    print("Nie znaleziono diva o podanej klasie.")
