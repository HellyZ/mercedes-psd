const modalBtns = document.querySelectorAll('.more');
const modals = document.querySelectorAll('.modal');

modalBtns.forEach((btn) => {
  btn.addEventListener('click', () => {
    modals.forEach((modal) => modal.classList.remove('hidden'))
  })
})

modals.forEach((modal) => {
  modal.addEventListener('click', (event) => {
    const target = event.target
  
    if (target.classList.contains('overlay') || target.classList.contains('modal__close')) {
      modal.classList.add('hidden');
    } 
  })
})

