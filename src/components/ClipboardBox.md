---
route: /components/clipboard-box
---

import {Playground, PropsTable} from 'docz';
import Box from './../../docz/components/Box';
import Heading from './Heading';
import ClipboardBox from './ClipboardBox';
import List from './List';

# ClipboardBox

Simple component that wraps around any component and supports copying provided string values to the clipboard.

<PropsTable of={ClipboardBox} />

## Basic

`ClipboardBox` works on any component.

<Playground>
  <List direction="vertical">
    <ClipboardBox value="hello box">
      <Box>
        Click to Copy!
      </Box>
    </ClipboardBox>
    <ClipboardBox value="hello heading">
      <Heading level={1}>
        Click to Copy!
      </Heading>
    </ClipboardBox>
  </List>
</Playground>

## Custom Copy Message

<Playground>
    <ClipboardBox message="Don't ever try to click me" value="How dare you!">
      <Box bg="#ddd" p={2}>
        Hover to read copy message
      </Box>
    </ClipboardBox>
</Playground>
