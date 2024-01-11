import type { Config } from 'tailwindcss'

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "secondary": "#3C1E5A1A",
        "gray-dark": "#333333"
      },
      fontFamily: {
        "nunito": ["Nunito Sans", "sans-serif"]
      },
    },
  },
  daisyui: {
    themes: [
      {
        myTheme: {
          "primary": "#391E5A",
          "base-100": "#F3F3F9",
        }
      }
    ]
  },
  plugins: [require("daisyui")],
} satisfies Config

