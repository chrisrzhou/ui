---
route: /components/tag
---

import {Playground, PropsTable} from 'docz';
import List from './List';
import Tag from './Tag';

# Tag

<PropsTable of={Tag} />

## Basic

Tags accept any valid color key from `colors.js`.

<Playground>
  <List>
    <Tag label="tag1" />
    <Tag color="green0" label="green0" />
    <Tag color="green3" label="green3" />
    <Tag color="cyan7" label="cyan7" />
  </List>
</Playground>

## Custom Tag Colors and Auto Text Colors

Tags can also accept custom colors, and text colors will be auto adjusted to black/white.

<Playground>
  <List>
    <Tag color="#f50" label="#f50" />
    <Tag color="#2db7f5" label="#2db7f5" />
    <Tag color="#87d068" label="#87d068" />
    <Tag color="black" label="black" />
  </List>
</Playground>

## onClick and onRemove

<Playground>
  <List>
    <Tag label="Click me!" onClick={() => alert('Clicked me!')}/>
    <Tag label="Click the remove icon" onRemove={() => alert('removed me!')}/>
  </List>
</Playground>
