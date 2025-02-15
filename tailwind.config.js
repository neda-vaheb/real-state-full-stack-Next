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
        // تعریف رنگ اصلی (Primary)
        primary: {
          DEFAULT: "#9C27B0", // رنگ پیش‌فرض
          light: "#E1BEE7", // نسخه روشن‌تر
          dark: "#5521B5", // نسخه تیره‌تر
        },
        // تعریف رنگ ثانویه (Secondary)
        secondary: {
          DEFAULT: "#FF6D00", // رنگ پیش‌فرض
          light: "#FF9E40", // نسخه روشن‌تر
          dark: "#C43C00", // نسخه تیره‌تر
        },
      },
    },
  },
  plugins: [],
};
