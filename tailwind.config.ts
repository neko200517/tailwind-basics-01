import type { Config } from 'tailwindcss';
import plugin from 'tailwindcss/plugin';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        corporate2: "url('../../public/corporate2/mainvisual.jpg')",
        'main-pc': "url('../../public/mainvisual.jpg')",
        'main-sp': "url('../../public/mainvisual.jpg')",
        'portfolio1-pc': "url('../../public/portfolio1/mainvisual-pc.jpg')",
        'portfolio1-sp': "url('../../public/portfolio1/mainvisual-sp.jpg')",
        'store3-pc': "url('../../public/store3/mainvisual-pc.jpg')",
        'store3-sp': "url('../../public/store3/mainvisual-sp.jpg')",
      },
      fontFamily: {
        recipe: [
          'Helvetica Neue',
          'Arial',
          'Hiragino Sans',
          'Meiryo',
          'sans-serif',
        ],
        store1: [
          'Arial',
          'Hiragino Sans',
          'Hiragino Kaku Gothic ProN',
          'Meiryo',
          'sans-serif',
        ],
        brand: ['Crimson Text, serif'],
        ec: ['Raleway, sans-serif'],
        corporate2: ['Raleway, sans-serif'],
        store3: ['Noto Serif JP, serif'],
      },
      colors: {},
      screens: {
        md1: '835px',
        md2: '896px',
        md3: '901px',
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      const newUtilities = {
        '.horizontal-tb': {
          writingMode: 'horizontal-tb',
        },
        '.vertical-rl': {
          writingMode: 'vertical-rl',
        },
        '.vertical-lr': {
          writingMode: 'vertical-lr',
        },
      };
      addUtilities(newUtilities);
    }),
  ],
};
export default config;
