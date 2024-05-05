/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: '#192636',
          secondary: '#35383f',
          tertiary: '#41454c',
          quater: '#696e79',
          neutral: '#2563eb',
          'base-100': '#0d141c',
          lining: '#2d313c',
          info: '#2563eb',
          success: '#84cc16',
          warning: '#ca8a04',
          error: '#e11d48'
        }
      }
    ]
  },
  plugins: [require('@tailwindcss/typography'), require('daisyui')],
  theme: {
    fontFamily: {
      alma: ['Almarai', 'sans-serif'],
      dm: ['DM Mono', 'monospace'],
      ibm: ['IBM Plex Sans', 'sans-serif']
    }
  }
};
