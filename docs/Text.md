---
name: Text
---

import {Playground, PropsTable} from 'docz'
import {Text} from './../src';

# Text

Basic text element

<PropsTable of={Text} />

## Basic

<Playground>
  <Text>Hello world</Text>
</Playground>

## Variants

<Playground>
  <Text variant="primary">Primary</Text>
  <Text variant="secondary">Secondary</Text>
  <Text variant="highlight">Highlight</Text>
  <Text variant="disabled">Disabled</Text>
</Playground>
