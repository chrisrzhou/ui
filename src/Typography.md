---
name: Typography
order: -2
route: /typography
---

import CodeBlock from './components/CodeBlock';
import typography from './typography';

# Typography

Typography styles are created using [Kyle A. Matthews](https://kyleamathews.github.io/typography.js/)' awesome `typography` library.

The following configuration is used:

<CodeBlock
language="javascript"
value={JSON.stringify(typography.options, null, 2)}
/>

## Usage

The `typography` styles are passed to `Text` and `Heading` components. They are also injected in the `Provider` component.

This allows for consistent application of the generated typography styles across React components and native DOM elements (e.g. `h1`, `h2`, `h3`, `p`, `code` which can be generated via markdown parsing).
