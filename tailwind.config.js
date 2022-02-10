module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'nucba-black': '#101010',
      },
      backgroundImage: {
        'nucba-gradient':
          'linear-gradient(94.43deg, #8C54FB -18.98%, #CE4F51 113.48%)',
      },
      animation: {
        swipIn: 'swipIn 1s ease-in-out',
        swipUp: 'swipUp 0.5s ease-in-out',
        fade: 'fade 1s ease-out',
      },
      keyframes: {
        swipIn: {
          '0%': {
            left: '-1000px',
            position: 'relative'
          },
          '100%': {
            left: '0px',
            position: 'relative'
          }
        },
        swipUp: {
          '0%': {
            bottom: '-1000px',
            position: 'relative'
          },
          '100%': {
            bottom: '0px',
            position: 'relative'
          }
        },
        fade: {
          '0%': {
            opacity: 0,
          },
          '100%': {
            opacity: 1,
          }
        }
      }
    },
  },
  plugins: [],
}
