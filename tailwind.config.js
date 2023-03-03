/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'checked' : '#fff 4px 4px 0 0',
        'checkedBlack' : '#000 4px 4px 0 0',
        'buttom': '#fff 4px 4px 0 0,#fff 4px 4px 0 1px',
        'register': '#fff 16px 16px 0 0,#fff 16px 16px 0 1px',
        'Card': '#000 8px 8px 0 0,#000 8px 8px 0 1px',
      },
      animation: {
        marquee: 'marquee 5s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translate(0)' },
          '100%': { transform: 'translate(-100%)' },
        }
      }
    },
    fontFamily: {
      poppins: ['Poppins', 'sans-serif'],
    },
    fontSize: {
      'lg-number': ['31.56px', {
        fontWeight: '500',
        lineHeight: '47.33px',
        fontFamily: 'poppins'
      }],
      'lg-h1': ['61px', {
        fontWeight: '700',
        fontFamily: 'poppins',
        lineHeight: '70px',
      }],
      'lg-h2': ['45px', {
        fontWeight: '700',
        fontFamily: 'poppins',
        lineHeight: '52px',
      }],
      'lg-nav': ['11px', {
        fontWeight: '400',
        fontFamily: 'poppins'
      }],
      'lg-h3': ['34px', {
        fontWeight: '600',
        fontFamily: 'poppins',
        lineHeight: '34px',
      }],
      'lg-h4': ['20px', {
        fontWeight: '600',
        fontFamily: 'poppins'
      }],
      'lg-h5': ['14px', {
        fontWeight: '400',
        fontFamily: 'poppins',
        lineHeight: '20px',
      }],
      'lg-h6': ['10px', {
        fontWeight: '600',
        fontFamily: 'poppins',
        lineHeight: '20px',
      }],
      'lg-link': ['16px', {
        fontWeight: '600',
        fontFamily: 'poppins',
        lineHeight: '14px'
      }],
      'md-number': ['23px', {
        fontWeight: '500',
        lineHeight: '30px',
        fontFamily: 'poppins'
      }],
      'md-h1': ['44px', {
        fontWeight: '700',
        fontFamily: 'poppins',
        lineHeight: '60px',
      }],
      'md-h2': ['34px', {
        fontWeight: '700',
        fontFamily: 'poppins',
        lineHeight: '40px'
      }],
      'md-h3': ['26px', {
        fontWeight: '600',
        fontFamily: 'poppins',
        lineHeight: '30px',
      }],
      'md-h4': ['15px', {
        fontWeight: '600',
        fontFamily: 'poppins'
      }],
      'md-h5': ['11px', {
        fontWeight: '400',
        fontFamily: 'poppins'
      }],
      'md-h6': ['9px', {
        fontWeight: '600',
        fontFamily: 'poppins',
        lineHeight: '20px',
      }],
      'md-link': ['12px', {
        fontWeight: '400',
        fontFamily: 'poppins',
        lineHeight: '14px',

      }],
      'sm-number': ['16px', {
        fontWeight: '500',
        lineHeight: '30px',
        fontFamily: 'poppins'
      }],
      'sm-h1': ['28px', {
        fontWeight: '700',
        fontFamily: 'poppins',
        lineHeight: '50px',
      }],
      'sm-h2': ['21px', {
        fontWeight: '700',
        fontFamily: 'poppins',
        lineHeight: '30px'
      }],
      'sm-h3': ['16px', {
        fontWeight: '600',
        fontFamily: 'poppins',
        lineHeight: '20px',
      }],
      'sm-h4': ['9px', {
        fontWeight: '600',
        fontFamily: 'poppins'
      }],
      'sm-h5': ['7px', {
        fontWeight: '400',
        fontFamily: 'poppins',
        lineHeight: '10px'
      }],
      'sm-h6': ['7px', {
        fontWeight: '600',
        fontFamily: 'poppins',
        lineHeight: '20px',
      }],
      'sm-link': ['8px', {
        fontWeight: '400',
        fontFamily: 'poppins',
        lineHeight: '14px'
      }],
    },
    colors: {
      transparent: 'transparent',
      'black': '#000',
      'white': '#fff',
      'process': '#FFE600',
      'complete': '#9EFF00',
      'blue': '#A0C1E8',
      'btn': '#F3A560',
      'pink': '#EABED1',
      'green': '#69DBA2',
      'orange': '#E99F5D',
      'sky': '#75E3DD',
      'yellow': '#EFE693',
      'purple': '#C28EEB',
      'gray' : '#D9D9D9',
    }
  },
  plugins: [
    require('tailwind-scrollbar'),
    require("@tailwindcss/forms")
  ],
  variants: {
    scrollbar: ['rounded']
  }
}