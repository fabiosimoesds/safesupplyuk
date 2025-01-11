# Safe Supply UK Website

A static website for Safe Supply UK, featuring multiple product categories and built with Tailwind CSS.

## Setup Instructions

1. Clone the repository:
   ```bash
   git clone https://github.com/fabiosimoesds/safesupplyuk.git
   ```

2. Install dependencies:
```bash
npm install

# The serve package will create a local development server (usually at http://localhost:3000) 
npm install -g serve
```

3. Build the CSS:
```bash
# For development (watches for changes)
npm run dev

# For production build
npm run build
```

## Development

1. Start the Tailwind CLI build process and run the server:
```bash
npm run dev
serve
```

2. Open the HTML files in your browser or use a local server

## Deployment to GitHub Pages

1. Build the production CSS:
```bash
npm run build
```

2. Make sure your HTML files are linking to the correct CSS path:
```html
<!-- Update your CSS path to be relative to the repository root -->
<link href="/dist/output.css" rel="stylesheet">
```

3. Commit all files including the `dist` folder:
```bash
git add .
git commit -m "Build CSS for production"
git push
```

4. Enable GitHub Pages in your repository settings:
- Go to Settings > Pages
- Select "Deploy from a branch"
- Choose "main" branch and "/ (root)"
- Click Save

Your site will be available at: `https://fabiosimoesds.github.io/safesupplyuk`

**Note**: Make sure the `dist` folder is not in your `.gitignore` file, as GitHub Pages needs the built CSS file.

## Technologies Used
- HTML5
- Tailwind CSS
- SVG Patterns
- Responsive Design

## License
MIT License