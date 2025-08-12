/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryBlue: '#1E40AF',
        accentBlue: '#3B82F6',
        lightBlueTint: '#EFF6FF',
        white: '#FFFFFF',
        darkNavy: '#0F172A',
        accentPurple: '#8B5CF6',
      },
    },
  },
  plugins: [],
};


