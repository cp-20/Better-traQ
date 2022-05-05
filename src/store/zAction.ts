import { z } from 'zod';

const zAction = z.union([
  z.literal('cPrevPage'),
  z.literal('cNextPage'),
  z.literal('sTopOfNavigationBar'),
  z.literal('cTHTab'),
  z.literal('cNHHomeCh'),
  z.literal('cNHTopUnreadCh'),
  z.literal('cNHBottomUnreadCh'),
  z.literal('cTCTab'),
  z.literal('fNCChFilterInput'),
  z.literal('iCurrentChNameNCChFilter'),
  z.literal('cNCTopSearchResult'),
  z.literal('cNCChFilterStar'),
  z.literal('eNCTreeToCurrentCh'),
  z.literal('cNCNextCh'),
  z.literal('cNCPrevCh'),
  z.literal('cNCCurrentChHash'),
  z.literal('sNCToCurrentCh'),
  z.literal('cTATab'),
  z.literal('cNAIsNotAllToggleButton'),
  z.literal('cNAIsPerChToggleButton'),
  z.literal('tNAFollowMode'),
  z.literal('cTUTab'),
  z.literal('fNUUserFilterInput'),
  z.literal('cNUTopSearchResult'),
  z.literal('cTClipTab'),
  z.literal('cHParentChName'),
  z.literal('oVNextMsg'),
  z.literal('oVPrevMsg'),
  z.literal('sToBottomOfV'),
  z.literal('cVLatestMsgStampPicker'),
  z.literal('cV2ndLatestMsgStampPicker'),
  z.literal('cV3rdLatestMsgStampPicker'),
  z.literal('cV4thLatestMsgStampPicker'),
  z.literal('cV5thLatestMsgStampPicker'),
  z.literal('cV6thLatestMsgStampPicker'),
  z.literal('cV7thLatestMsgStampPicker'),
  z.literal('cV8thLatestMsgStampPicker'),
  z.literal('cV9thLatestMsgStampPicker'),
  z.literal('cVLatestMsgContextMenuRemovePin'),
  z.literal('cVLatestMsgContextMenuAddPin'),
  z.literal('cVLatestMsgContextMenuClipMsg'),
  z.literal('cVLatestMsgContextMenuEditMsg'),
  z.literal('cVLatestMsgContextMenuCopyLink'),
  z.literal('cVLatestMsgContextMenuEmbedMsg'),
  z.literal('cVLatestMsgContextMenuCopyMarkdown'),
  z.literal('cVLatestMsgContextMenuDeleteMsg'),
  z.literal('cVSelectedMsgContextMenuRemovePin'),
  z.literal('cVSelectedMsgContextMenuAddPin'),
  z.literal('cVSelectedMsgContextMenuClipMsg'),
  z.literal('cVSelectedMsgContextMenuEditMsg'),
  z.literal('cVSelectedMsgContextMenuCopyLink'),
  z.literal('cVSelectedMsgContextMenuEmbedMsg'),
  z.literal('cVSelectedMsgContextMenuCopyMarkdown'),
  z.literal('cVSelectedMsgContextMenuDeleteMsg'),
  z.literal('cVSelectedMsgSpoilers'),
  z.literal('cVSelectedMsgDetailButton'),
  z.literal('cVSelectedMsgStamps'),
  z.literal('fVMsgInput'),
  z.literal('cVMsgInputStampButton'),
  z.literal('cSOpener'),
  z.literal('cSCloser'),
  z.literal('cSContentViewers'),
  z.literal('bActiveInputElement'),
  z.literal('lVAllMsgs'),
  z.literal('sleep100ms'),
]);

export type ActionEnum = z.infer<typeof zAction>;

export default zAction;
