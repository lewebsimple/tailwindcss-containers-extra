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
  plugins: [
    require('tailwindcss-containers-extra'),
  ],
};
```

The above configuration would create the following classes for every configured screen size:

```css
.half-container {
  max-width: 50%;
}
@media (min-width: 640px) {
  .half-container {
    max-width: 320px;
  }
}
/* etc. */
```
