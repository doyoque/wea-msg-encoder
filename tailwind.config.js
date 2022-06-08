module.exports = {
  mode: 'jit',
  content: [
   `./components/**/*.{vue,js}`,
   `./layouts/**/*.vue`,
   `./pages/**/*.vue`,
   `./composables/**/*.{js,ts}`,
   `./plugins/**/*.{js,ts}`,
   `./App.{js,ts,vue}`,
   `./nuxt.config.{ts, js},`
  ],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
