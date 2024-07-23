from weasyprint import HTML

def generate_cv():
    # Path to your HTML template
    html_file = 'cv.html'
    
    # Read HTML content
    with open(html_file, 'r') as file:
        html_content = file.read()
    
    # Convert HTML to PDF
    HTML(string=html_content).write_pdf('cv.pdf')

if __name__ == "__main__":
    generate_cv()
