module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: "#2897E7",
        lightgray: "C4C4C4"
      },
      backgroundImage: {
        logo: "url('/images/logo2.png')",
        diplome: "url('/images/diplome.png')",
        hero: "url('/images/hero.png')",
        back: "url('/images/back.jpg')",
      },
      keyframes:{
        'updown': {
          '0%': {
              transform: 'translateY(-20px)'
          },
          '100%': {
              transform: 'translateY(0)'
          },
        }
      },
      animation: {
        'updown': 'updown 2.5s ease-out infinite alternate',
      }
    },
  },
  plugins: [],
}
