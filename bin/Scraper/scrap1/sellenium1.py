from selenium import webdriver

# Inicjalizacja przeglądarki Chrome
driver = webdriver.Chrome()

# Otwórz stronę
url = 'https://villager88.github.io/'
driver.get(url)

# Poczekaj na załadowanie strony (możesz dostosować czas oczekiwania)
driver.implicitly_wait(10)

# Znajdź element "fullcode"
fullcode_element = driver.find_element_by_class_name('fullcode')

# Pobierz tekst z elementu
fullcode = fullcode_element.text

# Wydrukuj zawartość "fullcode"
print(fullcode)

# Zamknij przeglądarkę
driver.quit()
