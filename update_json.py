from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.common.by import By
from selenium.webdriver.chrome.options import Options
import time

# Set up Selenium options (headless mode)
chrome_options = Options()
chrome_options.add_argument("--headless")

# Path to ChromeDriver (ensure this is correct on your system)
driver_path = "/path/to/chromedriver"

# Initialize the WebDriver
driver = webdriver.Chrome()

# Open the webpage
url = "https://my.qreserve.com/admin/sites/1lzmly2mosk8kvflbp3kle5hcl7fufewjbgwap/resources?className=eventByDate"
driver.get(url)

# Wait for page to load completely (you might need to adjust this)
time.sleep(5)

# Extract event details (adjust the selector based on the structure of the page)
events = driver.find_elements(By.CSS_SELECTOR, ".reservable-link")  # Update with actual CSS selector

# Loop through the events and scrape details
for event in events:
  print(event)

# Close the WebDriver
driver.quit()