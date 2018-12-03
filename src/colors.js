// https://palx.jxnblk.com/5BA8F8

const palette = {
  base: '#5ba8f8',
  black: '#3b3f43',
  gray: [
    '#f8f9fa',
    '#ebedef',
    '#dde1e4',
    '#ced3d9',
    '#bdc4cc',
    '#abb3bd',
    '#97a0ab',
    '#818992',
    '#666c73',
    '#3b3f43',
  ],
  blue: [
    '#eaf4fe',
    '#d4e8fd',
    '#bbdbfc',
    '#a0cdfa',
    '#80bcf9',
    '#5ba9f8',
    '#5298e0',
    '#4885c4',
    '#3b6ea2',
    '#2a4f74',
  ],
  indigo: [
    '#ededfe',
    '#d9d9fd',
    '#c3c3fc',
    '#aaaafb',
    '#8989f9',
    '#5b5bf8',
    '#5252df',
    '#4747c3',
    '#3a3aa0',
    '#292971',
  ],
  violet: [
    '#f5ecfe',
    '#ead8fd',
    '#dfc2fc',
    '#d1a7fb',
    '#c087f9',
    '#a95bf8',
    '#9852df',
    '#8547c3',
    '#6e3ba1',
    '#4e2a72',
  ],
  fuschia: [
    '#feedfe',
    '#fdd9fd',
    '#fcc3fc',
    '#fba9fb',
    '#f989f9',
    '#f85bf8',
    '#e052e0',
    '#c448c4',
    '#a33ba3',
    '#752b75',
  ],
  pink: [
    '#feedf5',
    '#fdd9eb',
    '#fcc2df',
    '#fba8d2',
    '#f988c1',
    '#f85baa',
    '#e05299',
    '#c44886',
    '#a23b6f',
    '#742a50',
  ],
  red: [
    '#feeded',
    '#fdd9d9',
    '#fcc3c3',
    '#fba9a9',
    '#f98989',
    '#f85b5b',
    '#e05252',
    '#c44848',
    '#a23b3b',
    '#742a2a',
  ],
  orange: [
    '#fef3e9',
    '#fde7d2',
    '#fcdab9',
    '#facc9d',
    '#f9bc7e',
    '#f8aa5b',
    '#e09952',
    '#c48748',
    '#a3703c',
    '#75502b',
  ],
  yellow: [
    '#fefee9',
    '#fdfdd3',
    '#fcfcba',
    '#fafa9e',
    '#f9f97f',
    '#f8f85b',
    '#e0e052',
    '#c5c548',
    '#a4a43c',
    '#77772b',
  ],
  lime: [
    '#f3fee9',
    '#e7fdd2',
    '#dafcb9',
    '#ccfa9d',
    '#bcf97e',
    '#aaf85b',
    '#99e052',
    '#87c548',
    '#70a43c',
    '#51772b',
  ],
  green: [
    '#ecfeec',
    '#d8fdd8',
    '#c1fcc1',
    '#a6fba6',
    '#86f986',
    '#5bf85b',
    '#52e052',
    '#48c548',
    '#3ca43c',
    '#2b772b',
  ],
  teal: [
    '#ebfef5',
    '#d6fdea',
    '#bffcdd',
    '#a4fbcf',
    '#83f9bf',
    '#5bf8aa',
    '#52e099',
    '#48c587',
    '#3ca470',
    '#2b7751',
  ],
  cyan: [
    '#ecfefe',
    '#d7fdfd',
    '#bffcfc',
    '#a5fbfb',
    '#84f9f9',
    '#5bf8f8',
    '#52e0e0',
    '#48c5c5',
    '#3ca4a4',
    '#2b7777',
  ],
};

/* colorInput can be of the following valid formats:
 * - valid color key: 'base', 'gray', 'grayWhite'
 * - valid hex or rgba color: '#aabb11', 'rgba(0, 0, 0, 0.3)'
 * - valid palette color: 'gray1', 'green3', 'red9'
 */
export function getColorValue(colorInput) {
  const paletteColorIndex = colorInput.length - 1;
  const paletteColor = colors[colorInput.slice(0, paletteColorIndex)];
  if (colors[colorInput]) {
    return colors[colorInput];
  } else if (paletteColor) {
    return paletteColor[colorInput[paletteColorIndex]];
  } else {
    return colorInput;
  }
}

export function getTextVariantFromColor(color) {
  let r = 0;
  let g = 0;
  let b = 0;
  if (color.includes('rgba')) {
    const rgbaColor = color
      .replace('rgba(', '')
      .replace(')', '')
      .split(',');
    r = parseInt(rgbaColor[0], 10);
    g = parseInt(rgbaColor[1], 10);
    b = parseInt(rgbaColor[2], 10);
  } else if (color[0] === '#') {
    r = parseInt(color.substr(1, 2), 16);
    g = parseInt(color.substr(3, 2), 16);
    b = parseInt(color.substr(5, 2), 16);
  }
  return 0.299 * r + 0.587 * g + 0.114 * b > 186 ? 'base' : 'inverse';
}

const colors = {
  ...palette,
  text: palette.black,
  gray: palette.gray[6],
  grayLight: palette.gray[3],
  grayWhite: palette.gray[0],
  white: '#FFFFFF',
  blackAlpha: 'rgba(0, 0, 0, 0.8)',
  whiteAlpha: 'rgba(255, 255, 255, 0.8)',
};

export default colors;
