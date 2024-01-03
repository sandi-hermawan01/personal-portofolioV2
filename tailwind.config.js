/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      white: "#FFFFFF",
      "light-white": "rgba(255,255,255,0.17)",
      antiquewhite: "#Faebd7",
      black: "#242424",
      grey: "#F3F3F3",
      "light-grey": "#ccc",
      "dark-grey": "#6B6B6B",
      red: "#FF4E4E",
      cyan: "#00FFFF",
      "dark-cyan": "#008b8b",
      yellow: "hsl(43 100% 68%)",
      transparent: "transparent",
      twitter: "#1DA1F2",
      purple: "#8B46FF",
      pink: "#FFC0CB",
      "second-purple": "rgb(108, 108, 229)",
      "dark-purple": "#081A51",
      first_color: "hsl(353, 100%, 65%)",
      title_color: "hsl(244, 24%, 26%)",
      text_color: "hsl(244, 16%, 43%)",
      text_color_light: "#8b88b1",
      body_color: "hsl(258, 60%, 98%)",
      container: "#fff",
    },

    fontSize: {
      sm: "12px",
      base: "14px",
      xl: "16px",
      "2xl": "20px",
      "3xl": "28px",
      "4xl": "38px",
      "5xl": "50px",
      h1_font: "2.25rem",
      h2_font: "1.5rem",
      h3_font: "1.25rem",
      normal_font: "1rem",
      small_font: "0.875rem",
      smaller_font: "0.813rem",
    },

    borderRadius: {
      default: "20px",
    },

    extend: {
      fontFamily: {
        inter: ["'Inter'", "sans-serif"],
        gelasio: ["'Gelasio'", "serif"],
        fira: ["'Fira Sans'", "sans-serif"],
        firaPlayfair: ["'Playfair Display'", "serif"],
        rubik: ["'Rubik'", "sans-serif"],
      },
      fontWeight: {
        small: 300,
        medium: 500,
        semibold: 600,
        bold: 700,
      },
      backgroundImage: {
        "section-title": "url('/src/assets/dots-bg.svg')",
      },
      keyframes: {
        push: {
          "50%": { transform: "scale(0.9)" },
          "100%": { transform: "scale(1)" },
        },
        "mouse-ani": {
          "0%": { top: "29%" },
          "15%": { top: "50%" },
          "50%": { top: "50%" },
          "100%": { top: "29%" },
        },
      },
    },
    animation: {
      "button-push": "push 0.3s linear 1",
      "ani-mouse": "mouse-ani 2s linear infinite",
    },
    boxShadow: {
      shadow: "0px 5px 20px 0px rgb(69 67 96 / 10%)",
      sm: "0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);",
      md: "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);",
      "2x1":
        "-400px 10px 100px 100px rgb(0 0 0 / 0.5), -10px 10px 100px 100px rgb(0 0 0 / 0.5);",
      "inset-2x1": "inset 0 25px 50px -12 rgb(0 0 0 / 0.25);",
      "sh-default": "0 0 1px rgb(0 0 0 / 0%)",
      "services-shadow1": "0px 5px 20px 0px rgb(108 108 229 / 50%)",
      "services-shadow2": "0px 5px 20px 0px rgb(249 215 76 / 50%)",
      "services-shadow3": "0px 5px 20px 0px rgb(249 123 139 / 50%)",
      none: "0 0 #0000",
    },
    blur: {
      custom: "blur(8px)",
    },
  },
  plugins: [],
};
