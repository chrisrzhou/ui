---
name: Colors
---

import {Playground, PropsTable} from 'docz'
import {Box, Flex} from 'rebass';
import ColorPill from './ColorPill';
import colors from './colors';

# Colors

Color generation and usage.

## Core Colors

Color palette generation is created using `palx` ([source](https://github.com/jxnblk/palx)) using the following base color:
<ColorPill color={colors.base} label="base" />

This results in the following core colors used across the site:

<Playground>
  <Flex>
    {Object.keys(colors).map(colorKey => {
      if (typeof colors[colorKey] === 'string') {
        return (
          <ColorPill
            key={colorKey}
            color={colors[colorKey]}
            label={colorKey}
          />
        );
      }
    })}
  </Flex>
</Playground>

## Complete Color Palette

In general, the core colors above should be used. The complete color palette generated from `palx` could be used by accessing the array index of the respective color.

<Playground>
  <Flex flexDirection="column">
    {Object.keys(colors).map(colorKey => {
      if (Array.isArray(colors[colorKey])) {
        return (
          <Flex key={colorKey} alignItems="center">
            <Box width="100px">{colorKey}</Box>
            {colors[colorKey].map((color, i) => {
              return (
                <ColorPill
                  key={color}
                  color={color}
                  label={colorKey + i}
                />
              );
            })}
          </Flex>
        );
      }
    })}
  </Flex>
</Playground>
