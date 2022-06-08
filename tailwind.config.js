module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
<<<<<<< HEAD
          primary: "#2F8F9D",
          secondary: "#3BACB6",
          accent: "#EEB0B0",
=======
          primary: "#4B11E8",
          secondary: "#F7D716",
          accent: "#9BA3EB",
>>>>>>> 824c6d45850fdf77587be6d7cc2b6c13c5a3ef3b
          neutral: "#3d4451",
          "base-100": "#ffffff",
        },
      },
      "dark",
      "cupcake",
    ],
  },
  plugins: [require("daisyui")],
};
