import type { Config } from "tailwindcss";
import withMT from "@material-tailwind/react/utils/withMT"
import tailwindAnimation from "tailwindcss-animate";
import { MaxVariantsPlugin } from 'tailwind-max-variants';

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        green: {
          500: "#24AE7C",
          600: "#0D2A1F",
        },
        blue: {
          200: "#3694FF",
          300: "#3945BA",
          500: "#79B5EC",
          600: "#152432",
          700: "#3945BA",
        },
        red: {
          500: "#F37877",
          600: "#3E1716",
          700: "#F24E43",
        },
        light: {
          200: "#E8E9E9",
          300: "#f72585"
        },
        dark: {
          200: "#0D0F10",
          300: "#131619",
          400: "#1A1D21",
          500: "#363A3D",
          600: "#76828D",
          700: "#ABB8C4",
        },
        yellow: {
          500: "#FEB008",
        },
        violet: {
          50: '#6e44ff',
          100: '#EDE9FE',
          200: '#DDD6FE',
          300: '#C4B5FD',
          400: '#A78BFA',
          500: '#8B5CF6',
          600: '#b5179e',
          700: '#6D28D9',
          800: '#5B21B6',
          900: '#4C1D95',
          950: '#2E1065',
        },
        purple: {
          50: '#f6f5fd',
          100: '#eeedfa',
          200: '#e1ddf7',
          300: '#c9c2f0',
          400: '#ae9ee7',
          500: '#9177db',
          600: '#7f59ce',
          700: '#734cbc',
          800: '#5d3b9c',
          900: '#4e3280',
          950: '#301f56'
        },
        dark_teal: {
          800: "#015963"
        }
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "2" },
        },
        "accordion-up": {
          from: { height: "1" },
          to: { height: "0" },
        },
        "ping-slow": {
          "75%, 100%": {
            transform: "scale(1.5)",
            opacity: "0",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "ping-slow": "ping-slow 2s cubic-bezier(0, 0, 0.2, 1) infinite",
      },
    },
  },
  plugins: [
    tailwindAnimation,
    MaxVariantsPlugin
  ],
} satisfies Config
export default withMT(config);
