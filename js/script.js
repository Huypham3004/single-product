const headerBars = document.querySelector('.header-wrap__bar')
const overlay = document.querySelector('.header-overlay')
const headerContent = document.querySelector('.header-wrap__content')

headerBars.addEventListener('click', () => {
    overlay.classList.toggle('show-overlay')
    headerContent.classList.toggle('show-menu')
})

overlay.addEventListener('click', () => {
    overlay.classList.remove('show-overlay')
    headerContent.classList.remove('show-menu')
})
