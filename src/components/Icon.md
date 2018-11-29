---
name: Icon
route: /components/icon
---

import {Playground, PropsTable} from 'docz'
import Icon from './Icon';

# Icon

Renders an [octicon](https://github.com/primer/octicons) icon given a valid icon key.

<PropsTable of={Icon} />

## Basic

<Playground>
  <Icon icon="octoface" />
  <Icon icon="bug" />
  <Icon icon="credit-card" />
  <Icon active icon="credit-card" />
</Playground>

## Custom Sizes

<Playground>
  <Icon icon="octoface" />
  <Icon icon="octoface" size={30} />
  <Icon icon="octoface" size={50} />
</Playground>

## onClick

<Playground>
  <Icon icon="octoface" onClick={() => alert('clicked!')} />
</Playground>
