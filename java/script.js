/*=====menue icon navbar===*/
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}
/*.............scroll section active link........*/
window.onscroll = ()=>{
    /*.............sticky navbar........*/
    let headre=document.querySelector('.header');
headre.classList.toggle('sticky',window.scrollY >150);
/*=====remove menue icon navbar when click navbar link(scroll)===*/
menuIcon.classList.remove('bx-x');
navbar.classList.remove('active');
}
/*=====dark light mode===*/
let darkModeIcon=document.querySelector('#darkmoon-icon');
darkModeIcon.onclick = () => {
    darkModeIcon.classList.toggle('bx-sun');
    document.body.classList.toggle('dark-mode');
};
/*=====scroll reveal===*/
ScrollReveal({
    //reset: true,
    distance:'400px',
    duration:3000,
    delay:100
});
ScrollReveal().reveal('.home-content, .heading', { origin:'top' });
ScrollReveal().reveal('.home-img img, .portfolio-box', { origin:'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img img, .about-content', { origin:'left' });
ScrollReveal().reveal('.home-content h3, .home-content p', { origin:'right' });