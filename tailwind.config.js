/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        navy: {
          950: '#050d1a',
          900: '#0B1F3A',
          800: '#0f2a4d',
          700: '#133B6B',
          600: '#1a4a85',
        },
        gold: {
          DEFAULT: '#F4B400',
          light: '#FFCD3C',
          dark: '#C99000',
        },
      },
      fontFamily: {
        display: ['"Poppins"', 'sans-serif'],
        body: ['"Poppins"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      backgroundImage: {
        'navy-gradient': 'linear-gradient(160deg, #050d1a 0%, #0B1F3A 45%, #133B6B 100%)',
        'navy-radial': 'radial-gradient(ellipse at top, #133B6B 0%, #0B1F3A 55%, #050d1a 100%)',
        'gold-line': 'linear-gradient(90deg, transparent, #F4B400, transparent)',
      },
      boxShadow: {
        glass: '0 8px 32px 0 rgba(5, 13, 26, 0.37)',
        gold: '0 0 40px -8px rgba(244, 180, 0, 0.45)',
        soft: '0 20px 60px -15px rgba(5, 13, 26, 0.55)',
      },
      animation: {
        'fade-up': 'fadeUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        float: 'float 6s ease-in-out infinite',
        'spin-slow': 'spin 18s linear infinite',
        marquee: 'marquee 32s linear infinite',
        'marquee-reverse': 'marqueeReverse 32s linear infinite',
        shine: 'shine 2.8s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 2.4s ease-in-out infinite',
        blob: 'blob 14s ease-in-out infinite',
        wiggle: 'wiggle 0.6s ease-in-out',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(32px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-14px)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        marqueeReverse: {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0)' },
        },
        shine: {
          '0%': { transform: 'translateX(-150%) skewX(-20deg)' },
          '50%, 100%': { transform: 'translateX(250%) skewX(-20deg)' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 0px 0px rgba(244,180,0,0.4)' },
          '50%': { boxShadow: '0 0 28px 6px rgba(244,180,0,0.35)' },
        },
        blob: {
          '0%, 100%': { transform: 'translate(0,0) scale(1)' },
          '33%': { transform: 'translate(24px,-30px) scale(1.12)' },
          '66%': { transform: 'translate(-20px,18px) scale(0.92)' },
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(0deg) scale(1)' },
          '25%': { transform: 'rotate(-8deg) scale(1.08)' },
          '75%': { transform: 'rotate(8deg) scale(1.08)' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
}
