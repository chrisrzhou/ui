---
name: Link
---

import {Playground, PropsTable} from 'docz'
import {Flex} from 'rebass';
import {Link} from './../src';

# Link

Basic link element

<PropsTable of={Link} />

## Basic

<Playground>
  <Flex flexDirection="column">
    <Link href="https://github.com/chrisrzhou/ui">Link to repo</Link>
    <Link href="https://github.com/chrisrzhou/ui" target="_blank">
      Link to repo (new window)
    </Link>
  </Flex>
</Playground>
