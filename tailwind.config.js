// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "custom-yellow":'#f9eb28',
        'custom-red': '#F24F4B',
        'custom-heading':"#667649"
      },
    },
  },
  plugins: [],
}
