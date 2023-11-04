import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    screens: {
      sm: '375px',
      lg: '1440px'
    },
    extend: {
      colors: {
        primary: {
          'soft-red': 'hsl(10, 79%, 65%)',
          cyan: 'hsl(186, 34%, 60%)'
        },
        neutral: {
          'dark-brown': 'hsl(25, 47%, 15%)',
          'medium-brown': 'hsl(28, 10%, 53%)',
          cream: 'hsl(27, 66%, 92%)',
          'very-pale-orange': 'hsl(33, 100%, 98%)'
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
      },
      fontFamily: {
        sans: ['DM Sans', 'sans-serif']
      },
      fontSize: {
        base: '18px',
        md: '14px',
        '2xl': '28px'
      },
      fontWeight: {
        normal: '400',
        bold: '700'
      },
      container: {
        center: true,
        padding: '1rem',
        screens: {
          sm: '100%',
          md: '500px',
          lg: '500px',
          xl: '500px',
          '2xl': '500px'
        }
      },
      screens: {
        xs: '360px',
        sm: '500px',
        md: '500px',
        lg: '500px',
        xl: '500px',
        '2xl': '500px'
      }
    }
  },
  plugins: []
}

export default config
