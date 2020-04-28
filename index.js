const plugin = require('tailwindcss/plugin');
const _ = require('lodash');
const strip = require('css-strip-units');

module.exports = plugin(function ({ addUtilities, theme }) {
  const screens = theme('halfContainer.screens', theme('screens'));
  const mediaQueries = _.map(screens, width => {
    const unit = strip(width);
    return {
      [`@media (min-width: ${width})`]: {
        '.half-container': {
          'max-width': `${parseInt(width, 10) / 2}${unit}`,
        },
      },
    };
  });
  addUtilities([
    ...mediaQueries,
  ]);
}, {
  theme: {
    halfContainer: theme => ({
      screens: theme.screens
    }),
  },
});
