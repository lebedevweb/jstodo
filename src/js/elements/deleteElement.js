import { setListener } from '../wrappers/codeWrappers';

export default function deleteElement() {
  const remove = document.querySelectorAll('.js-remove');

  if (remove) {
    remove.forEach((e) => {
      setListener(e, 'click', () => {
        const data = JSON.parse(localStorage.todo);
        const article = e.parentNode.parentNode;
        const { id } = e.parentNode.parentNode;

        article.remove();
        delete data.items[id];
        localStorage.todo = JSON.stringify(data);
      });
    });
  }
}
