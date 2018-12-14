---
route: /components/shimmer
---

import {Playground, PropsTable} from 'docz';
import {Box, Flex} from 'rebass';
import List from './List';
import Shimmer from './Shimmer';

# Shimmer

Renders a shimmering loading content.

<PropsTable of={Shimmer} />

## Basic

<Playground>
  <h3>Animated</h3>
  <Shimmer />
  <h3>Not animated</h3>
  <Shimmer animated={false} />
</Playground>

## Custom Row Sizes

<Playground>
  <Shimmer rows={[{height: 40}, {height: 20}, {height: 20}, {height: 100}]}/>
</Playground>

## Custom Avatar Sizes

<Playground>
  <List direction="vertical">
    <Shimmer avatar={{height: 40, width: 40}} />
    <Shimmer avatar={{height: 40, width: 40, rounded: true}} />
    <Shimmer avatar={{height: 100, width: 100, rounded: true}} />
  </List>
</Playground>

## Composable Shimmers

Compose specific shimmer layouts using `Flex` and `Box`

<Playground>
  <Flex alignItems="center">
    <Box>
      <Shimmer avatar={{height: 100, width: 100, rounded: true}} rows={[]} />
    </Box>
    <Box css={`flex-grow: 1`}>
      <Shimmer rows={[{height: 10}, {height: 10}, {height: 10}]} />
    </Box>
  </Flex>
  <Shimmer rows={[{height: 50}]} />
  <Shimmer rows={[{height: 50}]} />
  <Shimmer rows={[{height: 50}]} />
  <Flex alignItems="center">
    <Box>
      <Shimmer avatar={{height: 50, width: 50}} rows={[]} />
    </Box>
    <Box css={`flex-grow: 1`}>
      <Shimmer rows={[{height: 10}, {height: 10}, {height: 10}]} />
    </Box>
  </Flex>
</Playground>
