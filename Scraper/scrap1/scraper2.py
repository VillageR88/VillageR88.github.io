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

# Wydrukuj zawartość diva
if div:
    print(div.text)
else:
    print("Nie znaleziono diva o podanej klasie.")
