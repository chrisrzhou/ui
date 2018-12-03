---
route: /components/absolute
---

import {Playground, PropsTable} from 'docz';
import Position from './Position';
import colors from './../colors';

# Position

A `Box` with variable `position` attributes.

<PropsTable of={Position} />

## Basic

Use combination of `position="relative"` and `position="absolute"`.

<Playground>
  <Position
    bg={colors.grayWhite}
    position="relative"
    style={{height: 400, width: '100%'}}>
    <Position bg={colors.gray} p={2} right={0} top={0} />
    <Position bg={colors.gray} p={2} left={0} top={0} />
    <Position bg={colors.gray} p={2} left={0} bottom={0} />
    <Position bg={colors.gray} p={2} right={0} bottom={0} />
    <Position
      bg={colors.grayLight}
      bottom="25%"
      left="25%"
      p={2}
      right="25%"
      top="25%"
    />
    <Position bg={colors.gray} p={2} right="50%" top="50%" />
  </Position>
</Playground>

## With Content

<Playground>
  <Position
    bg={colors.grayWhite} style={{height: 400, width: '100%'}}
    position="relative">
    <Position bg={colors.grayLight} p={2} right={0} bottom={0}>
      <h1>Heading content</h1>
    </Position>
  </Position>
</Playground>
