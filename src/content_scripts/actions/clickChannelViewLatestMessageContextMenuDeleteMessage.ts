import selectors from '../selectors';
import { click, mouseenter } from './utils/dispatchEvent';
import lazy from '@/utils/lazy';

const clickChannelViewLatestMessageContextMenuDeleteMessage = () => {
  const latestMessageSelector = selectors.channelViewLatestMessage();
  if (!latestMessageSelector) return;
  const latestMessageEl = document.querySelector<HTMLDivElement>(
    latestMessageSelector
  );
  if (!latestMessageEl) return;

  mouseenter(latestMessageEl);
  lazy(() => {
    const dotsSelector = selectors.channelViewMessageToolDots();
    if (!dotsSelector) return;
    const dotsEl = document.querySelector<HTMLDivElement>(dotsSelector);
    if (!dotsEl) return;
    click(dotsEl);
    lazy(() => {
      const targetSelector = selectors.channelViewContextMenuDeleteMessage();
      if (!targetSelector) return;
      const targetEl = document.querySelector<HTMLDivElement>(targetSelector);
      if (!targetEl) return;
      targetEl.click();
    });
  });
};

export default clickChannelViewLatestMessageContextMenuDeleteMessage;
