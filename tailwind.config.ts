import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        forest: {
          DEFAULT: '#1E3C1C',
          dark: '#0F200E',
          light: '#2C4C2A',
          50: '#EAF2EA',
        },
        sage: {
          DEFAULT: '#3A6838',
          light: '#5A9B2C',
          50: '#EEF5EE',
        },
        gold: {
          DEFAULT: '#B8903C',
          light: '#CCA85A',
          dark: '#8C6C24',
          50: '#FAF3E4',
        },
        sand: {
          DEFAULT: '#D4B896',
          light: '#E8D5BC',
          50: '#FBF7F2',
        },
        cream: {
          DEFAULT: '#F8F4EE',
          dark: '#EDE8DF',
        },
      },
      fontFamily: {
        serif: ['var(--font-cormorant)', 'Georgia', 'serif'],
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s ease-in-out infinite',
        'spin-slow': 'spin 12s linear infinite',
        'scroll-hint': 'scrollHint 2s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        scrollHint: {
          '0%, 100%': { transform: 'translateY(0)', opacity: '1' },
          '50%': { transform: 'translateY(8px)', opacity: '0.5' },
        },
      },
      screens: {
        'xs': '480px',
      },
    },
  },
  plugins: [],
}

export default config
