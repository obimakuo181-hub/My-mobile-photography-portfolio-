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
 
      // show scroll up

      // scroll selection active link 

      // scroll reveal animation

//     Animation JS  

// ---- THREE.JS 3D CAMERA SETUP ----

// 1. Container
const container = document.getElementById('camera3d');

// 2. Scene
const scene = new THREE.Scene();

// 3. Camera
const camera = new THREE.PerspectiveCamera(
  75,
  container.clientWidth / container.clientHeight,
  0.1,
  1000
);
camera.position.set(0, 1, 5);

// 4. Renderer
const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
renderer.setSize(container.clientWidth, container.clientHeight);
renderer.setPixelRatio(window.devicePixelRatio);
container.appendChild(renderer.domElement);

// 5. Lights
const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
scene.add(ambientLight);

const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
directionalLight.position.set(5, 5, 5);
scene.add(directionalLight);

// 6. Load the 3D camera model
const loader = new THREE.GLTFLoader();
let cameraModel;

loader.load(
  '/assets/models/camera.glb', // ⚡ Path must match your project structure
  function (gltf) {
    cameraModel = gltf.scene;
    cameraModel.scale.set(30,30, 30); // Adjust size
    scene.add(cameraModel);
    console.log('MODEL LOADED ✅');
  },
  undefined,
  function (error) {
    console.error('MODEL LOAD ERROR ❌', error);
  }
);

// 7. Mouse tracking
let mouseX = 0;
let mouseY = 0;
document.addEventListener('mousemove', (event) => {
  mouseX = (event.clientX / window.innerWidth - 0.5) * 2;
  mouseY = (event.clientY / window.innerHeight - 0.5) * 2;
});

// 8. Animate
function animate() {
  requestAnimationFrame(animate);

  if (cameraModel) {

    const time = Date.now() * 0.001;

    // 🌊 Floating effect (smooth hover)
    cameraModel.position.y = Math.sin(time) * 0.25;

    // 🔄 Slow automatic rotation (showcase mode)
    cameraModel.rotation.y += 0.003;

    // 🎯 Smooth mouse follow (blended with auto rotation)
    cameraModel.rotation.y += (mouseX * 0.5 - cameraModel.rotation.y) * 0.03;
    cameraModel.rotation.x += (-mouseY * 0.3 - cameraModel.rotation.x) * 0.03;

    // 🎬 Subtle natural tilt
    cameraModel.rotation.z = Math.sin(time * 0.5) * 0.03;
  }

  renderer.render(scene, camera);
}
animate();

// 9. Handle window resize
window.addEventListener('resize', () => {
  camera.aspect = container.clientWidth / container.clientHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(container.clientWidth, container.clientHeight);
});