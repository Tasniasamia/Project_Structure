/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1c4456",
        textheaderHover:"#417086",
        secondary:"#417086",
        white_hsla: 'hsla(0,0%,100%,0.5)',
        primary1:"#FF6400",
        secondary1:"#003049",
        textdark:"#313234",
        borderColor:"#888AA0",
        footertextColor:"#EAEEF9",
        borderColor2:"#CED7E2",
        strokeColor:"#DD8E38",
        mainbg:"#222224",
        mainbg1:"#353638",
        textyellow:"#DD8E38"



        
      },
      backgroundImage: {
        "gradient-radial": "bg-gradient-to-l from-[#8C7A41] to-[#BFB171]",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      backdropBlur: {
        70: '70px',
      },
    },
  },
  plugins: [],
  darkMode: ['selector', '[data-theme="dark"]'],
  // prefix: 'tw-',
};
