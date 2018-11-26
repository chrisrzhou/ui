---
name: ColorBox
route: /components/color-box
---

import {Playground, PropsTable} from 'docz'
import ColorBox from './ColorBox';
import colors from './../colors';

# ColorBox

Renders a preview of the provided hex color, with clipboard copy support.

<PropsTable of={ColorBox} />

## Basic

Render the corresponding color as long as a valid color key from `colors.js` is provided.

<Playground>
  <ColorBox color="base" label="base" />
  <ColorBox color="text" label="text" />
  <ColorBox color="gray" label="gray" />
  <ColorBox color="grayWhite" label="disabled" />
  <ColorBox color="green3" label="green3" />
</Playground>

## Custom colors / width

Custom color hexes and widths can be provided.

<Playground>
  <ColorBox color="#bb2211" label="Custom red" />
  <ColorBox color={colors.base} label="custom width" width={300} />
</Playground>
