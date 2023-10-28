import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      black: '#333',
      grey: '#eee',
      lightGrey: '#f7f7f7',
      white: '#fff',
    },
    extend: {},
  },
  plugins: [],
}
export default config
