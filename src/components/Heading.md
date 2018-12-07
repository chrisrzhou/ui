---
route: /components/heading
---

import {Playground, PropsTable} from 'docz';
import {Box} from 'rebass';
import Heading from './Heading';
import Link from './Link';

# Heading

Supports six heading elements `h1`, `h2`, `h3`, `h4`, `h5`, `h6`.

<PropsTable of={Heading} />

## Basic

<Playground>
  <Heading level={1}>Heading 1</Heading>
  <Heading level={2}>Heading 2</Heading>
  <Heading level={3}>Heading 3</Heading>
  <Heading level={4}>Heading 4</Heading>
  <Heading level={5}>Heading 5</Heading>
  <Heading level={6}>Heading 6</Heading>
</Playground>

## Variants

<Playground>
  <Heading level={1} variant="base">Base</Heading>
  <Heading level={1} variant="active">Active</Heading>
  <Heading level={1} variant="light">Light</Heading>
  <Heading level={1} variant="negative">Negative</Heading>
  <Heading level={1} variant="positive">Positive</Heading>
  <Heading level={1} variant="placeholder">Placeholder</Heading>
  <Box bg="black"><Heading level={1} variant="inverse">Inverse</Heading></Box>
  <Heading level={1} variant="code">Code</Heading>
</Playground>
