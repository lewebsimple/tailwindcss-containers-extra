const plugin = require('tailwindcss/plugin');
const _ = require('lodash');
const strip = require('css-strip-units');

module.exports = plugin(function ({ addComponents, theme }) {
  const screens = theme('screens', {});
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
  addComponents([
    { '.container': { width: '100%' } },
    ...mediaQueries,
  ]);
});
