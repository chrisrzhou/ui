---
route: /components/button
---

import {Playground, PropsTable} from 'docz';
import Button from './Button';

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

## onClick

<Playground>
  <Button label="Click me!" onClick={() => alert('Ouch!')}/>
</Playground>
