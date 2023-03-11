import { addClass, removeClass, setListener } from '../wrappers/codeWrappers';

export default function discardPopup() {
  const close = document.querySelector('.js-close-toDoForm');
  const popup = document.querySelector('.js-popup');

  if (close) {
    setListener(close, 'click', () => {
      removeClass(popup, 'fixed');
      addClass(popup, 'hidden');
    });
  }
}
