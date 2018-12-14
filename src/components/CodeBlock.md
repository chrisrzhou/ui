---
route: /components/code-block
---

import {Playground, PropsTable} from 'docz';
import CodeBlock from './CodeBlock';

# CodeBlock

Code formatting using `prismjs` and Github colors. A limited set of language (`js`, `css`, `bash`) is exposed. More languages can be easily added in the future

<PropsTable of={CodeBlock} />

## Javascript

<Playground>
  <CodeBlock
    language="javascript"
    value="const myFunc = (b) => b + 2;"
  />
</Playground>

## CSS

<Playground>
  <CodeBlock
    language="css"
    value=".header {color: red;}"
  />
</Playground>

## Bash

<Playground>
  <CodeBlock
    language="bash"
    value="cd myDir"
  />
</Playground>
