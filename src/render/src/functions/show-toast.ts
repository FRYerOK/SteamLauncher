import toastr from 'toastr';

const showToast = (text: string, mode: 'info' | 'warning' | 'success' | 'error' = 'info') => {
  const title = undefined;
  const options: ToastrOptions = {
    positionClass: 'toast-bottom-right',
    timeOut: 2000,
  };
  switch (mode) {
    case 'info':
      toastr.info(text, title, options);
      break;
    case 'warning':
      toastr.warning(text, title, options);
      break;
    case 'success':
      toastr.success(text, title, options);
      break;
    case 'error':
      toastr.error(text, title, options);
      break;
    default:
      break;
  }
};

export default showToast;
