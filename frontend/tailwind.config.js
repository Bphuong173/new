/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: "391px", // Thêm breakpoint xs với kích thước 390px
      },
    },
  },
  plugins: [],
};
