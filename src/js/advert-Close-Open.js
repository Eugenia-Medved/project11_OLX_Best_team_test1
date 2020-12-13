const refsAdvert={
    advertTitle: document.querySelector('.js-advert'),
    advertPrice: document.querySelector('.js-advert-price'),
    openModal: document.querySelector('.js-advert-open'),
    advertCloseModal: document.querySelector('.js-advert-close'),
    advertIMG: document.querySelector('.js-advert-img'),
    sellerName: document.querySelector('.js-seller-name'),
    sellerTime: document.querySelector('.js-seller-time'),
    sellerTel: document.querySelector('.js-seller-tel'),
  }
console.log(refsAdvert.advertPrice);
// console.log(refsAdvert.openModal);
// console.log(refsAdvert.advertCloseModal);

// refsAdvert.cardAdvert.addEventListener('click', addModalAdvert);
document.addEventListener('click', addModalAdvert)

// // закрытие модалки через кнопку
refsAdvert.advertCloseModal.addEventListener('click', modalClose);
 
// закрытие модалки по Esc
document.addEventListener('keydown', modalEscClose);

// зактрытие по оверлэю
refsAdvert.openModal.addEventListener('click', onModalBackdropClick);

// Функция открытия модалки
function addModalAdvert(event) {
  let target = event.target;
  // console.dir(target.parentElement.children[1].textContent);
    if (target.parentElement.classList[0] ==='card-item') {
      // обнуление картинки
      refsAdvert.advertIMG.src = '/';

      changeImgOnAdvert(target);
       // подставлять значения цены 
      changeAdvertTitle(target);
      
      // открыть модалку
      refsAdvert.openModal.classList.remove('is-hidden');
      
     
     
      // console.dir(target.parentElement);
      // рендерить и подставлять фотки под основной картинкой.

    }
}
  
  // Функции закрытия модалки
  function modalClose() {
    refsAdvert.openModal.classList.add('is-hidden');
  }
  function modalEscClose(evt) {
    if (evt.key === "Escape") {
      modalClose();
    }
  }
  function onModalBackdropClick(evt) {
    // console.dir(evt.target.attributes.class.value);
    // console.log(evt.target.dataset.action);
    if (evt.target.attributes.class.value.includes("add-backdrop")){
      modalClose();
    }
  } 
  // функция получения и подставления адруса картинки 
  function changeImgOnAdvert(target) {
    // Брать значение картинки и переподставлять в свою в модалке
    refsAdvert.advertIMG.src = target.parentElement.firstElementChild.firstElementChild.currentSrc;
  }
  function changeAdvertTitle(target) {
    let item = target.parentElement.children;
    
    refsAdvert.advertTitle.textContent='';

    // console.log(refsAdvert.advertPrice.textContent);

    refsAdvert.advertPrice.textContent='';
    // console.log(refsAdvert.advertPrice.textContent);
    refsAdvert.advertTitle.textContent = item[1].textContent;

    if(item[2].children.length === 2 &&
       item[2].children[1].textContent !=="" ){
        //  console.log(item[2].children[1].textContent);
      refsAdvert.advertPrice.textContent = item[2].children[1].textContent;
    } else {
      refsAdvert.advertPrice.textContent= item[2].children[0].textContent;
    }
      
    
    // console.dir(refsAdvert.advertTitle.textContent);
  }