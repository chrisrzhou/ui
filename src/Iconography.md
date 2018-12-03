---
route: /iconography
---

import {Playground} from 'docz';
import {Flex} from 'rebass';
import iconography from './iconography';
import ClipboardBox from './components/ClipboardBox';
import Icon from './components/Icon';
import List from './components/List';
import Text from './components/Text';

# Iconography

Icons are sourced from `octicons` ([link](https://github.com/primer/octicons)).

Use the `Icon` component to render icons with customizable sizes and states.

## Icon Set

<Playground>
  <List wrap>
    {Object.keys(iconography).map(icon => {
      return (
        <ClipboardBox
          key={icon}
          message="Copy SVG text"
          value={iconography[icon]}>
          <Flex
            alignItems="center"
            flexDirection="column"
            pb={3}
            width="120px">
            <Icon icon={icon} />
            <Text fontSize="10px">{icon}</Text>
          </Flex>
        </ClipboardBox>
      );
    })}
  </List>
</Playground>
