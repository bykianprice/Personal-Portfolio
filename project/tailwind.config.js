/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        parchment: {
          50: '#fefdfb',
          100: '#fdf9f3',
          200: '#f9f0e1',
          300: '#f3e4cc',
          400: '#e8d4b0',
          500: '#d9c094',
          600: '#c6a872',
          700: '#a88a56',
          800: '#8a6f47',
          900: '#704c30',
        },
        ink: {
          50: '#f4f6f9',
          100: '#e8ecf3',
          200: '#c5d0e3',
          300: '#94a8cc',
          400: '#5f7ab0',
          500: '#3d548f',
          600: '#2e4073',
          700: '#26335d',
          800: '#1f2947',
          900: '#1a1f35',
          950: '#0d1020',
        },
        gold: {
          50: '#fffbeb',
          100: '#fef3c7',
          200: '#fde68a',
          300: '#fcd34d',
          400: '#fbbf24',
          500: '#d4a012',
          600: '#b8860b',
          700: '#92700c',
          800: '#6b4f0a',
          900: '#4a3607',
        },
        magic: {
          light: '#a78bfa',
          DEFAULT: '#7c3aed',
          dark: '#5b21b6',
        },
        forest: {
          light: '#6b8e5e',
          DEFAULT: '#4a6741',
          dark: '#2d4028',
        },
        burgundy: {
          light: '#b8465b',
          DEFAULT: '#8b2942',
          dark: '#5e1c2c',
        },
      },
      fontFamily: {
        serif: ['Playfair Display', 'Georgia', 'serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'paper-texture': "url(\"data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.08'/%3E%3C/svg%3E\")",
        'grain': "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.05'/%3E%3C/svg%3E\")",
      },
    },
  },
  plugins: [],
};
