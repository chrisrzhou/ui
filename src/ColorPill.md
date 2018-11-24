---
name: ColorPill
---

import {Playground, PropsTable} from 'docz'
import ColorPill from './ColorPill';
import colors from './colors';

# ColorPill

Renders a summary of the provided hex color.

<PropsTable of={ColorPill} />

## Basic

<Playground>
  <ColorPill color={colors.base} label="base" />
  <ColorPill color={colors.primaryText} label="primaryText" />
  <ColorPill color={colors.secondaryText} label="secondaryText" />
  <ColorPill color={colors.disabled} label="disabled" />
  <ColorPill color={colors.green[3]} label="green3" />
  <ColorPill color="#bb2211" label="Custom red" />
</Playground>
