// console.log(200);

import addButton from './js/navbar/addButton';
import discardPopup from './js/popup/discardPopup';
import toDoForm from './js/popup/toDoForm';
import initData from './js/LocalStorage/initData';
import deleteElement from "./js/elements/deleteElement";

initData();
addButton();
discardPopup();
toDoForm();
deleteElement();
