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
const header = document.querySelector('#header')
const navHeight = header.offsetHeight /* offsetHeight -> deslocamento da altura */
function changeHeaderWhenScroll() {
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
const backToTopButton = document.querySelector('.back-to-top')
function backToTop() {
    if (window.scrollY >= 700) {
        backToTopButton.classList.add('show')
    } else {
        backToTopButton.classList.remove('show')
    }
}


/* Active menu in current section */

const sections = document.querySelectorAll('main section[id]') // Pegar todas as seções que contém id
function activateMenuAtCurrentSection() {
    const checkpoint = window.pageYOffset + (window.innerHeight / 8) * 4

    for (const section of sections) {
        const sectionTop = section.offsetTop // Topo da section
        const sectionHeight = section.offsetHeight // Altura da section
        const sectionId = section.getAttribute('id')

        const checkpointStart = checkpoint >= sectionTop // Definir checkpoint inicial
        const checkpointEnd = checkpoint <= sectionTop + sectionHeight // Definir checkpoint final

        if (checkpointStart && checkpointEnd) { // Entre os dois checkpoints
            document
                .querySelector('nav ul li a[href*=' + sectionId + ']')
                .classList.add('active')
        } else {
            document
                .querySelector('nav ul li a[href*=' + sectionId + ']')
                .classList.remove('active')
        }
    }

}

/* When scroll */
window.addEventListener('scroll', () => {
    changeHeaderWhenScroll()
    backToTop()
    activateMenuAtCurrentSection()
})
