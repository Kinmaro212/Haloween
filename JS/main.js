/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
 navToggle = document.getELementById(' nav-toggle'),
  navclose = document.getElementById( 'nav-close') 
  /* Menu show */ 
if(navToggle) { 
    navToggle. addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    }) 
}
/* Menu hidden */ 
    if(navClose) { navClose. addEventListener('click', () =>{
        navMenu. classList.remove('show-menu')
    })
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document. querySelectorALL('.nav__link')

 const linkAction = () =>{ 
    const navMenu = document.getElementById( 'nav-menu')

navMenu. classList.remove(' show-menu')
}
navLink-forEach(n => n.addEventListener('click', LinkAction))


/*=============== ATROPOS JS ===============*/
// Initialize
const myAtropos = Atropos({
    el: '.home__images',
    shadow: false,
    highlight: false,

  });

/*=============== ADD SHADOW HEADER ===============*/