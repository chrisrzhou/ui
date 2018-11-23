---
name: Logo
---

import {Logo} from './../src'
import {Playground, PropsTable} from 'docz'

# Logo

Site logo that links back to https://chrisrzhou.io.

<PropsTable of={Logo} />

## Basic

<Playground>
  <Logo />
</Playground>

## Customizable sizes

<Playground>
  <Logo size={20}/>
  <Logo size={40}/>
  <Logo size={100}/>
</Playground>

## Hide Text

<Playground>
  <Logo showText={false} />
</Playground>

## Disable Link

<Playground>
  <Logo disableLink />
</Playground>
