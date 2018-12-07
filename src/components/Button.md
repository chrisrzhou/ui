---
route: /components/button
---

import {Playground, PropsTable} from 'docz';
import {Box} from 'rebass';
import Button from './Button';
import colors from './../colors';

# Button

Basic button element with support for active and disabled states.

<PropsTable of={Button} />

## Basic

<Playground>
  <Button label="Basic Button" />
</Playground>

## Active/Disabled

<Playground>
  <p>
    <Button active label="Active Button" />
  </p>
  <p>
    <Button disabled label="Disabled Button" />
  </p>
  <p>
    <Button active disabled label="Disabled Active Button" />
  </p>
</Playground>

## Custom Children

<Playground>
  <Button active label="Active Button">
    <Box bg={colors.gray} ml={2} p={3}>I am a box</Box>
  </Button>
</Playground>

## onClick

<Playground>
  <Button label="Click me!" onClick={() => alert('Ouch!')}/>
</Playground>
