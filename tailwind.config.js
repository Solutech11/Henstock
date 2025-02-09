import { bags_o_grains } from './src/assets';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        color: {
          "hunt": "#406845",
          "moss": "#858a43",
          "darkGreen": "#081e09",
          "border": "#c0bfb61a",
          "foot": "#e9f6e499",

          primary: {
            1: "#304330",
            2: "#E9F2E9"
          },
          secondary: {
            1: "#D1BE2F",
            2: "#F1EDE2"
          },
          acsent: {
            1: "#4ACC1C",
            2: "#E9F6E4",
            3: "#EA5771",
            4: "#FCEAEE"
          },
          dark: {
            1: "#191D19",
            2: "#686B68",
            3: "#A9ADA9",
            4: "#D6DAD6",
            5: "#E8EBE8",
            6: "#F4F6F4",
            7: "#F9F9F9"
          }
        }
      },
      backgroundImage: {
        "bagsOfFruits": "url('/src/assets/farm_products.jpg')",
        "footer-gradient" : `linear-gradient(64deg, #406845, #081e09 40%)`
      },
      fontSize: {
        '10': '10px',
        '11': '11px',
        '14': '14px',
        '15': '15px',
        '16': '16px',
        '18': '18px',
        '24': '24px',
        '28': '28px',
        '36': '36px',
        '48': '48px',
      },
      lineHeight: {
        '24': '24px',
        '26': '26px',
        '28': '28px',
        '30': '38px',
        '38': '38px',
        '46': '46px',
        '58': '58px',
      }
    },
  },
  plugins: [],
}

