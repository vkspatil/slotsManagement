/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        customBlue: "#1E3A8A",
        customGreen: "#16A34A",
        customOrange: "#E3902F",
        customRed: "#B91C1C",
        customGray: "#4B5563",
      },
      boxShadow: {
        favShadow: "2px 2px 4px rgba(0, 0, 0, 0.25)",
        left: "-4px 0 6px -1px rgba(0, 0, 0, 0.1)",
      },
      animation: {
        "slide-in-from-right": "slideInFromRight 0.3s ease-out",
        "slide-out-to-right": "slideOutToRight 0.3s ease-in",
        "slide-in-from-top": "slideInFromTop 0.3s ease-out",
        "slide-out-to-top": "slideOutToTop 0.3s ease-in",
        "slide-in-from-bottom": "slideInFromBottom 0.3s ease-out",
        "slide-out-to-bottom": "slideOutToBottom 0.3s ease-in",
        "fade-in": "fadeIn 0.3s ease-out",
        "fade-out": "fadeOut 0.3s ease-in",
        "scale-in": "scaleIn 0.3s ease-out",
        "scale-out": "scaleOut 0.3s ease-in",
      },
      keyframes: {
        slideInFromRight: {
          "0%": { transform: "translateX(100%)", opacity: "0", scale: "0.95" },
          "100%": { transform: "translateX(0)", opacity: "1", scale: "1" },
        },
        slideOutToRight: {
          "0%": { transform: "translateX(0)", opacity: "1", scale: "1" },
          "100%": {
            transform: "translateX(100%)",
            opacity: "0",
            scale: "0.95",
          },
        },
        slideInFromTop: {
          "0%": { transform: "translateY(-100%)", opacity: "0", scale: "0.95" },
          "100%": { transform: "translateY(0)", opacity: "1", scale: "1" },
        },
        slideOutToTop: {
          "0%": { transform: "translateY(0)", opacity: "1", scale: "1" },
          "100%": {
            transform: "translateY(-100%)",
            opacity: "0",
            scale: "0.95",
          },
        },
        slideInFromBottom: {
          "0%": { transform: "translateY(100%)", opacity: "0", scale: "0.95" },
          "100%": { transform: "translateY(0)", opacity: "1", scale: "1" },
        },
        slideOutToBottom: {
          "0%": { transform: "translateY(0)", opacity: "1", scale: "1" },
          "100%": {
            transform: "translateY(100%)",
            opacity: "0",
            scale: "0.95",
          },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeOut: {
          "0%": { opacity: "1" },
          "100%": { opacity: "0" },
        },
        scaleIn: {
          "0%": { transform: "scale(0.95)", opacity: "0" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
        scaleOut: {
          "0%": { transform: "scale(1)", opacity: "1" },
          "100%": { transform: "scale(0.95)", opacity: "0" },
        },
      },
    },
  },
  plugins: [],
};
