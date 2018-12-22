---
route: /components/scroll-to
---

import {Playground, PropsTable} from 'docz';
import Button from './Button';
import IconButton from './IconButton';
import Position from './Position';
import ScrollTo from './ScrollTo';

# ScrollTo

A wrapping component implementing `window.scrollTo`.

<PropsTable of={ScrollTo} />

## Basic

<Playground>
  <Position position="relative" style={{height: 1000}}>
    <Position position="absolute" y={0}>
      <ScrollTo y={1000}><Button label="scroll to bottom" /></ScrollTo>
    </Position>
    <Position position="absolute" bottom={0}>
      <ScrollTo><IconButton icon="arrow-up" /></ScrollTo>
    </Position>
  </Position>
</Playground>
