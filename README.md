# Festify — Card/Poster Generator (Frontend Only)

A React + Tailwind app that lets users pick a template, fill their details, and export a poster/card as PNG or PDF. No backend required.

## Quick Start
```bash
# 1) Extract the zip
# 2) Open a terminal in the project folder
npm i
npm run dev
```
Then open the shown local URL in your browser.

## Features
- 🎨 Template gallery (Diwali, Birthday, Minimal Event)
- 📝 Dynamic fields per template
- 👀 Live preview with responsive typography
- ⬇️ Export as PNG or PDF (client-side using html-to-image + jsPDF)
- 🧰 Preset sizes: Square, Instagram Portrait, Story, A4
- 🧪 Easily add more templates in `src/templates/index.js`

## Add your own template
Create an object with:
- `id`, `title`, `tags`
- `fields`: array of `{ name, label, type?, placeholder?, default? }`
- `preview()`: small JSX preview
- `render({ width, height, data })`: full-size JSX

Push it into `TEMPLATES` array.

Happy building!
