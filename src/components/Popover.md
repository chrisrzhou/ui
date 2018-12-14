---
route: /components/popover
---

import {Playground, PropsTable} from 'docz';
import {Box as RebassBox} from 'rebass';
import Box from './../../docz/components/Box';
import Button from './Button';
import Heading from './Heading';
import List from './List';
import Popover from './Popover';

# Popover

A wrapping component to implement a popover container.

<PropsTable of={Popover} />

## Basic

Can be wrapped over any component.

<Playground>
  <RebassBox m={6}>
    <List>
      <Popover content="Text tooltip">
        <Box>Box with text tooltip</Box>
      </Popover>
      <Popover
        content={
          <div>
            You can render <b>any</b> content! Including this button:
            <Button label="Click me" onClick={() => alert('hello!')} />
          </div>
        }>
        <Heading level={2}>Heading with custom tooltip content</Heading>
      </Popover>
    </List>
  </RebassBox>
</Playground>

## Positions

Accepts up to 4 different positions: `top`, `right`, `bottom`, `left`.

<Playground>
  <RebassBox m={6}>
    <List>
      <Popover content="Left" position="left">
        <Box>Left</Box>
      </Popover>
      <Popover content="Top" position="top">
        <Box>Top (default)</Box>
      </Popover>
      <Popover content="Bottom" position="bottom">
        <Box>Bottom</Box>
      </Popover>
      <Popover content="Right" position="right">
        <Box>Right</Box>
      </Popover>
    </List>
  </RebassBox>
</Playground>

## Click Trigger

Show/Hide popover on click action.

<Playground>
  <RebassBox m={6}>
    <Popover content="Click outside of me" trigger="click">
      <Box>Click me</Box>
    </Popover>
  </RebassBox>
</Playground>
