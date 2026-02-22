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
const navLink = document.querySelectorAll('nav__link')

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

      // contact email js

      // show scroll up

      // scroll selection active link 