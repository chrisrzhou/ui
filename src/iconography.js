import octicons from 'octicons';

const icons = {};
for (const icon in octicons) {
  icons[icon] = octicons[icon].toSVG();
}

export default icons;
