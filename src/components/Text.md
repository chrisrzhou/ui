---
route: /components/text
---

import {Playground, PropsTable} from 'docz';
import {Flex} from 'rebass';
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
  <Flex flexDirection="column">
    <Text variant="base">Base</Text>
    <Text variant="active">Active</Text>
    <Text variant="light">Light</Text>
    <Text variant="placeholder">Placeholder</Text>
    <Flex bg="black"><Text variant="inverse">Inverse</Text></Flex>
    <Text variant="code">Code</Text>
  </Flex>
</Playground>

## Custom Font Size

<Playground>
  <Flex flexDirection="column">
    <Text fontSize="3em">3em size</Text>
    <Text fontSize="10px">10px size</Text>
  </Flex>
</Playground>

## Formatting

<Playground>
  <Flex flexDirection="column">
    <Text centered>Center-aligned text</Text>
    <Text bold>Bold text</Text>
  </Flex>
</Playground>
