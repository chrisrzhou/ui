---
name: CodeBlock
route: /components/code-block
---

import {Playground, PropsTable} from 'docz'
import CodeBlock from './CodeBlock';

# CodeBlock

Code formatting using prismjs and Github colors. More languages will be supported in the future

<PropsTable of={CodeBlock} />

## Javascript

<Playground>
  <CodeBlock
    language="javascript"
    value={"const myFunc = (b) => b + 2;"}
  />
</Playground>

## CSS

<Playground>
  <CodeBlock
    language="css"
    value={".header {color: red;}"}
  />
</Playground>

## Bash

<Playground>
  <CodeBlock
    language="bash"
    value={"cd myDir"}
  />
</Playground>
