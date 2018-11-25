---
name: Divider
route: /components/divider
---

import {Playground, PropsTable} from 'docz'
import Divider from './Divider';

# Divider

Simple page divider

<PropsTable of={Divider} />

## Basic

<Playground>
  <p>Some content before the divider.  Notice the margins before and after the divider.</p>
  <Divider />
  <p>Some content after the divider</p>
  <Divider />
  <Divider />
</Playground>
