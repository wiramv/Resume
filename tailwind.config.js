module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      "colors" : {
        "dark" : '#000500',
        "secondary-light" : '#FCD3DE',
        "secondary" : '#FF312E',
        "light" : '#DFF8EB',
        "primary" : '#3C787E',
        "text" : '#4E4E4E'
      },
      "fontFamily" : {
        'poppins' : ['Poppins', 'sans-serif'],
        'open-sans' : ['Open Sans', "sans-serif"]
      },
      screens: {
        'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
      }
    }
  },
  plugins: [],
}
