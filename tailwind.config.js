/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-pattern": "url('/src/assets/nityanad.jpeg')",
      },
      height: {
        "screen/60": "60vh",
      },
      width: {
        "screen/60": "60vw",
      },
      
    },
  },
  plugins: [],
};
