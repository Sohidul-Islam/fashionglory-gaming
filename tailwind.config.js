/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        sports: '#FF9F1C',
        crash: '#074CE3',
        slots: '#FF3300',
        arcade: '#5E00FF',
        casino: '#1ABC9C',
        lottery: '#00ABEA',
        fishing: '#47BA00',
        promotion: '#8F4AFF',
        table: '#FF07DE',
      }
    },
  },
  plugins: [],
}