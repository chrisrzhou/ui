---
route: /colors
---

import {Playground} from 'docz';
import {Box} from 'rebass';
import ColorBox from './components/ColorBox';
import Icon from './components/Icon';
import List from './components/List';
import Tag from './components/Tag';
import colors from './colors';

# Colors

Color generation and usage.

## Core Colors

Color palette generation is created using `palx` ([link](https://github.com/jxnblk/palx)) using the following base color:
<ColorBox color={colors.base} label="base" />

This results in the following generated core colors:

<Playground>
  <List wrap>
    {Object.keys(colors)
      .filter(colorKey => typeof colors[colorKey] === 'string')
      .map(colorKey => {
        return (
          <ColorBox
            key={colorKey}
            color={colorKey}
            label={colorKey}
          />
        );
      })}
  </List>
</Playground>

## Color Palette

In general, the core colors defined above should be used in UIs. However, the comprehensive color palette generated from `palx` could be used in related data visualization projects.

Each color in the palette can be accessed by the array index of the corresponding color in the palette e.g. `colors.palette.green[3]`

<Playground>
  <Box>
    {Object.keys(colors.palette).map(colorKey => {
      return (
        <List key={colorKey} spacing={0}>
          {colors.palette[colorKey].map((color, i) => {
            const colorCode = colorKey + i;
            return (
              <ColorBox
                key={colorCode}
                color={colorCode}
                label={colorCode}
              />
            );
          })}
        </List>
      );
    })}
  </Box>
</Playground>

## Components Supporting Valid Color Keys

A valid color key is a valid object key in `colors.js`. Palette color keys can be conveniently expressed as the concatenation of the palette color key and shade. For example, the corresponding color key for the palette color `colors.palette.green[3]` is written as `green3`. If a non-valid color key is passed, we simply render the color input provided.

The following components support the use of these color keys:

<Playground>
  <h2>ColorBox</h2>
  <List>
    <ColorBox color="base" label="base" />
    <ColorBox color="green3" label="green3" />
    <ColorBox color="red2" label="red2" />
    <ColorBox color="#abcdef" label="#abcdef (custom)" />
  </List>
  <h2>Icon</h2>
  <List>
    <Icon color="base" icon="octoface" />
    <Icon color="green3" icon="octoface" />
    <Icon color="red2" icon="octoface" />
    <Icon color="#abcdef" icon="octoface" />
  </List>
  <h2>Tag</h2>
  <List>
    <Tag color="base" label="base" />
    <Tag color="green3" label="green3" />
    <Tag color="red2" label="red2" />
    <Tag color="#abcdef" label="#abcdef (custom)" />
  </List>
</Playground>
