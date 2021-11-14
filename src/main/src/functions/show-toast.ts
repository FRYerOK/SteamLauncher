import type {IpcMainEvent, IpcMainInvokeEvent} from 'electron';

const showToast = (
  event: IpcMainEvent | IpcMainInvokeEvent,
  text: string,
  mode: 'info' | 'warning' | 'success' | 'error' = 'info',
) => {
  event.sender.send('show-toast', text, mode);
};

export default showToast;
