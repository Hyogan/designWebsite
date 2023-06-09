/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    screens : {
      sl : '375px',
      sm : '480px',
      md : '768px',
      lg : '976px',
      xl : '1440px',
    },
    extend: {
      colors : {
        brightRed : 'hsl(12,88%,59%)',
        brightRedTransluscent : 'hsla(233,12%,61%,.78)',
        brightRedLight : 'hsl(12,88%,69%)',
        brightRedSupLight : 'hsl(12,88%,95%)',
        darkBlue : 'hsl(228,39%,23%)',
        darkGrayishBlue: 'hsl(227, 12%, 61%)',
        veryDarkBlue: 'hsl(233, 12%, 13%)',
        veryPaleRed: 'hsl(13, 100%, 96%)',
        varyLightGray: 'hsl(0, 0%, 98%)',
        blackSimple : 'hsl(0,0%,0%)'
      },
      backgroundImage : {
        heroImage : "url('../images/hero-plane.jpg')"
      }
    },
  },
  plugins: [],
}

