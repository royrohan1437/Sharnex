/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#f6f0ff",
          100: "#ebdbff",
          200: "#d9b9ff",
          300: "#bf88ff",
          400: "#a759ff",
          500: "#8f2fff",
          600: "#7f22f1",
          700: "#6f19ce",
          800: "#5a17a5",
          900: "#4b1786",
        },
      },
      boxShadow: {
        glow: "0 10px 35px rgba(143, 47, 255, 0.25)",
      },
      backgroundImage: {
        "brand-gradient":
          "linear-gradient(135deg, rgba(108,43,217,1) 0%, rgba(138,77,255,1) 45%, rgba(107,45,225,1) 100%)",
      },
    },
  },
  plugins: [],
};
