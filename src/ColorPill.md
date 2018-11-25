---
name: ColorPill
---

import {Playground, PropsTable} from 'docz'
import ColorPill from './ColorPill';
import colors from './colors';

# ColorPill

Renders a preview of the provided hex color, with clipboard copy support.

<PropsTable of={ColorPill} />

## Basic

Render the corresponding color as long as a valid color key from `colors.js` is provided.

<Playground>
  <ColorPill color="base" label="base" />
  <ColorPill color="text" label="text" />
  <ColorPill color="gray" label="gray" />
  <ColorPill color="grayWhite" label="disabled" />
  <ColorPill color="green3" label="green3" />
</Playground>

## Custom colors / width

Custom color hexes and widths can be provided.

<Playground>
  <ColorPill color="#bb2211" label="Custom red" />
  <ColorPill color={colors.base} label="custom width" width={300} />
</Playground>
