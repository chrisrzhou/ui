---
route: /components/image
---

import {Playground, PropsTable} from 'docz'
import Image from './Image';

# Image

Basic image component that takes up the width of the container by default.

<PropsTable of={Image} />

## Basic

<Playground>
  <Image
    src="https://upload.wikimedia.org/wikipedia/commons/9/97/The_Earth_seen_from_Apollo_17.jpg"
  />
</Playground>

## Custom Size

<Playground>
  <p>
    <Image
      src="https://upload.wikimedia.org/wikipedia/commons/9/97/The_Earth_seen_from_Apollo_17.jpg"
      width="100px"
    />
  </p>
  <p>
    <Image
      src="https://upload.wikimedia.org/wikipedia/commons/9/97/The_Earth_seen_from_Apollo_17.jpg"
      height="100px"
      width="200px"
    />
  </p>
  <p>
    <Image
      src="https://upload.wikimedia.org/wikipedia/commons/9/97/The_Earth_seen_from_Apollo_17.jpg"
      width={1/2}
    />
  </p>
</Playground>

## Rounded Image

<Playground>
  <Image
    rounded
    src="https://upload.wikimedia.org/wikipedia/commons/9/97/The_Earth_seen_from_Apollo_17.jpg"
  />
</Playground>
