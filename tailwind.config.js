/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{svelte,js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: "600px",
      md: "1024px",
      lg: "1280px"
    },
    colors: {
      "gray-dark": "#0d0d0d",
      "gray": "#8c8c8c",
      "gray-light": "#f2f2f2",
      "green": "#4fc963"
    },
    fontFamily: {
      heading: ["Raleway", "sans-serif"],
      paragraph: ["Roboto", "serif"]
    },
    extend: {
      fontSize: {
        "title-sm": "calc(clamp(5rem, 7.5vw, 7.5rem) * 0.30)",
        "title-md": "calc(clamp(5rem, 7.5vw, 7.5rem) * 0.50)",
        "title-lg": "calc(clamp(5rem, 7.5vw, 7.5rem) * 0.75)",
        "title-xl": "clamp(5rem, 7.5vw, 7.5rem)",
        "title-2xl": "calc(clamp(5rem, 7.5vw, 7.5rem) * 12.5)"
      },
      spacing: {
        "margin": "min(4vw, 4rem)"
      },
      animation: {
        'infinite-scroll': 'infinite-scroll 25s linear infinite',
      },
      keyframes: {
        'infinite-scroll': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-100%)' },
        }
      }  
    },
  },
  plugins: [],
}

