import selectors from '../selectors';

const clickChannelViewSelectedMessageStamps = () => {
  const messageListSelector = selectors.channelViewMessageList();
  if (!messageListSelector) return;
  const messageListContainerEl =
    document.querySelector<HTMLDivElement>(messageListSelector);
  if (!messageListContainerEl) return;

  // メッセージツールを探す
  const messageTool = messageListContainerEl.querySelector<HTMLDivElement>(
    ':scope > div > div[class*=tool]'
  );
  if (!messageTool) return;
  const targetMessage = messageTool.parentElement as HTMLDivElement;
  if (!targetMessage) return;

  const stamps = [
    ...targetMessage.querySelectorAll<HTMLDivElement>(
      ':scope > div:nth-last-child(1) > div > div > div:not([data-include-me])'
    ),
  ];

  stamps.forEach((stamp) => stamp.click());
};

export default clickChannelViewSelectedMessageStamps;
