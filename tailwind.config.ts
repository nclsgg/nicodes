import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        'ncls-purple': "#9370DB",
        'dark-white': "#f5f5f5",
        'light-black': "#252525"
      },
      backgroundColor: {
        "dark": "#121212"
      },
      lineHeight: {
        "title": "32px lg:72px md:64px sm:56px xs:48px",
      },
      width: {
        "inherit": "inherit",
      },
      maxWidth: {
        120: "30rem",
      },
      height: {
        "inherit": "inherit",
      },
      animation: {
        "scroll-h": 'scroll-h 22s linear infinite',
        "scroll-v": 'scroll-v 10s linear infinite',
      },
      keyframes: {
        "scroll-h": {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        "scroll-v": {
          '0%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(-200%)' },
        },
      },
      dropShadow: {
        "text": "0 1.2px 1.2px rgba(0, 0, 0, 0.8)",
      }
    },
  },
  plugins: [
    function ({ addUtilities }: { addUtilities: Function }) {
      addUtilities({
        '.animation-paused': {
          'animation-play-state': 'paused',
        },
      }, ['responsive', 'hover']);
    },
    function ({ addComponents }: { addComponents: Function }) {
      addComponents({
        '.title': {
          '@apply text-xl xl:text-4xl md:text-3xl sm:text-2xl': {}
        },
        '.subtitle': {
          '@apply text-sm xl:text-2xl md:text-xl sm:text-lg': {}
        },
        '.sectionTitle': {
          '@apply text-xl xl:text-3xl md:text-2xl sm:text-xl': {}
        }
      });
    },
  ],
  safelist: [
    'bg-blue-800',
    'bg-blue-700',
    'bg-gray-800',
    'bg-gray-700',
    'bg-blue-900',
    'bg-yellow-700',
    'bg-blue-600',
    'bg-green-700',
    'bg-green-600',
    'bg-black',
    'bg-red-700', 
    'bg-yellow-600', 
    'bg-orange-600', 
    'bg-pink-700', 
    'bg-purple-700',
    'bg-red-600',
  ],
  darkMode: 'class'
};
export default config;
