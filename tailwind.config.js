/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        login: 'url(./assets/bg-login.jpg)',
      },
      fontFamily: {
        rubik: ['Rubik', 'system-ui', 'sans-serif'],
      },
      screens: {
        'desktop-xl': '2300px',
        'desktop-l': '1920px',
        desktop: '1440px',
        'desktop-s': '1280px',
        'tablet-l': '1024px',
        tablet: '844px',
        mobile: '540px',
      },
      spacing: {
        2: '2px',
        4: '4px',
        6: '6px',
        8: '8px',
        10: '10px',
        12: '12px',
        14: '14px',
        16: '16px',
        24: '24px',
        32: '32px',
        40: '40px',
        48: '48px',
        56: '56px',
        64: '64px',
        72: '72px',
        80: '80px',
        120: '120px',
      },
      boxShadow: {
        sdSoft: '0px 2px 15px rgba(47, 49, 53, 0.12)',
      },
    },
  },
  plugins: [],
}
