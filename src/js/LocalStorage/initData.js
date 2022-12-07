import createElement from '../elements/createElement';

export default function initData() {
  const { todo } = localStorage;
  const body = document.querySelector('.js-cards-body');

  if (todo === undefined) {
    localStorage.setItem = 'todo';
    localStorage.todo = JSON.stringify({
      lastId: -1,
      items: {},
    });
  }
  if (localStorage.todo > -1) {
    const data = JSON.parse(todo);
    // eslint-disable-next-line guard-for-in
    for (const key in data.items) {
      // eslint-disable-next-line max-len
      body.append(createElement(key, data.items[key].text, data.items[key].created, data.items[key].expires));
    }
  }
}
