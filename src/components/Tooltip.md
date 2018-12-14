---
route: /components/tooltip
---

import {Playground, PropsTable} from 'docz';
import {Box as RebassBox} from 'rebass';
import Box from './../../docz/components/Box';
import Heading from './Heading';
import List from './List';
import Tooltip from './Tooltip';

# Tooltip

Tooltip is a simple and customized implementation of `Popover` that supports displaying simple tooltip text on hover or click.

<PropsTable of={Tooltip} />

## Basic

Can be wrapped over any component.

<Playground>
  <RebassBox m={6}>
    <List>
      <Tooltip content="I'm a tooltip!">
        <Box>Box</Box>
      </Tooltip>
      <Tooltip content="I'm a tooltip!">
        <Heading level={2}>Heading</Heading>
      </Tooltip>
    </List>
  </RebassBox>
</Playground>

## Positions

Accepts up to 4 different positions: `top`, `right`, `bottom`, `left`.

<Playground>
  <RebassBox m={6}>
    <List>
      <Tooltip content="Left" position="left">
        <Box>Left</Box>
      </Tooltip>
      <Tooltip content="Top" position="top">
        <Box>Top (default)</Box>
      </Tooltip>
      <Tooltip content="Bottom" position="bottom">
        <Box>Bottom</Box>
      </Tooltip>
      <Tooltip content="Right" position="right">
        <Box>Right</Box>
      </Tooltip>
    </List>
  </RebassBox>
</Playground>

## Click Trigger

Show/Hide tooltip on click action.

<Playground>
  <RebassBox m={6}>
    <Tooltip content="Click outside of me" trigger="click">
      <Box>Click me</Box>
    </Tooltip>
  </RebassBox>
</Playground>
