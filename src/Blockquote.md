---
name: Blockquote
route: /components/blockquote
---

import {Playground, PropsTable} from 'docz'
import Blockquote from './Blockquote';

# Blockquote

<PropsTable of={Blockquote} />

## Basic

<Playground>
  <Blockquote>Hello world</Blockquote>
</Playground>

## Nested

<Playground>
  <Blockquote>
    Blockquotes
    <Blockquote>
      can be
      <Blockquote>
        nested.
      </Blockquote>
    </Blockquote>
  </Blockquote>
</Playground>
