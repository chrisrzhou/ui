---
name: ClipboardBox
---

import {Playground, PropsTable} from 'docz'
import {Box, Flex} from 'rebass';
import Heading from './Heading';
import ClipboardBox from './ClipboardBox';

# ClipboardBox

Simple wrapper component that supports copying provided string values to the clipboard.

<PropsTable of={ClipboardBox} />

## Basic

<Playground>
  <Flex>
    <ClipboardBox value="hello box">
      <Box bg="#ddd" p={2} width="100px">
        Box
      </Box>
    </ClipboardBox>
  </Flex>
  <Flex>
    <ClipboardBox value="hello heading">
      <Heading level={1}>
        Heading
      </Heading>
    </ClipboardBox>
  </Flex>
</Playground>
