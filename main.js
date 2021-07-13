const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')

for (const element of toggle) {
    element.addEventListener('click', () => {
        nav.classList.toggle('show')
    })
}

const links = document.querySelectorAll('nav ul li a')

for (const link of links) {
    link.addEventListener('click', () => {
        nav.classList.remove('show')
    })
}

const header = document.querySelector('#header')
const navHeight = header.offsetHeight /* offsetHeight -> deslocamento da altura */

window.addEventListener('scroll', () => {
    if (window.scrollY >= navHeight) {
        header.classList.add('scroll')
    } else {
        header.classList.remove('scroll')
    }
})

const swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,

    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
    mousewheel: true,
    keyboard: true,
    loop: true
  });

/* Scroll Reveal */
const scrollReveal = ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 700,
    reset: true,
})

scrollReveal.reveal(
    `#home .text, #home .image,
    #about .image, #about .text,
    #services header, #services .card,
    #testimonials header, #testimonials .testimonials,
    #contact .text, #contact .links
    `,
    { interval: 100 }
)