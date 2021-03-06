# Changelog

## [1.0.0](https://github.com/GetStream/stream-chat-react/releases/tag/v1.0.0) 2020-05-15

We've already been on a v1 release for a while but never updated our versioning. Right now we're in the process of rewriting our components to be more future proof and we started using hooks, hence the v1.0.0 today.

**Breaking change:** `stream-chat-react` no relies on hooks and will need at least `v16.8.x` of `react` to work.

- Fixed some issues with mutes
- Fixed issues with attachments
- Added tests

## [0.12.1](https://github.com/GetStream/stream-chat-react/releases/tag/v0.12.1) 2020-05-12

- Render video uploads as videos, not files
- Added tooltip to emoji and attachment buttons
- Fix file/image upload preview layout
- Added tests

## [0.12.0](https://github.com/GetStream/stream-chat-react/releases/tag/v0.12.0) 2020-05-08

- Refactor
- First message in thread doesn't have a fixed position anymore
- Upon if the active channel get's deleted, we now set the active channel to be empty
- Removed some unused css
- Fix for read indicators

## [0.11.18](https://github.com/GetStream/stream-chat-react/releases/tag/v0.11.18) 2020-05-06

- Better fallback avatar in ReactionSelector
- Better scrolling after assets finish loading
- Disabled truncation of email links
- New props `onUserClick` and `onUserHover` on `Message` components

## [0.11.17](https://github.com/GetStream/stream-chat-react/releases/tag/v0.11.17) 2020-05-04

- Added prop MessageDeleted on Message components to override the default component displayed for deleted messages.

## [0.11.16](https://github.com/GetStream/stream-chat-react/releases/tag/v0.11.16) 2020-05-01

- Fixed an where read state indicators dissapeared

## [0.11.15](https://github.com/GetStream/stream-chat-react/releases/tag/v0.11.15) 2020-04-30

- Fixed an issue where the read by tooltip said: "x, x, and 0 more"
- Fixed an issue where app might crash due to faulty read state
- Fixed an issue where file attachments didn't get uploaded when also uploading images

## [0.11.14](https://github.com/GetStream/stream-chat-react/releases/tag/v0.11.14) 2020-04-29

- Adding direct messaging support for channel preview [b394079](https://github.com/GetStream/stream-chat-react/commit/b39407960fa908dc55b8ea48625f3c7095c37b56)
- Fixed typescript for ChannelList component [576f5c8](https://github.com/GetStream/stream-chat-react/commit/576f5c85919bccf21fc803e917581e373dd241d5)
- Fixed french translation file [308fcab](https://github.com/GetStream/stream-chat-react/commit/308fcab5fa891aad527cf94aeed8353a99d7dcb8)
- Adding extra check for channel connection to avoid failing markRead call [317fb1f](https://github.com/GetStream/stream-chat-react/commit/317fb1fe31e21e253cdce95bfb5d19932f098e2b)

## [0.11.13](https://github.com/GetStream/stream-chat-react/releases/tag/v0.11.13) 2020-04-20

- Add check to fix optional activeChannel in ChannelPreview.

## [0.11.12](https://github.com/GetStream/stream-chat-react/releases/tag/v0.11.12) 2020-04-17

- Fixing typescript issue with `MessageInput` component prop - `additionalTextAreaProps` [92f2ae2](https://github.com/GetStream/stream-chat-react/commit/92f2ae29a3c66a683ea2b1ebd1c85854cfa41446)

## [0.11.11](https://github.com/GetStream/stream-chat-react/releases/tag/v0.11.11) 2020-04-15

- Adding missing translation key `{{ imageCount }} more` in Gallery component [5cea938](https://github.com/GetStream/stream-chat-react/commit/5cea938c5e80e781ae815f461e833f0b61b1a110)

## [0.11.10](https://github.com/GetStream/stream-chat-react/releases/tag/v0.11.10) 2020-04-09

- Fix crashing app when there's no active channel

## [0.11.9](https://github.com/GetStream/stream-chat-react/releases/tag/v0.11.9) 2020-04-09

- Fix issue with DateSeparator
- added type definition for setActiveChannelOnMount

## [0.11.8](https://github.com/GetStream/stream-chat-react/releases/tag/v0.11.8) 2020-04-08

- Fix bug in ChannelHeader caused in version `0.11.4`

## [0.11.6](https://github.com/GetStream/stream-chat-react/releases/tag/v0.11.6) 2020-04-04

**NOTE** Please make sure to use `stream-chat@^1.7.0`

- Fixing moderator, owner, admin checks for message actions [71b3309](https://github.com/GetStream/stream-chat-react/commit/71b3309f53edd03a9eded293b3d77093be6359d5)

## [0.11.5](https://github.com/GetStream/stream-chat-react/releases/tag/v0.11.5) 2020-04-03

- Open url attachments in new tab [e6436fe](https://github.com/GetStream/stream-chat-react/commit/e6436fe2c8c09bba42ec3677771191e5acbf5d93)

## [0.11.4](https://github.com/GetStream/stream-chat-react/releases/tag/v0.11.4) 2020-04-02

- Reworked the mobile nav behaviour to be more flexible

## [0.11.3](https://github.com/GetStream/stream-chat-react/releases/tag/v0.11.3) 2020-04-02

- Have the mute action respect channel settings
- Add supported markdown to docs

## [0.11.1](https://github.com/GetStream/stream-chat-react/releases/tag/v0.11.1) 2020-03-27

- Reverting optimistic reaction UI related changes

  Reverted commits:

  - [36f8fd0](https://github.com/GetStream/stream-chat-react/commit/36f8fd025f1f8f5bf8c825ba86c141893d69b662)
  - [393c3a5](https://github.com/GetStream/stream-chat-react/commit/393c3a5fb6d31bd5abf24af69b522a85f573e77f)

  Reason: Please check the changelog for [v1.6.1](https://github.com/GetStream/stream-chat-js/blob/master/CHANGELOG.md#march-27-2020---161) stream-chat-js

## [0.11.0](https://github.com/GetStream/stream-chat-react/releases/tag/v0.11.0) 2020-03-27

- Improvements to reaction UX: Updating UI optimistically instead of waiting for reaction api
  call to succeed
  - [36f8fd0](https://github.com/GetStream/stream-chat-react/commit/36f8fd025f1f8f5bf8c825ba86c141893d69b662)
  - [393c3a5](https://github.com/GetStream/stream-chat-react/commit/393c3a5fb6d31bd5abf24af69b522a85f573e77f)
- Fix for a bug: Flagging a message results in "`t is not a function`" error in console
  - commit [d537e78](https://github.com/GetStream/stream-chat-react/commit/d537e787b624b11f8f97f90075afe6f824be025e)
  - fixes issue [#181](https://github.com/GetStream/stream-chat-react/issues/181#issuecomment-604283175)
- Adding support for `additionalTextareaProps` prop in MessageInput component
  - [5346f54](https://github.com/GetStream/stream-chat-react/commit/5346f548f9080d2b178b7ad215425361d433f95f)
  - [a6719bb](https://github.com/GetStream/stream-chat-react/commit/a6719bb8dc0b9209c45653c5b6fe6fe0e5e8bf32)
- Filter out buggy emojis and updating emoji-mart [333ed77](https://github.com/GetStream/stream-chat-react/commit/333ed77ad7d4ebe5dbb2a80052ac3292eeb5e3ee)
- Displaying DateSeperator before deleted messages. So far we didn't show it [8ed3ca5](https://github.com/GetStream/stream-chat-react/commit/8ed3ca508cdb3561d645455c7529d9ea7dceea9f)
- Updating `stream-chat` version to 1.6.0 [d4b7c14](https://github.com/GetStream/stream-chat-react/commit/d4b7c143ae7e4d36fe8e76d1cf9fde78c1a1dc39)

## [0.10.2](https://github.com/GetStream/stream-chat-react/releases/tag/v0.10.2) 2020-03-26

- Bug fix - making sure translators are ready before rendering Chat component [1b0c07a65b88075d14b038977d42138ec7fdaa21](https://github.com/GetStream/stream-chat-react/commit/1b0c07a65b88075d14b038977d42138ec7fdaa21) Fixes [#181](https://github.com/GetStream/stream-chat-react/issues/181)
- Fixing small styling issues with MessageInput
  - [a17300e](https://github.com/GetStream/stream-chat-react/commit/a17300e5a9b8cdcf6ba03c6260679dda3269c812)
  - [0f0bf0a](https://github.com/GetStream/stream-chat-react/commit/0f0bf0a304fdcea498878c9ab501dc18e63340d4)

## [0.10.1](https://github.com/GetStream/stream-chat-react/releases/tag/v0.10.1) 2020-03-25

- Added missing i18next dependency to dependency list [c7cf11f](https://github.com/GetStream/stream-chat-react/commit/c7cf11f32b5a0346889534387adcb99e06f5d90d)

## [0.10.0](https://github.com/GetStream/stream-chat-react/releases/tag/v0.10.0) 2020-03-24

- i18n support for library. Documentatio - https://getstream.github.io/stream-chat-react/#section-streami18n

## [0.9.0](https://github.com/GetStream/stream-chat-react/releases/tag/v0.9.0) 2020-03-21

- 20% bundle size reduction (use day.js instead of moment.js)

## [0.8.8](https://github.com/GetStream/stream-chat-react/releases/tag/v0.8.8) 2020-03-20

- Changing mute success notification to show name of user instead of id - [e5bab26](https://github.com/GetStream/stream-chat-react/commit/e5bab26958e9d3ff5ad53491ed5d964d02f95dab)
- Bug fix: Cancel button on giphy command in thread failed to remove message - [e592a4e](https://github.com/GetStream/stream-chat-react/commit/e592a4e8c8738cd61549b14a40dc317934777ce5)
- Fixing typing indicator to now show up when current user is typing - [c24dc7a](https://github.com/GetStream/stream-chat-react/commit/c24dc7a1ed0ec2b1dada780b32f899b00d59165a)
- Fixing moderator role check function in Message.js - [311fab9](https://github.com/GetStream/stream-chat-react/commit/311fab9efb5bd8ebd90b86c8ed1c2a86db62d6f7)

## [0.8.7](https://github.com/GetStream/stream-chat-react/releases/tag/v0.8.7) 2020-03-19

- Fixed a bug where attachments got duplicated upon submitting an edited message [cb93b92](https://github.com/GetStream/stream-chat-react/commit/cb93b9274c94b1d813c2d061869251cc04f5f610)

## [0.8.6](https://github.com/GetStream/stream-chat-react/releases/tag/v0.8.6) 2020-03-17

- Allow `~~test~~` double tilde for strikethrough in messages - [6870194](https://github.com/GetStream/stream-chat-react/commit/6870194a778f95b3c896d76fa4d4b39e3114c692)
- Fix issue where attachments got duplicated when editing messages - [eea7f61](https://github.com/GetStream/stream-chat-react/commit/eea7f61763359ca8b4dfb13feff294668455643d)

## [0.8.4](https://github.com/GetStream/stream-chat-react/releases/tag/v0.8.4) 2020-02-11

- Fixing `EmptyStateIndicator` prop for ChannelList component - [20d1672](https://github.com/GetStream/stream-chat-react/commit/20d1672969f030bc8f948aea5955706c6dcf757a)

## [0.8.3](https://github.com/GetStream/stream-chat-react/releases/tag/v0.8.3) 2020-02-11

- Fixing `LoadingIndicator` prop for InfiniteScrollPaginator component - [fb81d68](https://github.com/GetStream/stream-chat-react/commit/fb81d68deb2822b9cf2f0414a3d430b86277f024)

## [0.8.2](https://github.com/GetStream/stream-chat-react/releases/tag/v0.8.2) 2020-02-10

- Fixing `LoadingIndicator` prop for ChannelList component - [e6e2e9f](https://github.com/GetStream/stream-chat-react/commit/e6e2e9fdd280d183b4378996c926e4540e467c17)
- Adding `LoadingErrorIndicator` prop for ChannelList component - [e6e2e9f](https://github.com/GetStream/stream-chat-react/commit/e6e2e9fdd280d183b4378996c926e4540e467c17)

## [0.8.1](https://github.com/GetStream/stream-chat-react/releases/tag/v0.8.1) 2020-02-07

- Fixing broken typescript file [cc86f6f](https://github.com/GetStream/stream-chat-react/commit/cc86f6fea998e8581121c7da42870b0c5d316d8c)

## [0.8.0](https://github.com/GetStream/stream-chat-react/releases/tag/v0.8.0) 2020-02-07

- Updated dependencies [dfe466d](https://github.com/GetStream/stream-chat-react/commit/dfe466d43e75b7213857fdf9a6e007ecfc3d4614)
- Exported all the components and updated typescript types - [41e478f](https://github.com/GetStream/stream-chat-react/commit/41e478fc1d37aad8994b9b1075ce9a576a1497f0)

## [0.7.20](https://github.com/GetStream/stream-chat-react/releases/tag/v0.7.20) 2020-01-14

- When you change the filters prop on the ChannelList component this now we will refresh the channels with the new query

## [0.7.17](https://github.com/GetStream/stream-chat-react/releases/tag/v0.7.17) 2020-01-02

- Added `maxRows` props to MessageInput component

## [0.7.16](https://github.com/GetStream/stream-chat-react/releases/tag/v0.7.16) 2020-01-02

- Removed inline styles from multiple locations
- Exporting new component `ChatAutoComplete` (Advanced usage only)

## [0.7.15](https://github.com/GetStream/stream-chat-react/releases/tag/v0.7.15) 2019-12-30

- Added the following props on the `Thread` component so the underlying MessageList, MessageInput and Message components can be customized using props:
  - `additionalParentMessageProps`
  - `additionalMessageListProps`
  - `additionalMessageInputProps`
- Added the following props to the `Channel` component:
  - `doUpdateMessageRequest` to override the update(edit) message request (Advanced usage only)
  - `doSendMessageRequest` to override the send message request (Advanced usage only)

## [0.7.13](https://github.com/GetStream/stream-chat-react/releases/tag/v0.7.13) 2019-12-03

- Handling and updating channel list on `channel.truncated` and `channel.deleted` event.

## [0.7.12](https://github.com/GetStream/stream-chat-react/releases/tag/v0.7.12) 2019-11-22

- Adding prop `MessageSystem` to customize system messages

## [0.7.11](https://github.com/GetStream/stream-chat-react/releases/tag/v0.7.11) 2019-11-05

- Fixed z-index issue on MessageInputLarge component https://github.com/GetStream/stream-chat-react/commit/f78b0bf6566fe587da62a8162ab5f1b3d799a10e

## [0.7.10](https://github.com/GetStream/stream-chat-react/releases/tag/v0.7.10) 2019-10-16

- Added `customActiveChannel` prop on `ChannelList` to specify a custom channel to be moved to the top and set to active upon mounting.

## [0.7.9](https://github.com/GetStream/stream-chat-react/releases/tag/v0.7.9) 2019-10-16

- Changing prop name for MessageSimple from openThread to handleOpenThread.
- Fixing scroll issue on messagelist. Related to issue [#67](https://github.com/GetStream/stream-chat-react/issues/67)

## [0.7.8](https://github.com/GetStream/stream-chat-react/releases/tag/v0.7.8) 2019-10-11

- Bug fix with dateseperator in messagelist

## [0.7.7](https://github.com/GetStream/stream-chat-react/releases/tag/v0.7.7) 2019-10-11

- Adding intro message to messagelist

## [0.7.6](https://github.com/GetStream/stream-chat-react/releases/tag/v0.7.6) 2019-10-08

- Fixed unbinding of visibility listener

## [0.7.5](https://github.com/GetStream/stream-chat-react/releases/tag/v0.7.5) 2019-10-07

- Updated js-client with fix for failing fileuploads

## [0.7.4](https://github.com/GetStream/stream-chat-react/releases/tag/v0.7.4) 2019-10-07

- Fixed styling issues for SendButton

## [0.7.3](https://github.com/GetStream/stream-chat-react/releases/tag/v0.7.3) 2019-10-02

- Added SendButton prop to MessageInput. This only shows on mobile to make sure you're able to submit the form without having a return button.

## [0.7.2](https://github.com/GetStream/stream-chat-react/releases/tag/v0.7.2) 2019-09-30

- Updating js-client version

## [0.7.1](https://github.com/GetStream/stream-chat-react/releases/tag/v0.7.1) 2019-09-30

- Fix - Adding typescript declaration files in production build

## [0.7.0](https://github.com/GetStream/stream-chat-react/releases/tag/v0.7.0) 2019-09-27

- Adding typescript declaration file

## [0.6.27](https://github.com/GetStream/stream-chat-react/releases/tag/v0.6.27) 2019-09-20

- Added `EmptyStateIndicator` prop to [ChannelList](https://getstream.github.io/stream-chat-react/#!/ChannelList) and [MessageList](https://getstream.github.io/stream-chat-react/#!/MessageList)
- Added `watchers` prop to [ChannelList](https://getstream.github.io/stream-chat-react/#!/ChannelList) to specify [watchers pagination query](https://getstream.io/chat/docs/#channel_pagination) on `setActiveChannel`, including this makes one extra query on selecting a channel from the ChannelList
- Updated react-images to version `1.0.0`

## [0.6.26](https://github.com/GetStream/stream-chat-react/releases/tag/v0.6.26) 2019-09-10

- Add IE 11 support for MessageInput
- Fixing pagination issue when oldest message is not received yet
- Fixing issue that didn't display unread count correctly on initial load

## [0.6.25](https://github.com/GetStream/stream-chat-react/releases/tag/v0.6.25) 2019-09-05

- The built in MessageInput components now use native emoji to create consistent rendering between the picker and the message

## [0.6.22](https://github.com/GetStream/stream-chat-react/releases/tag/v0.6.22) 2019-08-15

- Adding support for loading error indicator
- Adding fallback as thumb_url for image attachments

## [0.6.21](https://github.com/GetStream/stream-chat-react/releases/tag/v0.6.21) 2019-08-05

- Syncing and improvements in styleguide

## [0.6.19](https://github.com/GetStream/stream-chat-react/releases/tag/v0.6.19) 2019-07-31

- Fix issue raised in 0.6.17

## [0.6.18](https://github.com/GetStream/stream-chat-react/releases/tag/v0.6.18) 2019-07-31

- Improve message options UX in messaging theme

## [0.6.17](https://github.com/GetStream/stream-chat-react/releases/tag/v0.6.17) 2019-07-30

- Export LoadingChannels component
- Fix connectivity issue with threads
- Better check for user roles

## [0.6.16](https://github.com/GetStream/stream-chat-react/releases/tag/v0.6.16) 2019-07-29

- Adding visual response (notification) for flag message and mute user functionality
- Fixing broken mute user functionality

## [0.6.15](https://github.com/GetStream/stream-chat-react/releases/tag/v0.6.15) 2019-07-23

- Fixing Message actions for livestream and team chat.
- Fixing flag/mute functionality. Earlier only admins were allowed to flag or mute the message. This was wrong. Every user should be able to
  flag or mute any message (other than his own message)

## [0.6.14](https://github.com/GetStream/stream-chat-react/releases/tag/v0.6.14) 2019-07-20

- Adding prop `messageActions` to MessageList

## [0.6.13](https://github.com/GetStream/stream-chat-react/releases/tag/v0.6.13) 2019-07-18

- Adding prop function `onChannelUpdated` as callback for event `channel.updated`
- Bug fix - Channel list component doesn't update when custom data on channel is updated.

## [0.6.0](https://github.com/GetStream/stream-chat-react/releases/tag/v0.6.0) 2019-05-13

- Added Pagination to ChannelList
  - Standard pagination with Load More button (`LoadMorePaginator`)
  - Also includes a infinte scroll paginator (`InfiniteScrollPaginator`)
  - **Important** Because of this change we moved the channelquery logic to `ChannelList` this means you need to pass your `filters`, `sort`, and `options`.

## [0.3.11](https://github.com/GetStream/stream-chat-react/releases/tag/v0.3.11) - 2019-04-23

### Added

- `MessageInput` and `Channel` now accept the following props
  - `multipleUploads={false}`
  - `acceptedFiles={['image/*']}`
  - `maxNumberOfFiles={1}`

## [0.3.10](https://github.com/GetStream/stream-chat-react/releases/tag/v0.3.10) - 2019-04-19

### Added

- Support for @mentions for @mention interactions `Channel` now accepts the following props
  - `onMentionsHover={(event, user) => console.log(event, user)}`
  - `onMentionsClick={(event, user) => console.log(event, user)}`
