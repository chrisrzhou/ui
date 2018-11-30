---
route: /components/divider
---

import {Playground, PropsTable} from 'docz'
import Divider from './Divider';

# Divider

Simple page divider.

<PropsTable of={Divider} />

## Basic

<Playground>
  <p>(Some content before the divider)</p>
  <Divider />
  <p>(Some content after the first divider with multiple dividers below)</p>
  <Divider />
  <Divider />
  <Divider />
</Playground>
