import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#305679',
          50: '#f0f5f9',
          100: '#dbe6f0',
          200: '#b8cde0',
          300: '#8fb0cd',
          400: '#5f86a8',
          500: '#305679',
          600: '#2a4d6d',
          700: '#243f59',
          800: '#1f3549',
          900: '#1a2c3d',
        },
        secondary: {
          DEFAULT: '#41B6E6',
          50: '#eff9fe',
          100: '#d8f1fc',
          200: '#b6e6f9',
          300: '#80d4f4',
          400: '#41b6e6',
          500: '#2599cf',
          600: '#1f7daf',
          700: '#1d678f',
          800: '#1e5675',
          900: '#1d4862',
        },
      },
      fontFamily: {
        sans: [
          'system-ui',
          '-apple-system',
          'Segoe UI',
          'Roboto',
          'Helvetica',
          'Arial',
          'sans-serif',
        ],
      },
    },
  },
  plugins: [typography],
};
