---
route: /components/container
---

import {Playground, PropsTable} from 'docz';
import Box from './../../docz/components/Box';
import Container from './Container';

# Container

A `Container` centers content horizontally with a provided max-width.

<PropsTable of={Container} />

## Basic

<Playground>
  <Container maxWidth={300}>
    <Box />
  </Container>
</Playground>
