/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{html,js}",
  ],
  theme: {
    // colors: {
    //   primery: "Fuchsia-400",
    // },
    extend: {
      fontFamily: {
        vazir: ["vazir", "sans-serif"],
        "vazir-bold": ["vazir-bold", "sans-serif"],
        "vazir-light": ["vazir-light", "sans-serif"],
      },
      boxShadow: {
        custom: "0px 4px 15px rgba(48, 79, 254, 0.29)",
      },
      colors: {
   
        primary: {
          DEFAULT: "#072135", 
        },
  
        secondary: {
          DEFAULT: "#38A9FF",
       
        },
      },
    },
  },
  plugins: [],
};
