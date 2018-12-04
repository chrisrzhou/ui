---
route: /components/text
---

import {Playground, PropsTable} from 'docz';
import {Box, Flex} from 'rebass';
import Text from './Text';
import colors from './../colors';

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
    <Text>Default size</Text>
    <Text fontSize="small">Small size</Text>
    <Text fontSize="medium">Medium size</Text>
    <Text fontSize="large">large size</Text>
  </Flex>
</Playground>

## Formatting

<Playground>
  <Flex flexDirection="column">
    <Text centered>Center-aligned text</Text>
    <Text bold>Bold text</Text>
  </Flex>
</Playground>

## Truncate and Tooltip

<Playground>
  <Flex flexDirection="column">
    <Box bg={colors.grayLight} mb={2} width={100}>
      <Text truncate>Truncated text with tooltip</Text>
    </Box>
    <Box bg={colors.grayLight} width={100}>
      <Text>Non-truncated text</Text>
    </Box>
  </Flex>
</Playground>
