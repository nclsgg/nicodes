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
        "scroll": 'scroll 20s linear infinite',
      },
      keyframes: {
        "scroll": {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
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
    'bg-blue-500',
    'bg-gray-900',
    'bg-blue-700',
    'bg-yellow-400',
    'bg-blue-400',
    'bg-green-500',
    'bg-black',
    'bg-red-500',
    'bg-yellow-500',
    'bg-orange-500',
    'bg-pink-500',
    'bg-purple-500',
  ],
  darkMode: 'class'
};
export default config;
