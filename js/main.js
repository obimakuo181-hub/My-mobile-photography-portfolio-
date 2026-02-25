      // show menu
const navMenu = document.getElementById('nav__menu'),
      navToggle = document.getElementById('nav__toggle'),
      navClose = document.getElementById('nav__close')

      // menu show
 if(navToggle){
    navToggle.addEventListener('click', ()=>{
      navMenu.classList.add('show-menu')
    })
 }     

      // menu hidden
if(navClose){
   navClose.addEventListener('click', ()=>{
    navMenu.classList.remove('show-menu')
   } )
}      
      // remove menu mobile
const navLink = document.querySelectorAll('.nav__link')

const linkAction = ()=> {
  const navMenu  = document.getElementById('nav__menu')
  // when click on nav__link to remove the show-menu
  navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

      // home typed js
const typedHome = new Typed('#home__typed', {
    strings: ['Mobile Photographer','Outdoor','Indoor',],
    typedSpeed: 80, 
    backSpeed: 40,
    backDelay: 2000,
    loop: true,
    cursorChar: '_', 
});
      // add shadow header
const shadowHeader = ()=> {
    const header = document.getElementById("header")
    // add a class if the button offset is greater than 50 of the viewport
    this.scrollY >= 50 ? header.classList.add('shadow-header')
                       : header.classList.remove('shadow-header')     
}
window.addEventListener('scroll', shadowHeader)

// EmailJS initialization (ADD THIS ONCE)
emailjs.init('hN5HAIFiM2Jd1U2tw');

      // contact email js
const contactForm = document.getElementById('contact__form'),
      contactMessage = document.getElementById('contact__message')

const sendEmail = (e) => {
  e.preventDefault()

  emailjs.sendForm(
    'service_no8txgr',
    'template_0ficz0f',
    '#contact__form'
  )
  .then(() => {
    contactMessage.textContent = 'Message sent successfully ✅'
    contactForm.reset()

    setTimeout(() => {
      contactMessage.textContent = ''
    }, 5000)
  })
  .catch((error) => {
    contactMessage.textContent = 'Message not sent ❌'
    console.error(error)
  })
}

contactForm.addEventListener('submit', sendEmail)
contactForm.addEventListener('submit', sendEmail)   
      // show scroll up

      // scroll selection active link 

      // scroll reveal animation