/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#E0115F',
          foreground: '#FFFFFF',
        },
        ruby: {
          DEFAULT: '#E0115F',
          50: '#fdf2f8',
          100: '#fce7f3',
          200: '#fbcfe8',
          300: '#f9a8d4',
          400: '#f472b6',
          500: '#E0115F',
          600: '#db2777',
          700: '#be185d',
          800: '#9d174d',
          900: '#831843',
        },
        emerald: {
          DEFAULT: '#50C878',
          50: '#ecfdf5',
          100: '#d1fae5',
          200: '#a7f3d0',
          300: '#6ee7b7',
          400: '#34d399',
          500: '#50C878',
          600: '#059669',
          700: '#047857',
          800: '#065f46',
          900: '#064e3b',
        },
        sapphire: {
          DEFAULT: '#0F52BA',
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#0F52BA',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
        },
        background: '#FAFAFA',
        foreground: '#1A1A1A',
        muted: {
          DEFAULT: '#F5F5F5',
          foreground: '#6B7280',
        },
        card: '#FFFFFF',
        border: '#E5E7EB',
      },
      fontFamily: {
        display: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        card: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        ruby: '0 10px 15px -3px rgba(224, 17, 95, 0.3), 0 4px 6px -2px rgba(224, 17, 95, 0.2)',
        emerald: '0 10px 15px -3px rgba(80, 200, 120, 0.3), 0 4px 6px -2px rgba(80, 200, 120, 0.2)',
        sapphire: '0 10px 15px -3px rgba(15, 82, 186, 0.3), 0 4px 6px -2px rgba(15, 82, 186, 0.2)',
      },
    },
  },
  plugins: [],
  safelist: [
    {
      pattern: /^(bg|text|border)-(primary|foreground|background|muted|card|ruby|emerald|sapphire|border)(-\w+)?(\/\d+)?$/,
    },
    {
      pattern: /^(shadow)-(card|ruby|emerald|sapphire)$/,
    },
    'font-display',
  ],
}

