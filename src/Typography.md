---
route: /typography
---

import {Playground} from 'docz';
import {Flex} from 'rebass';
import CodeBlock from './components/CodeBlock';
import Heading from './components/Heading';
import Text from './components/Text';
import typography from './typography';

# Typography

Typography styles are created using [Kyle A. Matthews](https://kyleamathews.github.io/typography.js/)' awesome `typography` library.

The following configuration is used:

<CodeBlock
language="javascript"
value={JSON.stringify(typography.options, null, 2)}
/>

## Usage

The generated typography styles are passed to the `Text` and `Heading` components. They are also injected in the `Provider` component. This allows consistent application of typography styles across UI components and native DOM elements.

<Playground>
  <Flex flexDirection="column">
    <Heading level={1}>Heading 1</Heading>
    <Heading level={2}>Heading 2</Heading>
    <Heading level={3}>Heading 3</Heading>
    <Heading level={4}>Heading 4</Heading>
    <Heading level={5}>Heading 5</Heading>
    <Heading level={6}>Heading 6</Heading>
    <Text>Regular Text</Text>
    <Text bold>Bold Text</Text>
    <Text variant="code">Code Text</Text>
  </Flex>
</Playground>
