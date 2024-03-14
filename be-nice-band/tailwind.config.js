const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./src/*/*.js"],
  theme: {
    container: {
      center: true,
      padding: '2rem',
    },
    extend: {
      display: ["group-hover"],
      backgroundImage: {
        'be-nice-1': "url('src/BackgroundImages/indexphoto.jpg')",
        'space-background': "url('../src/BackgroundImages/space.gif')",
        'footer-texture': "url('/img/footer-texture.png')",
    }},
  },
  plugins: [],
  safelist: [
    "songkick-widget"
  ]
});
