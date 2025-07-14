/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'agspl-red': '#E4002B',
        'agspl-blue': '#0A0E2A',
        'agspl-light-gray': '#F5F5F5',
        'agspl-muted-gray': '#D0D0D0',
        navbar: {
          light: {
            bg: "rgb(255 255 255 / 0.8)",
            border: "rgb(229 231 235)",
            text: "rgb(17 24 39)",
            hover: "rgb(243 244 246)"
          },
          dark: {
            bg: "rgb(11 12 15 / 0.8)",
            border: "rgb(22 24 29)",
            text: "rgb(255 255 255)",
            hover: "rgb(22 24 29)"
          }
        }
      },
      fontFamily: {
        'montserrat': ['Montserrat', 'sans-serif'],
        'open-sans': ['Open Sans', 'sans-serif'],
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.6s ease-out',
        'fade-in': 'fadeIn 0.8s ease-out',
        'slide-in-left': 'slideInLeft 0.7s ease-out',
        'slide-in-right': 'slideInRight 0.7s ease-out',
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'shimmer': 'shimmer 2s linear infinite',
        'marquee': 'marquee var(--duration) linear infinite',
        "navbar-slide-down": "navbar-slide-down 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
        "navbar-dropdown": "navbar-dropdown 0.2s cubic-bezier(0.4, 0, 0.2, 1)",
      },
      maxWidth: {
        container: "1280px",
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 5px rgba(228, 0, 43, 0.5)' },
          '100%': { boxShadow: '0 0 20px rgba(228, 0, 43, 0.8)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        marquee: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(calc(-100% - var(--gap)))' }
        },
        "navbar-slide-down": {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(0)" }
        },
        "navbar-dropdown": {
          "0%": { 
            opacity: "0",
            transform: "rotateX(-12deg) scale(0.9)" 
          },
          "100%": { 
            opacity: "1",
            transform: "rotateX(0) scale(1)" 
          }
        }
      },
      backdropBlur: {
        navbar: "10px"
      }
    },
  },
  plugins: [],
};