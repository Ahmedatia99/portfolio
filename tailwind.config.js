/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: "#4831d4",
        morning: "#ccf381",
        fonts: "#3d155f",
        supcolor: "#F9F9F9",
        footer: "#3d155f"
      },
      fontFamily: {
        helvetica: ["helvetica"],
        sfu: ["SF UI Text"]
      },
      backgroundImage:{
        "footer-bg":"url('/images/contact.svg')"
      }
    },
  },
  plugins: [],
}

