import { defineConfig } from 'windicss/helpers';

export default defineConfig({
  darkMode: 'class',
  safelist: 'transition',
  theme: { extend: { fontFamily: { serif: ['simsun'] } } },
  plugins: [require('windicss/plugin/typography')],
});
