import { addClass, removeClass, setListener } from '../wrappers/codeWrappers';

export default function addButton() {
  const button = document.querySelector('.js-add-button');
  const popup = document.querySelector('.js-popup');

  if (button) {
    setListener(button, 'click', () => {
      removeClass(popup, 'hidden');
      addClass(popup, 'fixed');
    });
  }
}
