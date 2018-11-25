---
name: List
---

import {Playground, PropsTable} from 'docz'
import {Box} from 'rebass';
import ColorPill from './ColorPill';
import List from './List';

# List

Render a list of components with consistent spacing

<PropsTable of={List} />

## Basic

Any combination of components can be passed to `List`

<Playground>
  <h2>List of boxes</h2>
  <List>
    <Box bg="#ddd" p={3} width="100px"/>
    <Box bg="#ddd" p={3} width="100px"/>
    <Box bg="#ddd" p={3} width="100px"/>
    <Box bg="#ddd" p={3} width="100px"/>
    <Box bg="#ddd" p={3} width="100px"/>
  </List>
  <h2>List of color pills</h2>
  <List>
    <ColorPill color="base" label="Color Pill"/>
    <ColorPill color="black" label="Color Pill"/>
    <ColorPill color="gray" label="Color Pill"/>
    <ColorPill color="grayLight" label="Color Pill"/>
    <ColorPill color="grayWhite" label="Color Pill"/>
  </List>
  <h2>List of mixed components</h2>
  <List>
    <ColorPill color="base" label="Color Pill"/>
    <Box bg="#ddd" p={3} width="100px"/>
    <ColorPill color="gray" label="Color Pill"/>
    <Box bg="#ddd" p={3} width="100px"/>
    <div>Some Text</div>
    <ColorPill color="grayLight" label="Color Pill"/>
  </List>
</Playground>

## Flex-wrap Support

<Playground>
  <List>
    <Box bg="#ddd" p={3} width="200px"/>
    <Box bg="#ddd" p={3} width="200px"/>
    <Box bg="#ddd" p={3} width="200px"/>
    <Box bg="#ddd" p={3} width="200px"/>
    <Box bg="#ddd" p={3} width="200px"/>
  </List>
</Playground>

## Custom Spacing

<Playground>
  <List spacing={3}>
    <Box bg="#ddd" p={3} width="100px"/>
    <Box bg="#ddd" p={3} width="100px"/>
    <Box bg="#ddd" p={3} width="100px"/>
    <Box bg="#ddd" p={3} width="100px"/>
    <Box bg="#ddd" p={3} width="100px"/>
  </List>
</Playground>
