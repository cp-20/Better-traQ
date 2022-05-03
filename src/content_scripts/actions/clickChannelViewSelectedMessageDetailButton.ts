import selectors from '../selectors';
import sleep100ms from './sleep100ms';
import { click } from './utils/dispatchEvent';
import lazy from '@/utils/lazy';

const clickChannelViewSelectedMessageDetailButton = () => {
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
  const detailButton = targetMessage.querySelector<HTMLDivElement>(
    ':scope > div:nth-child(3) > svg'
  );
  if (!detailButton) return;

  click(detailButton);
  lazy(async () => {
    await sleep100ms();
    targetMessage.scrollIntoView({ block: 'center' });
  });
};

export default clickChannelViewSelectedMessageDetailButton;
