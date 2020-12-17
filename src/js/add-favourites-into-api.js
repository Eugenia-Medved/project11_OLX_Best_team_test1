// Элементы DOM-дерева
const mainRenderPageEl = document.querySelector('body');
// Переменные для ввода данных
const URL = 'https://callboard-backend.herokuapp.com/';
const keyPart = 'call/favourite/';
const key = localStorage.getItem('accessToken');
const options = {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    Authorization: `${key}`,
  },
};
// Вызов функции добавления товара в Избранное
mainRenderPageEl.addEventListener('click', onClick);

// Функция добавления карточки товара на API-сервер
function addFavorite(URL, keyPart, id, options) {
  return fetch(`${URL}${keyPart}${id}`, options)
    .then(response => response.json())
    .then(post => alert('This product is already in favorites'))
    .catch(error => alert('This product is already in favorites'));
}
// Функция добавления карточки товара в избранное по клику на сердечко
function onClick(evt) {
  if (evt.target.hasAttribute('data-favorite-button')) {
    const id = evt.target.closest('[data-item]').getAttribute('id');
    addFavorite(URL, keyPart, id, options);


  // Код Белика
  //   На кнопку добавления вешаем data-favorite-button на нее ловим событие 
  //   и на кнопку добавляем data-marked='false' 
  //   if (evt.target.dataset.marked === 'false') {
  //     const id = evt.target.closest('[data-item]').getAttribute('id');
  //     // на все карточки возле класса card-item вешаем  data-item=data-item и в шаблонах тоже, при помощи этого атрибута будем забирать id
  //     addFavorite(URL, keyPart, id, options);
  //   при POST меняем на true и в шаблоне favourites-section сразу ставим true 
  //     evt.datdset.marked='true'; 
       
  //  и вот какая будет функция на удаление 
  // if (evt.target.dataset.marked === 'true') {
  //   const id = evt.target.closest('[data-item]').getAttribute('id');
  //   deleteFavoriteItem(URL, keyPart, id, options);
  //   evt.target.dataset.marked='false';
  
  //  и в обеих функциях можем повесить/убрать класс на svg .

  // // }
  }
}
