# Containers Extra Plugin for Tailwind CSS

## Installation

```bash

yarn add tailwindcss-containers-extra
```

## Usage

This plugin generates container classes for half-width containers.

```js
// tailwind.config.js
module.exports = {
  halfContainer: {
    screens: {
      lg: '1024px',
      xl: '1280px',
    }
  },
  plugins: [
    require('tailwindcss-containers-extra'),
  ],
};
```

The above configuration would create the following classes:

```css
@media (min-width: 1024px){
  .half-container{
    max-width: 512px;
  }
}
@media (min-width: 1280px){
  .half-container{
    max-width: 640px;
  }
}
/* etc. */
```
