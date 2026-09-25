/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx}'],
  theme: {
    extend: {
      colors: {
        espresso: {
          50: '#f7f1eb',
          100: '#ecdfd0',
          200: '#d8bda1',
          300: '#c1976f',
          400: '#a3714a',
          500: '#7a5236',
          600: '#5c3d28',
          700: '#3c2618',
          800: '#2b1b12',
          900: '#1f140d',
          950: '#120b07',
        },
        amber: {
          50: '#fdf7ee',
          100: '#f9ead2',
          200: '#f0d1a3',
          300: '#e8b573',
          400: '#d4a574',
          500: '#c8935a',
          600: '#a97540',
          700: '#875b30',
          800: '#674425',
          900: '#48301a',
        },
        cream: {
          50: '#fdfbf8',
          100: '#f5ede4',
          200: '#e8dcc9',
        },
      },
      fontFamily: {
        display: ['"Playfair Display"', 'serif'],
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
      },
      backgroundImage: {
        'radial-fade': 'radial-gradient(circle at 50% 0%, rgba(212,165,116,0.15), transparent 60%)',
        'noise': "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence baseFrequency='0.9' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E\")",
      },
      keyframes: {
        float: {
          '0%,100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-18px)' },
        },
        blob: {
          '0%,100%': { transform: 'translate(0,0) scale(1)' },
          '33%': { transform: 'translate(30px,-40px) scale(1.1)' },
          '66%': { transform: 'translate(-20px,20px) scale(0.95)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        pulseGlow: {
          '0%,100%': { boxShadow: '0 0 0 0 rgba(212,165,116,0.5)' },
          '50%': { boxShadow: '0 0 0 8px rgba(212,165,116,0)' },
        },
      },
      animation: {
        float: 'float 7s ease-in-out infinite',
        blob: 'blob 14s ease-in-out infinite',
        marquee: 'marquee 30s linear infinite',
        pulseGlow: 'pulseGlow 2s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};