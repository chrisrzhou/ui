---
name: Logo
---

import {Playground, PropsTable} from 'docz'
import {Flex} from 'rebass'
import Logo from './Logo';

# Logo

Site logo that links back to https://chrisrzhou.io.

<PropsTable of={Logo} />

## Basic

<Playground>
  <Logo />
</Playground>

## Customizable sizes

<Playground>
  <Flex flexDirection="column">
    <Logo size={20}/>
    <Logo size={40}/>
    <Logo size={100}/>
  </Flex>
</Playground>

## Hide Text

<Playground>
  <Logo showText={false} />
</Playground>

## Disable Link

<Playground>
  <Logo disableLink />
</Playground>
