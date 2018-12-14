---
route: /components/list
---

import {Playground, PropsTable} from 'docz';
import Box from './../../docz/components/Box';
import ColorBox from './ColorBox';
import List from './List';

# List

`List` is an extended `Flex` component that renders children with consistent spacing.

<PropsTable of={List} />

## Basic

Any combination of components can be passed to `List`.

<Playground>
  <h2>List of boxes</h2>
  <List>
    <Box />
    <Box />
    <Box />
    <Box />
    <Box />
  </List>
  <h2>List of color pills</h2>
  <List>
    <ColorBox color="base" />
    <ColorBox color="black" />
    <ColorBox color="gray" />
    <ColorBox color="grayLight" />
    <ColorBox color="grayWhite" />
  </List>
  <h2>List of mixed components</h2>
  <List>
    <ColorBox color="base" />
    <Box />
    <ColorBox color="gray" />
    <Box />
    <div>Some Text</div>
    <ColorBox color="grayLight" />
  </List>
</Playground>

## alignItems

<Playground>
  <h2>flex-start (default)</h2>
  <List alignItems="flex-start">
    <Box p={4} />
    <Box p={3} />
    <Box p={2} />
  </List>
  <h2>center</h2>
  <List alignItems="center">
    <Box p={4} />
    <Box p={3} />
    <Box p={2} />
  </List>
  <h2>flex-end</h2>
  <List alignItems="flex-end">
    <Box p={4} />
    <Box p={3} />
    <Box p={2} />
  </List>
</Playground>

## Flex-wrap Support

<Playground>
  <List wrap>
    <Box />
    <Box />
    <Box />
    <Box />
    <Box />
    <Box />
    <Box />
    <Box />
    <Box />
    <Box />
    <Box />
  </List>
</Playground>

## Custom Spacing

<Playground>
  <List spacing={3}>
    <Box />
    <Box />
    <Box />
    <Box />
    <Box />
  </List>
</Playground>

## Vertical Alignment and Nestable

<Playground>
  <List>
    <List direction="vertical">
      <Box>Column 1</Box>
      <Box>Column 1</Box>
      <List>
        <Box>Row</Box>
        <Box>Row</Box>
        <Box>Row</Box>
        <Box>Row</Box>
        <Box>Row</Box>
      </List>
      <Box>Column 1</Box>
      <Box>Column 1</Box>
    </List>
    <List direction="vertical">
      <Box>Column 2</Box>
      <Box>Column 2</Box>
      <Box>Column 2</Box>
      <List>
        <Box>Row</Box>
        <Box>Row</Box>
      </List>
    </List>
  </List>
</Playground>
