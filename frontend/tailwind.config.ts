import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#EE3124',
          dark: '#D62A1E',
          light: '#F15A50'
        },
        secondary: {
          DEFAULT: '#D9D9D9',
          dark: '#A6A6A6',
          light: '#F5F5F5'
        }
      },
      fontFamily: {
        sans: ['var(--font-inter)'],
      }
    },
  },
  plugins: [],
}

export default config 