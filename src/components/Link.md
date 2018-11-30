---
route: /components/link
---

import {Playground, PropsTable} from 'docz'
import Link from './Link';

# Link

Basic styled link element.

<PropsTable of={Link} />

## Basic

<Playground>
  <Link href="https://github.com/chrisrzhou/ui">Link to repo</Link>
</Playground>

## Disable Text Decoration

<Playground>
  <Link
    disableTextDecoration
    href="https://github.com/chrisrzhou/ui">
    <h1>Heading Link</h1>
  </Link>
</Playground>

## Open in New Window

<Playground>
  <Link href="https://github.com/chrisrzhou/ui" target="_blank">
    Link to repo (new window)
  </Link>
</Playground>
