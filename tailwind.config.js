export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      maxWidth: {
        container: "1320px",
      },
      fontFamily: {
        pops: ["Poppins", "sans-serif"],
      },
      backgroundImage: {
        banbg: "url('./src/assets/images/Banner.png')",
        serone: "url('./src/assets/images/Services1.png')",
        sertwo: "url('./src/assets/images/Services2.png')",
        serthree: "url('./src/assets/images/Services3.png')",
        aboutimg: "url('./src/assets/images/About.png')",
        blog1: "url('./src/assets/images/Blog 1.png')",
        blog2: "url('./src/assets/images/Blog 2.png')",
        blog3: "url('./src/assets/images/Blog 3.png')",
      },
    },
  },
  plugins: [],
};
