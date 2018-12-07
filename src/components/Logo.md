---
route: /components/logo
---

import {Playground, PropsTable} from 'docz';
import {Flex} from 'rebass'
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
  <Flex>
    <Logo size="small"/>
  </Flex>
  <Flex>
    <Logo size="medium"/>
  </Flex>
  <Flex>
    <Logo size="large"/>
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
