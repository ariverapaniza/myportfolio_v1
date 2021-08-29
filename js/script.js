// ================= DARK THEME =====================

const themeButton = document.getElementById('theme-button');
const darkTheme = 'dark-theme'
const iconTheme = 'uil-sun'

// ================= PREVIOUSLY SELECTED TOPIC (checking from local storage)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// ================= We Obtain the current theme that the interface has by validating the dark theme class 

const getCurrentTheme = () => document.body.classList.contains(darkTheme)?'dark':'light'
const getCurrentIcon = () => document.body.classList.contains(iconTheme)?'uil-moon':'uil-sun'

// We need to validate if the user has previously chosen a topic
if(selectedTheme){
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
    themeButton.classList[selectedIcon === 'uil-moon' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button

themeButton.addEventListener('click', () => {
    // ADD or remove the dark/light icon -- icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // we save the theme and the current icon that the user has chosen
    localStorage.setItem('selected-theme', getCurrentTheme() )
    localStorage.setItem('selected-icon', getCurrentIcon() )
})
console.log("THEME SETTING IS WORKING!")

// ================= MENU SHOW AND HIDDEN =====================
const navMenu = document.getElementById('nav-menu')
const navToggle = document.getElementById('nav-toggle')
const navClose = document.getElementById('nav-close')

// ================= MENU SHOW =====================
/* VALIDATE IF THE CONSTANT EXIST */ 
if(navToggle){
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}

// ================= MENU HIDE =====================
/* VALIDATE IF THE CONSTANT EXIST */ 
if(navClose){
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}

console.log("MENU AND SETTING IS WORKING")

// ================= REMOVE MENU PROFILE =====================
const navLink = document.querySelectorAll('.nav__link')

function linkAction() {
    const navMenu = document.getElementById('nav-menu')
    // When we click on the nav__links, we remove the show menu
    navMenu.classList.remove('show-menu')
}

navLink.forEach(n => n.addEventListener('click', linkAction))
console.log("Remove menu profile is working")


// ================= TypeWriter Effect Script =====================

new Typewriter('#typewriter', {
  strings: ['Arturo Rivera Paniza .˙.', 'Programmer,', 'Web-Developer,', 'among other things...'],
  autoStart: true,
  loop: true,
  cursor: "|"
});
console.log("TypeWriter effect script is working")

// ================= Portfolio Swipper Effect Script =====================

var swiper = new Swiper('.blog-slider', {
    spaceBetween: 30,
    effect: 'fade',
    loop: true,
    mousewheel: {
      invert: false,
    },
    // autoHeight: true,
    pagination: {
      el: '.blog-slider__pagination',
      clickable: true,
    }
  });
console.log("Portfolio Swiper effect script is working")


// ================= Scroll Up =====================

function scrollUp() {
  const scrollup = document.getElementById('scroll-up');
  // When the scroll higher than 560 viewpoint / height, then the scroll up icon should appear and on clicking should reach top page
  if(this.scrollY >= 560){
    scrollup.classList.add('show-scroll');
  }
  else {
    scrollup.classList.remove('show-scroll');
  }
  console.log("Scroll Up script is working")
}

window.addEventListener('scroll', scrollUp)


// ================= Scroll Section Active Highlight =====================

const sections = document.querySelectorAll('section[id]')

function scrollActive(){
  const scrollY = window.pageYOffset

  sections.forEach(current => {
    const sectionHeight = current.offsetHeight
    const sectionTop = current.offsetTop - 50;
    sectionId = current.getAttribute('id')

    if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
      document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
    }else{
      document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')

    }
  })


  console.log("Section Highlight script is working")

}
window.addEventListener('scroll', scrollActive)
