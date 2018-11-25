---
name: Button
---

import {Playground, PropsTable} from 'docz'
import Button from './Button';

# Button

Various button variants and usage

<PropsTable of={Button} />

## Basic

<Playground>
  <Button label="Base Button" />
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
