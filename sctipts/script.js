 //  burger menu
 let buttonMenu = document.querySelector('.hamburger')
 let navigationMenu = document.querySelector('.header__navigation')
 let gamesElements = document.querySelectorAll('.games__elements')
 let searchCollective = document.querySelectorAll('.aside__search')
 let searchInput = document.querySelector('#search__games')
 let outputGames = document.querySelectorAll('.games__name')
 buttonMenu.addEventListener('click', addMenuBurger)
 function addMenuBurger () {
   buttonMenu.children[0].classList.toggle('hamburger__container-active')
   document.body.classList.toggle('body__close')
   navigationMenu.classList.toggle('header__navigation-active')
 }
 // select
 let selectButton = document.querySelector('.categories__button')
 let select = document.querySelector('.categories__select')
 selectButton.addEventListener("click", openSelect)
 function openSelect() {
    select.classList.toggle('categories__select-active')
 }
 searchInput.addEventListener('input', searchGames)
 function searchGames () {
   outputGames.forEach(item => {
      item.parentElement.parentElement.parentElement.style.display = 'block'
   })
    let value = searchInput.value
    outputGames.forEach(item => {
      if(!item.textContent.toLowerCase().includes(value.toLowerCase())) {
         item.parentElement.parentElement.parentElement.style.display = 'none'
      }
    })
 }
 searchCollective.forEach(item => {
    item.addEventListener('click', () => addSearch(item))
 })
 function addSearch (itemSex) {
   searchCollective.forEach(item => {
      item.style.background = "#fff"
   })
   itemSex.style.background = "#6699FF"
   gamesElements.forEach(item => {
      item.style.display = 'block'
   })
   gamesElements.forEach(item => {
      if(item.dataset.let !== itemSex.dataset.let) {
         item.style.display = 'none'
      }
   })
   if(itemSex.dataset.let === 'all') {
      gamesElements.forEach(item => {
         item.style.display = 'block'
      })
   }
   else if(itemSex.dataset.let === 'new') {
      let rundomNumber = Math.floor(Math.random() * 5 + 1)
      gamesElements.forEach(item => {
         if((item.dataset.let == rundomNumber)) {
            item.style.display = "block"
         }
      })
   }
 }
 let urlButton = document.querySelector('#goUrl')
 urlButton.addEventListener('click', () => {
    window.location = 'page__nolik/index.html'
 })
 // slider comments
 let carouselLine = document.querySelector('.slider__tracker')
 let carouselButton = document.querySelector('.slider__buttons')
 let count = 0
 let carouselLineLength = carouselLine.children.length
 let indents
 carouselButton.addEventListener('click', (e) => rollSlider(e, carouselLine, carouselLineLength))
 function rollSlider(e, carouselLine, carouselLineLength) {
   let width = carouselLine.children[0].offsetWidth
   indents = Number(window.getComputedStyle(document.querySelectorAll('.slider__elements')[1]).marginRight.slice(0, -2))
   const target = e.target
   if (target.id === 'caroosel__prev') {
      if (count === 0) {
         count = carouselLineLength - 2
       } else {
         if (window.matchMedia("(max-width: 1130px)").matches) {
            count--
         } else count = count - 2
       }
   }
   if(target.id === 'caroosel__rev') {
       if (count > carouselLineLength - 3) {
         count = 0;
       } else {
         if (window.matchMedia("(max-width: 1130px)").matches) {
            count++
         } else count = count + 2
       }
   }
     width *= count
     carouselLine.style.transform = `translate(-${width + count * indents}px)`
 }
