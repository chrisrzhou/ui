---
route: /components/icon
---

import {Playground, PropsTable} from 'docz';
import Icon from './Icon';
import List from './List';

# Icon

Renders an [octicon](https://github.com/primer/octicons) icon given a valid icon key.

<PropsTable of={Icon} />

## Basic

<Playground>
  <List>
    <Icon icon="octoface" />
    <Icon icon="bug" />
    <Icon icon="credit-card" />
    <Icon active icon="credit-card" />
  </List>
</Playground>

## Custom Colors and Sizes

Accepts any valid color from `colors.js` and numeric pixel sizes.

<Playground>
  <List>
    <Icon icon="octoface" size="small" />
    <Icon icon="octoface" size="medium" />
    <Icon icon="octoface" size="large" />
    <Icon icon="octoface" color="positive" />
    <Icon icon="octoface" color="negative" />
    <Icon icon="octoface" color="cyan7" />
    <Icon icon="octoface" color="green8" />
  </List>
</Playground>

## onClick

<Playground>
  <Icon icon="octoface" onClick={() => alert('clicked!')} />
</Playground>
