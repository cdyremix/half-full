/* tailwind.config.js */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      colors: {
        dodgers: "#005A9C",
        "dodgers-light": "#1E90FF",
      },
    },
  },
  plugins: [],
};

/* postcss.config.js */
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};