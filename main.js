window.addEventListener('scroll', onScroll)

onScroll()

function onScroll() {
  showNavOnScroll()
  showBackToTopButtonOnScroll()
  activateMenuAtCurrentSection(home)
  activateMenuAtCurrentSection(services)
  activateMenuAtCurrentSection(testimonials)
  activateMenuAtCurrentSection(about)
  activateMenuAtCurrentSection(contact)
}

function activateMenuAtCurrentSection(section) {
  const targetLine = scrollY + innerHeight / 2

  // VERIFICAR SE A SEÇÃO PASSOU DA LINHA
  // quais dados vou precisar ?

  const sectionTop = section.offsetTop
  const sectionHeight = section.offsetHeight

  const sectionTopReachOrPassedTargetLine = targetLine >= sectionTop

  //VERIFICAR SE A BASE ESTÁ ABAIXO DA LINHA ALVO
  //quais dadados vou precisar ?

  const sectionEndsAt = sectionTop + sectionHeight

  const sectionEndPassedTargetLine = sectionEndsAt <= targetLine

  //LIMITES DA SEÇÃO

  const sectionBoundaries =
    sectionTopReachOrPassedTargetLine && !sectionEndPassedTargetLine

  const sectionId = section.getAttribute('id')
  const menuElement = document.querySelector(`.menu a[href*=${sectionId}]`)

  menuElement.classList.remove('active')

  if (sectionBoundaries) {
    menuElement.classList.add('active')
  }
}

function showNavOnScroll() {
  if (scrollY > 0) {
    navigation.classList.add('scroll')
  } else {
    navigation.classList.remove('scroll')
  }
}

function showBackToTopButtonOnScroll() {
  if (scrollY > 260) {
    backToTopButton.classList.add('show')
  } else {
    backToTopButton.classList.remove('show')
  }
}

function openMenu() {
  document.body.classList.add('menuExpanded')
}

function closeMenu() {
  document.body.classList.remove('menuExpanded')
}

// SWIPER REVEAL
const swiper = new Swiper('.swiper', {
  slidesPerview: 1,
  autoplay: {
    delay: 5000
  },
  pagination: {
    el: '.swiper-pagination'
  },
  mousewheel: true,
  keyboard: true
})

ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 800
}).reveal(`#home, 
           #home img, 
           #home .stats, 
           #services, 
           #services header, 
           #services .card,
           #testimonials, 
           #testimonials header,
           #testimonials .testimonial,
           #about,
           #about header,
           #about .content,
           #contact, 
           #contact header,
           #contact .content,
           footer, 
           footer a, 
           footer p,
           footer ul`)
