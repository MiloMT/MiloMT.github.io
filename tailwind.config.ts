module.exports = {
  content: {
    files: [
      "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
      "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
      "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
  },
  theme: {
    screens: {
      sm: "600px",
      md: "1024px",
      lg: "1280px",
    },
    fontFamily: {
      sans: ["Roboto", "serif"],
      heading: ["Raleway", "sans-serif"],
    },
    transitionDuration: {
      DEFAULT: "300ms",
    },
    extend: {
      colors: {
        neutral: {
          50: "var(--neutral-50)",
          100: "var(--neutral-100)",
          200: "var(--neutral-200)",
          300: "var(--neutral-300)",
          400: "var(--neutral-400)",
          500: "var(--neutral-500)",
          600: "var(--neutral-600)",
          700: "var(--neutral-700)",
          800: "var(--neutral-800)",
          900: "var(--neutral-900)",
          950: "var(--neutral-950)",
        },
        accent: "var(--accent)",
        link: "var(--link)",
      },
      fontSize: {
        xs: [
          "var(--font-size-xs)",
          {
            fontWeight: "var(--font-weight-regular)",
          },
        ],
        "xs-bold": [
          "var(--font-size-xs)",
          {
            fontWeight: "var(--font-weight-bold)",
          },
        ],
        sm: [
          "var(--font-size-sm)",
          {
            fontWeight: "var(--font-weight-regular)",
          },
        ],
        "sm-bold": [
          "var(--font-size-sm)",
          {
            fontWeight: "var(--font-weight-semibold)",
          },
        ],
        md: [
          "var(--font-size-md)",
          {
            fontWeight: "var(--font-weight-regular)",
          },
        ],
        "md-bold": [
          "var(--font-size-md)",
          {
            fontWeight: "var(--font-weight-bold)",
          },
        ],
        lg: [
          "var(--font-size-lg)",
          {
            fontWeight: "var(--font-weight-regular)",
          },
        ],
        "lg-bold": [
          "var(--font-size-lg)",
          {
            fontWeight: "var(--font-weight-bold)",
          },
        ],
        xl: [
          "var(--font-size-xl)",
          {
            fontWeight: "var(--font-weight-regular)",
          },
        ],
        "xl-bold": [
          "var(--font-size-xl)",
          {
            fontWeight: "var(--font-weight-bold)",
          },
        ],
        "2xl": [
          "var(--font-size-2xl)",
          {
            fontWeight: "var(--font-weight-regular)",
          },
        ],
        "2xl-bold": [
          "var(--font-size-2xl)",
          {
            fontWeight: "var(--font-weight-bold)",
          },
        ],
        "3xl": [
          "var(--font-size-3xl)",
          {
            fontWeight: "var(--font-weight-regular)",
          },
        ],
        "3xl-bold": [
          "var(--font-size-3xl)",
          {
            fontWeight: "var(--font-weight-bold)",
          },
        ],
        "4xl": [
          "var(--font-size-4xl)",
          {
            fontWeight: "var(--font-weight-regular)",
          },
        ],
        "4xl-bold": [
          "var(--font-size-4xl)",
          {
            fontWeight: "var(--font-weight-bold)",
          },
        ],
      },
    },
  },
  plugins: [],
};
