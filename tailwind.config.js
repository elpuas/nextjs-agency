// https://tailwindcss.com/docs/installation#create-your-configuration-file
module.exports = {
  purge: {
    content: [
      './components/**/*.{js,ts,jsx,tsx,mdx}',
      './pages/**/*.{js,ts,jsx,tsx}'
    ]
  },
  darkMode: 'class',
  theme: {
    extend: {
      container: {
        center: true,
        margin: 'auto',
        padding: '2rem',
        screens: {
          sm: '100%',
          md: '100%',
          lg: '1024px',
          xl: '1280px'
        }
      },
      colors: {
        'zombie-dark': '#482EC3'
      }
    }
  },
  variants: {},
  plugins: [],
  future: {}
}
