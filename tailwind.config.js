/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#ff3b3b', // Bright Red - Eka Corp brand
        accent: '#ff3b3b', // Bright Red - Eka Corp brand
        white: '#ffffff', // White
        navy: '#1a1a1a', // Dark Gray - Eka Corp brand
        darkGray: '#1a1a1a', // Dark Gray - Eka Corp brand
        brightRed: '#ff3b3b', // Bright Red - Eka Corp brand
      },
    },
  },
  plugins: [],
};


