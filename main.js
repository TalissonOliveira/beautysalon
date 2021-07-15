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

/* Header shadow */
function changeHeaderWhenScroll() {
    const header = document.querySelector('#header')
    const navHeight = header.offsetHeight /* offsetHeight -> deslocamento da altura */

    if (window.scrollY >= navHeight) {
        header.classList.add('scroll')
    } else {
        header.classList.remove('scroll')
    }
}

/* Testimonials carousel slider swiper */
const swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    pagination: {
      el: '.swiper-pagination',
    },
    mousewheel: true,
    keyboard: true,
    breakpoints: {
        767: {
            slidesPerView: 2,
            setWrapperSize: true,
        }
    }
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
    #contact .text, #contact .links,
    footer .brand, footer .social
    `,
    { interval: 100 }
)

/* Back to top */
function backToTop() {
    const backToTopButton = document.querySelector('.back-to-top')

    if (window.scrollY >= 700) {
        backToTopButton.classList.add('show')
    } else {
        backToTopButton.classList.remove('show')
    }
}

/* When scroll */
window.addEventListener('scroll', () => {
    changeHeaderWhenScroll()
    backToTop()
})