---
route: /components/background-image
---

import {Playground, PropsTable} from 'docz';
import {Box, Flex} from 'rebass';
import BackgroundImage from './BackgroundImage';
import Heading from './Heading';

# BackgroundImage

Display a backend image that takes up the width of the parent container.

<PropsTable of={BackgroundImage} />

## Basic

Renders a basic background image with content.

<Playground>
  <BackgroundImage
    height="200px"
    image="https://upload.wikimedia.org/wikipedia/commons/9/97/The_Earth_seen_from_Apollo_17.jpg">
    <Flex alignItems="center" css={`height: 100%`} justifyContent="center">
      <Heading level={1} variant="inverse">Earth</Heading>
    </Flex>
  </BackgroundImage>
</Playground>

## Border Radius

You can customize the border radius

<Playground>
  <BackgroundImage
    borderRadius="24px"
    height="200px"
    image="https://upload.wikimedia.org/wikipedia/commons/9/97/The_Earth_seen_from_Apollo_17.jpg"
  />
</Playground>

## Background Color

You can also pass a valid background color in `colors`.

<Playground>
  <Box mb={2}>
    <BackgroundImage
      backgroundColor="base"
      height="100px"
    />
  </Box>
  <Box mb={2}>
    <BackgroundImage
      backgroundColor="red2"
      height="100px"
    />
  </Box>
  <Box mb={2}>
    <BackgroundImage
      backgroundColor="#abcdef"
      height="100px"
    />
  </Box>
</Playground>
