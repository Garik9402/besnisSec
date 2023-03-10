const popupOverlay = document.querySelector('.popup-menu__overlay')
const burger = document.querySelector('.header__burger')
const menuItems = document.querySelectorAll('.menu-item')
const swipeClose = document.querySelector('.popup-menu__swipe')
burger.addEventListener('click', openModal)
function openModal() {
   popupOverlay.classList.add('active')
   document.body.style.overflow = 'hidden'
}


function closeModal() {
   popupOverlay.classList.remove('active')
   document.body.style.overflow = 'visible'
}
popupOverlay.addEventListener('click', (e) => {
   if (e.target === popupOverlay) {
      closeModal()
   }
})
menuItems.forEach(el => {
   el.addEventListener('click', () => {
      closeModal()
   })
})
swipeClose.addEventListener('swiped-down', function (e) {
   closeModal()

});

swipeClose.addEventListener('click', function (e) {
   closeModal()

});