/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
          fontFamily: {
            sans: ['Inter', 'sans-serif'],
          },
          colors: {
            primary: '#1e3a8a', // deep blue
            accent: '#f59e0b',  // amber
          },
        }
      }
        ,      
    plugins: [],
  };
  

  