---
route: /components/text
---

import {Playground, PropsTable} from 'docz';
import {Box} from 'rebass';
import List from './List';
import Text from './Text';

# Text

Use the `Text` component to control color, font-size, weight, and alignment.

<PropsTable of={Text} />

## Basic

<Playground>
  <Text>Hello world</Text>
</Playground>

## Variants

<Playground>
  <List direction="vertical">
    <Text variant="base">Base</Text>
    <Text variant="active">Active</Text>
    <Text variant="light">Light</Text>
    <Text variant="negative">Negative</Text>
    <Text variant="positive">Positive</Text>
    <Text variant="placeholder">Placeholder</Text>
    <Box bg="black"><Text variant="inverse">Inverse</Text></Box>
    <Text variant="code">Code</Text>
  </List>
</Playground>

## Custom Font Size

<Playground>
  <List direction="vertical">
    <Text>Default size</Text>
    <Text fontSize="small">Small size</Text>
    <Text fontSize="medium">Medium size</Text>
    <Text fontSize="large">large size</Text>
  </List>
</Playground>

## Formatting

<Playground>
  <List direction="vertical">
    <Box width="100%"><Text centered>Center-aligned text</Text></Box>
    <Text bold>Bold text</Text>
  </List>
</Playground>

## Truncate and Tooltip

Auto-truncate and display tooltip if `children` content is of type `string`.

<Playground>
  <List direction="vertical">
    <Box style={{border: '1px solid black'}} width="100px">
      <Text truncate>Truncated text with tooltip</Text>
    </Box>
    <Box style={{border: '1px solid black'}} width="100px">
      <Text>Non-truncated text</Text>
    </Box>
  </List>
</Playground>
