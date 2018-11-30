---
route: /components/spinner
---

import {Playground, PropsTable} from 'docz'
import Spinner from './Spinner';

# Spinner

<PropsTable of={Spinner} />

## Basic

<Playground>
  <Spinner />
</Playground>

## No animation

<Playground>
  <Spinner animated={false} />
</Playground>

## Spinner Message

<Playground>
  <Spinner message="Loading data with animation..." />
  <Spinner animated={false} message="Loading data without animation..." />
</Playground>
