import React from 'react';
import { cleanup, render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Message from '../Message';
import MessageCommerce from '../MessageCommerce';
import { Avatar as AvatarMock } from '../../Avatar';
import {
  generateChannel,
  getTestClientWithUser,
  generateUser,
  generateMessage,
  generateMember,
} from '../../../mock-builders';

jest.mock('../../Avatar', () => ({
  Avatar: jest.fn(() => <div />),
}));

const alice = generateUser({ name: 'alice', image: 'alice-avatar.jpg' });
const bob = generateUser({ name: 'bob', image: 'bob-avatar.jpg' });
const carol = generateUser();

async function renderMessageCommerce(
  message,
  props = {},
  channelConfig = { replies: true },
) {
  const channel = generateChannel({ getConfig: () => channelConfig });
  const client = await getTestClientWithUser(alice);
  return render(
    <Message
      t={(key) => key}
      channel={channel}
      client={client}
      message={message}
      typing={false}
      Message={MessageCommerce}
      {...props}
    />,
  );
}

function generateAliceMessage(messageOptions) {
  return generateMessage({
    user: alice,
    ...messageOptions,
  });
}

function generateBobMessage(messageOptions) {
  return generateMessage({
    user: bob,
    ...messageOptions,
  });
}

const pdfAttachment = {
  type: 'file',
  asset_url: 'file.pdf',
};

const imageAttachment = {
  type: 'image',
  image_url: 'image.jpg',
};

describe('<MessageCommerce />', () => {
  afterEach(cleanup);
  beforeEach(jest.clearAllMocks);

  it('should not render anything if message is of type message.read', async () => {
    const message = generateAliceMessage({ type: 'message.read' });
    const { container } = await renderMessageCommerce(message);
    expect(container).toBeEmpty();
  });

  it('should not render anything if message is of type message.date', async () => {
    const message = generateAliceMessage({ type: 'message.date' });
    const { container } = await renderMessageCommerce(message);
    expect(container).toBeEmpty();
  });

  it('should render deleted message with custom component when message was deleted and a custom delete message component was passed', async () => {
    const deletedMessage = generateAliceMessage({
      deleted_at: new Date('2019-12-17T03:24:00'),
    });
    const CustomMessageDeletedComponent = () => (
      <p data-testid="custom-message-deleted">Gone!</p>
    );
    const { getByTestId } = await renderMessageCommerce(deletedMessage, {
      MessageDeleted: CustomMessageDeletedComponent,
    });
    expect(getByTestId('custom-message-deleted')).toBeInTheDocument();
  });

  it('should position message to the right if it is from current user', async () => {
    const message = generateAliceMessage();
    const { getByTestId } = await renderMessageCommerce(message);
    expect(getByTestId('message-commerce-wrapper').className).toContain(
      '--right',
    );
  });

  it('should position message to the right if it is not from current user', async () => {
    const message = generateBobMessage();
    const { getByTestId } = await renderMessageCommerce(message);
    expect(getByTestId('message-commerce-wrapper').className).toContain(
      '--left',
    );
  });

  it('should set correct css class modifier if message has text', async () => {
    const message = generateAliceMessage({
      text: 'Some text will go on this message',
    });
    const { getByTestId } = await renderMessageCommerce(message);
    expect(getByTestId('message-commerce-wrapper').className).toContain(
      '--has-text',
    );
  });

  it('should set correct css class modifier if message has not text', async () => {
    const message = generateAliceMessage({ text: undefined });
    const { getByTestId } = await renderMessageCommerce(message);
    expect(getByTestId('message-commerce-wrapper').className).toContain(
      '--has-no-text',
    );
  });

  it('should set correct css class modifier if message has attachments', async () => {
    const message = generateAliceMessage({ attachments: [pdfAttachment] });
    const { getByTestId } = await renderMessageCommerce(message);
    expect(getByTestId('message-commerce-wrapper').className).toContain(
      '--has-attachment',
    );
  });

  it('should set correct css class modifier if message has reactions', async () => {
    const bobReaction = {
      type: 'love',
      user_id: bob.user_id,
      user: bob,
      created_at: new Date('2019-12-17T03:24:00'),
    };
    const message = generateAliceMessage({
      latest_reactions: [bobReaction],
    });
    const { getByTestId } = await renderMessageCommerce(message);
    expect(getByTestId('message-commerce-wrapper').className).toContain(
      '--with-reactions',
    );
  });

  it.each([['top'], ['bottom'], ['middle'], ['single']])(
    "should set correct css class modifier when message's first group style is %s",
    async (modifier) => {
      const message = generateAliceMessage();
      const { getByTestId } = await renderMessageCommerce(message, {
        groupStyles: [modifier],
      });
      expect(getByTestId('message-commerce-wrapper').className).toContain(
        modifier,
      );
    },
  );

  it.each([
    ['should display', 'bottom', { shouldDisplay: true }],
    ['should display', 'single', { shouldDisplay: true }],
    ['should not display', 'top', { shouldDisplay: false }],
    ['should not display', 'middle', { shouldDisplay: false }],
  ])(
    '%s user avatar when group style is %s',
    async (_, groupStyle, { shouldDisplay }) => {
      const message = generateAliceMessage();
      await renderMessageCommerce(message, {
        groupStyles: [groupStyle],
      });
      if (shouldDisplay) {
        expect(AvatarMock).toHaveBeenCalledWith(
          {
            image: alice.image,
            size: 32,
            name: alice.name,
            onClick: expect.any(Function),
            onMouseOver: expect.any(Function),
          },
          {},
        );
      } else {
        expect(AvatarMock).not.toHaveBeenCalled();
      }
    },
  );

  it('should show the reaction list when message has no text', async () => {
    const bobReaction = {
      type: 'love',
      user_id: bob.user_id,
      user: bob,
      created_at: new Date('2019-12-17T03:24:00'),
    };
    const message = generateAliceMessage({
      latest_reactions: [bobReaction],
      text: undefined,
    });
    const { getByTestId } = await renderMessageCommerce(message);
    expect(getByTestId('reaction-list')).toBeInTheDocument();
  });

  it('should show the reaction selector when message has no text and user clicks on the reaction list', async () => {
    const bobReaction = {
      type: 'love',
      user_id: bob.user_id,
      user: bob,
      created_at: new Date('2019-12-17T03:24:00'),
    };
    const message = generateAliceMessage({
      latest_reactions: [bobReaction],
      text: undefined,
    });
    const { getByTestId } = await renderMessageCommerce(message);
    expect(() => getByTestId('reaction-selector')).toThrowError();
    fireEvent.click(getByTestId('reaction-list'));
    expect(getByTestId('reaction-selector')).toBeInTheDocument();
  });

  it('should render message actions when message has no text and channel has reactions enabled', async () => {
    const message = generateAliceMessage({ text: undefined });
    const { getByTestId } = await renderMessageCommerce(
      message,
      {},
      { reactions: true },
    );
    expect(getByTestId('message-commerce-actions')).toBeInTheDocument();
  });

  it('should render message actions when message has no text and channel has reactions disabled', async () => {
    const message = generateAliceMessage({ text: undefined });
    const { queryByTestId } = await renderMessageCommerce(
      message,
      {},
      { reactions: false },
    );
    expect(queryByTestId('message-commerce-actions')).toBeNull();
  });

  it.each([
    ['type', 'error'],
    ['type', 'system'],
    ['type', 'ephemeral'],
    ['status', 'sending'],
    ['status', 'failed'],
  ])(
    'should not render message actions when message has %s %s',
    async (key, value) => {
      const message = generateAliceMessage({ [key]: value, text: undefined });
      const { queryByTestId } = await renderMessageCommerce(message, {
        reactions: true,
      });
      expect(queryByTestId('message-commerce-actions')).toBeNull();
    },
  );

  it('should render non-image attachment components when message no text', async () => {
    const message = generateAliceMessage({
      attachments: [pdfAttachment, pdfAttachment, pdfAttachment],
      text: undefined,
    });
    const { queryAllByTestId } = await renderMessageCommerce(message);
    expect(queryAllByTestId('attachment-file').length).toBe(3);
  });

  it('should render image attachments in gallery when message has no text', async () => {
    const message = generateAliceMessage({
      attachments: [imageAttachment, imageAttachment, imageAttachment],
      text: undefined,
    });
    const { queryAllByTestId } = await renderMessageCommerce(message);
    expect(queryAllByTestId('gallery-image').length).toBe(3);
  });

  it('should set attachment wrapper css if message has text and has attachment', async () => {
    const message = generateAliceMessage({
      attachments: [pdfAttachment, pdfAttachment, pdfAttachment],
      text: 'Hello world',
    });
    const { getByTestId } = await renderMessageCommerce(message);
    expect(
      getByTestId('message-commerce-text-inner-wrapper').className,
    ).toContain('--has-attachment');
  });

  it('should set emoji wrapper css if message has emoji-only text', async () => {
    const message = generateAliceMessage({ text: '🚀🚀🚀' });
    const { getByTestId } = await renderMessageCommerce(message);
    expect(
      getByTestId('message-commerce-text-inner-wrapper').className,
    ).toContain('--is-emoji');
  });

  it('should trigger on message hover event handler when the user hovers a message text', async () => {
    const message = generateAliceMessage();
    const onMentionsHover = jest.fn();
    const { getByTestId } = await renderMessageCommerce(message, {
      onMentionsHover,
    });
    expect(onMentionsHover).not.toHaveBeenCalled();
    fireEvent.mouseOver(getByTestId('message-commerce-text-inner-wrapper'));
    expect(onMentionsHover).toHaveBeenCalled();
  });

  it('should trigger on message click event handler on message click when message has text', async () => {
    const message = generateAliceMessage();
    const onMentionsClick = jest.fn();
    const { getByTestId } = await renderMessageCommerce(message, {
      onMentionsClick,
    });
    expect(onMentionsClick).not.toHaveBeenCalled();
    fireEvent.click(getByTestId('message-commerce-text-inner-wrapper'));
    expect(onMentionsClick).toHaveBeenCalled();
  });

  it('should inform that the message was not sent when message has text and is of type "error"', async () => {
    const message = generateAliceMessage({ type: 'error', text: 'Hello!' });
    const { getByText } = await renderMessageCommerce(message);
    expect(getByText('Error · Unsent')).toBeInTheDocument();
  });

  it('should render the message html when unsafeHTML property is true', async () => {
    const message = generateAliceMessage({
      html: '<span data-testid="custom-html" />',
    });
    const { getByTestId } = await renderMessageCommerce(message, {
      unsafeHTML: true,
    });
  });

  it('should render the message text when it has one', async () => {
    const text = 'Hello, world!';
    const message = generateAliceMessage({ text });
    const { getByText } = await renderMessageCommerce(message);
    expect(getByText(text)).toBeInTheDocument();
  });

  it('should display the reaction list when message has text and reactions and detailed reactions are not displayed', async () => {
    const bobReaction = {
      type: 'love',
      user_id: bob.user_id,
      user: bob,
      created_at: new Date('2019-12-17T03:24:00'),
    };
    const message = generateAliceMessage({
      latest_reactions: [bobReaction],
      text: 'hello world',
    });
    const { getByTestId } = await renderMessageCommerce(message);
    expect(getByTestId('reaction-list')).toBeInTheDocument();
  });

  it('should display detailed reactions when message has text, reactions and user clicks on the reaction list', async () => {
    const bobReaction = {
      type: 'love',
      user_id: bob.user_id,
      user: bob,
      created_at: new Date('2019-12-17T03:24:00'),
    };
    const message = generateAliceMessage({
      latest_reactions: [bobReaction],
    });
    const { getByTestId } = await renderMessageCommerce(message);
    expect(() => getByTestId('reaction-selector')).toThrow();
    fireEvent.click(getByTestId('reaction-list'));
    expect(getByTestId('reaction-selector')).toBeInTheDocument();
  });

  it('should display reply count when message is not on thread list', async () => {
    const message = generateAliceMessage({
      reply_count: 1,
    });
    const { getByTestId } = await renderMessageCommerce(message);
    expect(getByTestId('replies-count-button')).toBeInTheDocument();
  });

  it('should open thread when message is not on a thread list and user click on the message replies count', async () => {
    const message = generateAliceMessage({
      reply_count: 1,
    });
    const openThread = jest.fn();
    const { getByTestId } = await renderMessageCommerce(message, {
      openThread,
    });
    expect(openThread).not.toHaveBeenCalled();
    fireEvent.click(getByTestId('replies-count-button'));
    expect(openThread).toHaveBeenCalled();
  });

  it('should display user name when message is not from current user', async () => {
    const message = generateBobMessage();
    const { getByText } = await renderMessageCommerce(message);
    expect(getByText(bob.name)).toBeInTheDocument();
  });

  it("should display message's timestamp with time only format", async () => {
    const messageDate = new Date('2019-12-25T01:00:00');
    const parsedDateText = '01:00:00';
    const message = generateAliceMessage({
      created_at: messageDate,
    });
    const format = jest.fn(() => parsedDateText);
    const customTDateTimeParser = jest.fn((createdAt) => ({
      format,
    }));
    const { getByText } = await renderMessageCommerce(message, {
      tDateTimeParser: customTDateTimeParser,
    });
    expect(customTDateTimeParser).toHaveBeenCalledWith(messageDate);
    expect(format).toHaveBeenCalledWith('LT');
    expect(getByText(parsedDateText)).toBeInTheDocument();
  });
});
