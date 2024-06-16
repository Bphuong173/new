// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      keyframes: {
        "fullscreen-timer": {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
      },
      animation: {
        "fullscreen-timer": "fullscreen-timer 250ms ease-in",
      },
    },
  },
  plugins: [],
};
