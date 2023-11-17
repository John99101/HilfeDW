import os

directory = 'P:\\Bonetti_Projekte\\Programieren_lernen\\Hilfe_WebPage\\business solutions kopie\\Updatedoku2023'

head_content = '<script src="../navigation.js"></script> <script src="../expandAllSubmenus.js"></script> <script src="../ActiveLink.js"></script>'

body_content = '<div id="navigation-container"></div>'

for filename in os.listdir(directory):
    if filename.endswith('.htm'):
        filepath = os.path.join(directory, filename)
        with open(filepath, 'r') as file:
            html_content = file.read()
   
        head_index = html_content.find('</head>')
        if head_index != -1:
            updated_html = html_content[:head_index] + head_content + html_content[head_index:]

        body_index = updated_html.find('</body>')
        if body_index != -1:
            updated_html = updated_html[:body_index] + body_content + updated_html[body_index:]

        with open(filepath, 'w') as file:
            file.write(updated_html)