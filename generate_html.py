import json
from jinja2 import Environment, FileSystemLoader

# Load JSON data
with open("workshops.json", "r") as file:
  events = json.load(file)

# Set up Jinja2 environment
env = Environment(loader=FileSystemLoader("."))  # Load templates from current directory
template = env.get_template("template.html")

# Render the template with JSON data
html_output = template.render(events=events)

# Save the final static HTML file
with open("index.html", "w") as file:
  file.write(html_output)

print("Static HTML file 'index.html' has been generated successfully!")
