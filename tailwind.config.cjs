/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Core Colors
        'gdg-blue': '#4285f4',
        'gdg-green': '#34a853',
        'gdg-yellow': '#f9ab00',
        'gdg-red': '#ea4335',
        // Halftones (Used for the main gradient background)
        'gdg-halftone-blue': '#57caff',
        'gdg-halftone-red': '#ff7daf',
        // Pastels (Used for hover effects)
        'gdg-pastel-blue': '#c3ecf6',
        // Grayscale
        'gdg-off-white': '#f0f0f0', // For the button background
        'gdg-black': '#1e1e1e',     // For text and dark elements
      },
    },
  },
  plugins: [],
}