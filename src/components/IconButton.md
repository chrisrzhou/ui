---
route: /components/icon-button
---

import {Playground, PropsTable} from 'docz';
import {Box} from 'rebass';
import IconButton from './IconButton';
import colors from './../colors';

# IconButton

Similar to `Button` component but is rendered with an accompanying `Icon`.

<PropsTable of={IconButton} />

## Basic

<Playground>
  <p>
    <IconButton icon="triangle-right" />
  </p>
  <p>
    <IconButton icon="triangle-right" label="With Label" />
  </p>
</Playground>

## Active/Disabled

<Playground>
  <p>
    <IconButton active icon="triangle-right" />
  </p>
  <p>
    <IconButton disabled icon="triangle-right" />
  </p>
  <p>
    <IconButton active disabled icon="triangle-right" />
  </p>
</Playground>

## Custom Colors

Accepts a valid color from `colors` or custom color value.

<Playground>
  <p>
    <IconButton color="green7" icon="triangle-right" label="green7" />
  </p>
  <p>
    <IconButton color="red2" icon="triangle-right" label="red2" />
  </p>
  <p>
    <IconButton color="#abcdef" icon="triangle-right" label="#abcdef" />
  </p>
</Playground>

## onClick

<Playground>
  <IconButton
    icon="triangle-right"
    label="Click me!"
    onClick={() => alert('Ouch!')}
  />
</Playground>
