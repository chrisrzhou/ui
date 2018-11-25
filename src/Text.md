---
name: Text
---

import {Playground, PropsTable} from 'docz'
import {Box} from 'rebass';
import Text from './Text';

# Text

Basic text element

<PropsTable of={Text} />

## Basic

<Playground>
  <p><Text>Hello world</Text></p>
  <p><Text fontSize="10px">10px size</Text></p>
  <p><Text fontSize="3em">3em size</Text></p>
</Playground>

## Variants

<Playground>
  <p><Text variant="base">Base</Text></p>
  <p><Text variant="light">Light</Text></p>
  <p><Text variant="highlight">Highlight</Text></p>
  <p><Text variant="placeholder">Placeholder</Text></p>
  <Box bg="black"><p><Text variant="inverse">Inverse</Text></p></Box>
  <p><Text variant="code">Code</Text></p>
</Playground>
