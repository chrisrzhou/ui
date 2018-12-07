---
route: /components/tooltip
---

import {Playground, PropsTable} from 'docz';
import {Box} from 'rebass';
import Heading from './Heading';
import List from './List';
import Tooltip from './Tooltip';
import colors from './../colors';

# Tooltip

Wrapper component showing a hover tooltip.

<PropsTable of={Tooltip} />

## Basic

Can be wrapped over any component.

<Playground>
  <List spacing={2}>
    <Tooltip content="I'm a tooltip!">
      <Box bg={colors.gray} p={3}>Hover over this box</Box>
    </Tooltip>
    <Tooltip content="I'm a tooltip!">
      <Heading level={3}>Hover over this heading</Heading>
    </Tooltip>
  </List>
</Playground>

## Positions

Accepts up to 4 different positions: `top`, `right`, `bottom`, `left`.

<Playground>
  <List spacing={3}>
    <Tooltip content="I'm a tooltip!" position="top">
      <Box bg={colors.gray} p={3}>Top</Box>
    </Tooltip>
    <Tooltip content="I'm a tooltip!" position="right">
      <Box bg={colors.gray} p={3}>Right</Box>
    </Tooltip>
    <Tooltip content="I'm a tooltip!" position="bottom">
      <Box bg={colors.gray} p={3}>Bottom</Box>
    </Tooltip>
    <Tooltip content="I'm a tooltip!" position="left">
      <Box bg={colors.gray} p={3}>Left</Box>
    </Tooltip>
  </List>
</Playground>

## Click Trigger and Max Tooltip Width

<Playground>
  <List spacing={3}>
    <Tooltip content="I'm a tooltip!" trigger="click">
      <Box bg={colors.gray} p={3}>Tooltip trigger on Click</Box>
    </Tooltip>
    <Tooltip
      content="I'm a very long tooltip but with a small max container width!"
      maxWidth={50}
      position="right">
      <Box bg={colors.gray} p={3}>Max Tooltip Width = 50px</Box>
    </Tooltip>
  </List>
</Playground>
