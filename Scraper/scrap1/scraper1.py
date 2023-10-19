import requests
from bs4 import BeautifulSoup

# URL strony, którą chcesz przescrapować
url = 'https://villager88.github.io/Frontend_Mentor/stats-preview-card-component-main/'

# Wysyłamy żądanie HTTP, aby pobrać zawartość strony
response = requests.get(url)

# Analizujemy zawartość strony za pomocą BeautifulSoup
soup = BeautifulSoup(response.text, 'html.parser')

# Znajdź interesujący cię div za pomocą jego atrybutów (np. klasa CSS)
# Przykład: <div class="nazwa-diva">...</div>
div = soup.find('div', class_='left')

# Wydrukuj zawartość diva
if div:
    print(div.text)
else:
    print("Nie znaleziono diva o podanej klasie.")
