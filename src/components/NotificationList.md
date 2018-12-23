---
route: /components/notification-list
---

import {Playground, PropsTable} from 'docz';
import {Box} from 'rebass';
import PreviewButton from './../../docz/components/PreviewButton';
import NotificationList from './NotificationList';

# NotificationList

A list of notifications. See `Notification` for more details.

<PropsTable of={NotificationList} />

## Basic

Refer to `PropsTable` of `Notification` on shape of data for the `notifications` prop. The `duration`, `maxWidth`, `placement`, `zIndex` props affects all notifications in the list.

<Playground>
  <Box style={{height: 500}}>
    <NotificationList
      notifications={[
        {
          content: 'Default notification with content and title',
          title: 'Default (TopRight) notification',
        },
        {
          content: 'This is an error notification',
          title: 'Default Error notification',
          status: 'error',
        },
        {
          content: 'This is a success notification',
          title: 'Default Success notification',
          status: 'success',
        },
      ]}
    />
    <NotificationList
      notifications={[
        {
          content: 'Default notification with content and title',
          title: 'BottomLeft notification',
        },
        {
          content: 'This is an error notification',
          title: 'BottomLeft Error notification',
          status: 'error',
        },
        {
          content: 'This is a success notification',
          title: 'BottomLeft Success notification',
          status: 'success',
        },
      ]}
      placement="bottomLeft"
    />
  </Box>
</Playground>
