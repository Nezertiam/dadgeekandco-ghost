/** @type {import('tailwindcss').Config} */
export default {
  content: ["./*.hbs", "./**/*.hbs"],
  theme: {
    extend: {}
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/line-clamp'),
    require("daisyui"),
  ],
  daisyui: {
    themes: [
      "cupcake",
      {
        default: {
          "primary": "#f5082d",
          "secondary": "#9127a1",
          "accent": "#3d9ece",
          "neutral": "#211826",
          "base-100": "#353149",
          "info": "#5CA0D1",
          "success": "#165A30",
          "warning": "#E1900E",
          "error": "#F31B34"
        },
        tuttifrutti: {
          "primary": "#8de045",
          "secondary": "#ea841e",
          "accent": "#d3153b",
          "neutral": "#201D30",
          "base-100": "#3C3743",
          "info": "#5FB6CE",
          "success": "#26A67E",
          "warning": "#F4CE10",
          "error": "#E12362",
        },
        mango: {
          "primary": "#d1523c",
          "secondary": "#a0aa0b",
          "accent": "#3d9ece",
          "neutral": "#211826",
          "base-100": "#353149",
          "info": "#5CA0D1",
          "success": "#165A30",
          "warning": "#E1900E",
          "error": "#F31B34",
        },
      },
    ],
  },
}