import { addClass } from '../wrappers/codeWrappers';

export default function createElement(id, text, created, expires) {
  const textElements = [text, created, expires];
  const titles = ['What to do', 'Creted', 'Expires'];
  const article = document.createElement('article');
  article.setAttribute('id', id);
  addClass(article, ['shadow-lg', 'rounded-md', 'mb-7', 'bg-slate-50', 'p-4']);

  const title = document.createElement('h2');
  addClass(title, ['font-semibold', 'text-2xl', 'mb-3']);
  title.innerText = `Todo #${Number(id) + 1}`;
  article.append(title);

  const wrapper = document.createElement('div');
  addClass(wrapper, ['flex', 'justify-between', 'items-center']);
  article.append(wrapper);

  textElements.forEach((e, index) => {
    const wrap = document.createElement('div');
    if ( isNaN(Date.parse(e)) ) {
      addClass(wrap, ['w-full', 'box-border']);
    } else {
      addClass(wrap, ['min-w-[180px]', 'box-border', 'px-3']);
    }


    const wrapT = document.createElement('h3');
    addClass(wrapT, 'font-medium');
    wrapT.innerText = titles[index];
    wrap.append(wrapT);

    const wrapP = document.createElement('p');
    // eslint-disable-next-line no-restricted-globals
    wrapP.innerText = (isNaN(Date.parse(e))) ? e : `${new Date(e).toLocaleDateString()} ${new Date(e).toLocaleTimeString()}`;
    wrap.append(wrapP);

    wrapper.append(wrap);
  });

  const del = document.createElement('div');
  addClass(del, ['max-w-[32px]', 'p-2', 'cursor-pointer', 'js-remove']);
  wrapper.append(del);

  const iconSvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  addClass(iconSvg, ['w-16', 'h-16', 'fill-rose-700']);
  iconSvg.setAttribute('viewBox', '0 0 448 512');
  del.append(iconSvg);

  const iconPath = document.createElementNS('http://www.w3.org/2000/svg', 'path');
  iconPath.setAttribute('d', 'M432 32H312l-9.4-18.7A24 24 0 0 0 281.1 0H166.8a23.72 23.72 0 0 0-21.4 13.3L136 32H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16zM53.2 467a48 48 0 0 0 47.9 45h245.8a48 48 0 0 0 47.9-45L416 128H32z');
  iconSvg.append(iconPath);

  return article;
}
