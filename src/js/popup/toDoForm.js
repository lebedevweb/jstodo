import { addClass, removeClass, setListener } from '../wrappers/codeWrappers';
import createElement from '../elements/createElement';

export default function toDoForm() {
  const form = document.querySelector('.js-toDoForm');
  const popup = document.querySelector('.js-popup');
  const body = document.querySelector('.js-cards-body');

  if (form) {
    setListener(form, 'submit', (e) => {
      e.preventDefault();
      const data = JSON.parse(localStorage.todo);
      const created = new Date().toUTCString();
      const expires = form.expires.value;

      data.lastId += 1;
      data.items[data.lastId] = {
        text: form.text.value,
        created: `${created}`,
        expires: `${expires}`,
      };
      localStorage.todo = JSON.stringify(data);

      body.append(createElement(data.lastId, form.text.value, created, expires));

      removeClass(popup, 'fixed');
      addClass(popup, 'hidden');
    });
  }
}
