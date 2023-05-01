/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: "#4831d4",
        morning: "#ccf381",
        fonts: "#3d155f"
      },
      fontFamily: {
        helvetica: ["helvetica"],
        sfu: ["SF UI Text"]
      }
    },
  },
  plugins: [],
}

