import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  safelist: [
    'text-white', 'text-black', 'text-blue-700', 'text-red-600', 'text-orange-500', 'text-green-500',
    'bg-white', 'bg-black', 'bg-blue-700', 'bg-red-600', 'bg-orange-500', 'bg-green-500'
  ],
  theme: {
    extend: {
    },
  },
  fontSize: {
    xs: '14px',
    sm: '16px',
    md: '18px',
    lg: '22px',
    xl: '28px',
    '2xl': '36px'
  },
  plugins: [],
}

export default config