---
route: /components/logo
---

import {Playground, PropsTable} from 'docz';
import List from './List';
import Logo from './Logo';

# Logo

Site logo that links back to https://chrisrzhou.io.

<PropsTable of={Logo} />

## Basic

<Playground>
  <Logo />
</Playground>

## Custom Sizes

<Playground>
  <List direction="vertical">
    <Logo size="s"/>
    <Logo size="m"/>
    <Logo size="l"/>
  </List>
</Playground>

## Hide Text

<Playground>
  <Logo showText={false} />
</Playground>

## Disable Link

<Playground>
  <Logo disableLink />
</Playground>
