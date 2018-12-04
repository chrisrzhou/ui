---
route: /components/card
---

import {Playground, PropsTable} from 'docz';
import {Flex} from 'rebass';
import Button from './Button';
import Card from './Card';
import Image from './Image';
import Heading from './Heading';

# Card

A card component renders a box with box-shadows that houses an optional title and children elements.

<PropsTable of={Card} />

## Basic

<Playground>
  <Card mb={4}>
    Card without a title
  </Card>
  <Card mb={4} title="Card with title only" />
  <Card mb={4} title="Card with title">
    and body
  </Card>
</Playground>

## Advanced Content

<Playground>
  <Card title="Card with title">
    <Flex alignItems="center" flexDirection="column">
      <Heading level={3}>Earth</Heading>
      <Image
        src="https://upload.wikimedia.org/wikipedia/commons/9/97/The_Earth_seen_from_Apollo_17.jpg"
        width={200}
      />
      <Flex mt={3} justifyContent="space-between" width="100%">
        <Button label="Back" />
        <Button active label="Save" />
      </Flex>
    </Flex>
  </Card>
</Playground>
