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
    },
  },
  plugins: [],
});
