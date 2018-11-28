---
name: ClipboardBox
route: /components/clipboard-box
---

import {Playground, PropsTable} from 'docz'
import {Box, Flex} from 'rebass';
import Heading from './Heading';
import ClipboardBox from './ClipboardBox';

# ClipboardBox

Simple component that wraps around any component and supports copying provided string values to the clipboard.

<PropsTable of={ClipboardBox} />

## Basic

`CliboardBox` works on any component.

<Playground>
  <Flex>
    <ClipboardBox value="hello box">
      <Box bg="#ddd" p={2}>
        Click to Copy!
      </Box>
    </ClipboardBox>
  </Flex>
  <Flex>
    <ClipboardBox value="hello heading">
      <Heading level={1}>
        Click to Copy!
      </Heading>
    </ClipboardBox>
  </Flex>
</Playground>
