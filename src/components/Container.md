---
route: /components/container
---

import {Playground, PropsTable} from 'docz';
import {Box} from 'rebass';
import Container from './Container';
import colors from './../colors';

# Container

A `Container` centers content horizontally with a provided max-width.

<PropsTable of={Container} />

## Basic

<Playground>
  <Container maxWidth={300}>
    <Box bg={colors.gray} p={3} />
  </Container>
</Playground>
