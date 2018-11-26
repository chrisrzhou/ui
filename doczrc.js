import colors from './src/colors';
import typography from './src/typography';

// merge typography.js styles with doczrc styles
const {body, code, h1, h2, h3, h4, h5, h6} = typography.toJSON();
const typographyStyles = {body, code, h1, h2, h3, h4, h5, h6};

export default {
  dest: 'dist/docs',
  files: '**/*.{md,mdx}',
  hashRouter: true,
  htmlContext: {
    favicon: 'public/favicon.ico',
  },
  ordering: 'ascending',
  public: 'docz/public',
  src: '',
  // https://www.docz.site/introduction/customizing#themes
  themeConfig: {
    colors: {
      primary: colors.base,
      text: colors.text,
      link: colors.base,
      footerText: colors.text,
      sidebarBg: colors.grayWite,
      sidebarText: colors.text,
      sidebarHighlight: null,
      sidebarBorder: colors.grayLight,
      background: colors.white,
      border: colors.grayLight,
      theadColor: colors.gray,
      theadBg: colors.grayWhite,
      tableColor: colors.text,
      codeBg: colors.grayWhite,
      codeColor: colors.gray,
      preBg: colors.grayWhite,
      blockquoteBg: colors.grayWhite,
      blockquoteBorder: colors.gray,
      blockquoteColor: colors.gray,
    },
    showPlaygroundEditor: true,
    styles: typographyStyles,
  },
  title: '@chrisrzhou/ui',
};
