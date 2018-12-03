---
route: /components/blockquote
---

import {Playground, PropsTable} from 'docz';
import Blockquote from './Blockquote';

# Blockquote

Use the `Blockquote` component to highlight quoted text.

<PropsTable of={Blockquote} />

## Basic

<Playground>
  <Blockquote>
    Formatting is <b>supported</b> (<i>including <code>code</code></i>).
  </Blockquote>
</Playground>

## Nested Blockquotes

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
