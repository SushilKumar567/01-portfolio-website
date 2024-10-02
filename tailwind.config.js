module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"], // Update paths as needed
  theme: {
    extend: {
      colors: {
        c1: "#fff", // white
        c2: "#F5F5F7", // light-gray
        c3: "#1D1D1F", // black - headings & para
        c4: "#B75B48", // red
        c5: "#B75B48cc", // light-red
        c6: "#1E1E1E20", // grey
      },
      boxShadow: {
        sh1: "2.5px 2.5px 2.5px #1D1D1F", // red-shadow
      },
    },
  },

  plugins: [],
};
