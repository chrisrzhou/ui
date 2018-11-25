---
name: Heading
---

import {Playground, PropsTable} from 'docz'
import Heading from './Heading';
import Link from './Link';

# Heading

Basic heading element

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

## With Link

<Playground>
  <Link href="https://github.com/chrisrzhou/ui">
    <Heading level={1}>Heading 1</Heading>
  </Link>
</Playground>
