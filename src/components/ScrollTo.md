---
route: /components/scroll-to
---

import {Playground, PropsTable} from 'docz';
import {Box} from 'rebass';
import Button from './Button';
import Icon from './Icon';
import Position from './Position';
import ScrollTo from './ScrollTo';

# ScrollTo

A wrapping component implementing `window.scrollTo`.

<PropsTable of={ScrollTo} />

## Basic

<Playground>
  <Position position="relative" style={{height: 1000}}>
    <Position y={0}>
      <ScrollTo y={1000}><Button label="scroll to bottom" /></ScrollTo>
    </Position>
    <Position bottom={0}>
      <ScrollTo><Icon icon="arrow-up" size={40} /></ScrollTo>
    </Position>
  </Position>
</Playground>
