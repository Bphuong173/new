/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: "396px", // Thêm breakpoint xs với kích thước 390px
        xxs: "376px",
      },
    },
  },
  plugins: [],
};
