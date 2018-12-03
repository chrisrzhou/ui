---
route: /components/spinner
---

import {Playground, PropsTable} from 'docz';
import Spinner from './Spinner';

# Spinner

Simple loading spinner with optional loading message.

<PropsTable of={Spinner} />

## Basic

<Playground>
  <Spinner />
</Playground>

## Spinner Message

<Playground>
  <Spinner message="Loading data..." />
</Playground>
