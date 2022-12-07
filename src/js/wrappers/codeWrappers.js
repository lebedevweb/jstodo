function setListener(element, type, handler) {
  if (element) {
    element.addEventListener(type, handler, false);
  }
}

function removeListener(element, type, handler) {
  if (element) {
    element.removeEventListener(type, handler, false);
  }
}

function removeClass(element, value) {
  if (element) {
    element.classList.remove(value);
  }
}

function addClass(element, value) {
  if (element) {
    if (typeof value === 'string') {
      element.classList.add(value);
    }
    if (typeof value === 'object') {
      value.forEach((val) => {
        element.classList.add(val);
      });
    }
  }
}

function toggleClass(element, value) {
  if (element) {
    element.classList.toggle(value);
  }
}

function sendRequest(method, url, data) {
  const xhr = new XMLHttpRequest();
  xhr.open(method, url, true);
  xhr.send(data);
}

export {
  setListener, removeListener, addClass, removeClass, toggleClass, sendRequest,
};
