// https://kyleamathews.github.io/typography.js/

import Typography from 'typography';
import colors from './colors';

const typography = new Typography({
  title: 'chrisrzhou',
  baseFontSize: '16px',
  baseLineHeight: 1.5,
  scaleRatio: 2,
  headerFontFamily: ['Avenir Next', 'sans-serif'],
  bodyFontFamily: ['system-ui', 'sans-serif'],
  headerColor: colors.text,
  bodyColor: colors.text,
  overrideStyles: () => ({
    code: {
      background: colors.grayWhite,
      fontFamily: "'Source Code Pro', monospace",
      padding: '4px 8px',
    },
  }),
});

export default typography;
