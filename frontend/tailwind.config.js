/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require('tw-animate-css')({
    classes: ['animate__animated', 'animate__fadeIn', 'animate__fadeOut'],
    settings: {
      animatedSpeed: 1000,
      heartBeatSpeed: 1000,
      hingeSpeed: 2000,
      bounceInSpeed: 750,
      bounceOutSpeed: 750,
      animationDelaySpeed: 1000,
      direction: 'reverse'
    },
    variants: ['responsive', 'hover', 'reduced-motion'],
  })],
}