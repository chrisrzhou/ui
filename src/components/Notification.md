---
route: /components/notification
---

import {Playground, PropsTable} from 'docz';
import {Box} from 'rebass';
import PreviewButton from './../../docz/components/PreviewButton';
import Notification from './Notification';
import List from './List';

# Notification

Dismissable notifications with animations that opens in four positions (absolute to parent container).

<PropsTable of={Notification} />

## Basic

<Playground>
  <List>
    <PreviewButton label="Basic notification">
      <Notification title="With title only" />
    </PreviewButton>
    <PreviewButton label="Notification with content">
      <Notification
        title="With Title and Content"
        content={`This is a really long
          notification with new lines.

          Use the 'maxWidth' prop to customize the width of the notification.`}
      />
    </PreviewButton>

  </List>
</Playground>

## Custom Status

<Playground>
  <List>
    <PreviewButton label="Default notification">
      <Notification title="Default notification" />
    </PreviewButton>
    <PreviewButton label="Success notification">
      <Notification title="Success notification" status="success" />
    </PreviewButton>
    <PreviewButton label="Info notification">
      <Notification title="Info notification" status="info" />
    </PreviewButton>
    <PreviewButton label="Warning notification">
      <Notification title="Warning notification" status="warn" />
    </PreviewButton>
    <PreviewButton label="Error notification">
      <Notification title="Error notification" status="error" />
    </PreviewButton>
  </List>
</Playground>

## Custom Placement

The default placement is `topRight`. Placement controls the location of where the notification appears, as well as enter/leave animations.

<Playground>
  <Box style={{height: 300}}>
    <List>
      <PreviewButton label="Top Right">
        <Notification title="Top Right" placement="topRight" />
      </PreviewButton>
      <PreviewButton label="Top Left">
        <Notification title="Top Left" placement="topLeft" />
      </PreviewButton>
      <PreviewButton label="Bottom Right">
        <Notification title="Bottom Right" placement="bottomRight" />
      </PreviewButton>
      <PreviewButton label="Bottom Left">
        <Notification title="Bottom Left" placement="bottomLeft" />
      </PreviewButton>
    </List>
  </Box>
</Playground>

## Static Position

This sets the position of the notification to `position: static`.

<Playground>
  <PreviewButton label="Open notification">
    <Notification positionStatic title="Static positioned notification "/>
  </PreviewButton>
</Playground>

## Duration

Remove notification after duration (in seconds).

<Playground>
  <PreviewButton label="Open notification">
    <Notification title="Will disappear after 3s" duration={3} />
  </PreviewButton>
</Playground>

## onClose

Custom callback when close icon is clicked.

<Playground>
  <PreviewButton label="Open notification">
    <Notification title="Click me" onClose={() => alert('clicked!')} />
  </PreviewButton>
</Playground>
