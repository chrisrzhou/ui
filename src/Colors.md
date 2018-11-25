---
name: Color
order: -3
route: /colors
---

import {Playground, PropsTable} from 'docz'
import {Box, Flex} from 'rebass';
import ColorBox from './ColorBox';
import colors from './colors';

# Color

Color generation and usage.

## Core Colors

Color palette generation is created using `palx` ([source](https://github.com/jxnblk/palx)) using the following base color:
<ColorBox color={colors.base} label="base" />

This results in the following core colors used across the site:

<Playground>
  <Flex>
    {Object.keys(colors).map(colorKey => {
      if (typeof colors[colorKey] === 'string') {
        return (
          <ColorBox
            key={colorKey}
            color={colorKey}
            label={colorKey}
          />
        );
      }
    })}
  </Flex>
</Playground>

## Color Palette

It is adviced to only use the core colors defined above. The color palette generated from `palx` could be used in related data visualization projects.

Each color in the palette can be intuitively accessed by the array index of the corresponding color e.g. `colors.green[3]`

<Playground>
  <Box>
    {Object.keys(colors).map(colorKey => {
      if (Array.isArray(colors[colorKey])) {
        return (
          <Flex key={colorKey}>
            {colors[colorKey].map((color, i) => {
              const colorCode = colorKey + i;
              return (
                <ColorBox
                  key={colorCode}
                  color={colorCode}
                  label={colorCode}
                />
              );
            })}
          </Flex>
        );
      }
    })}
  </Box>
</Playground>
