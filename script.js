let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');


window.onscroll= () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id=sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });
    let header= document.querySelector('header');

    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');

    header.classList.toggle('sticky', window.scrollY > 100);


};

ScrollReveal({
    distance: '80px',
    duration:2000,
    delay:200
});

ScrollReveal().reveal('.home-content, .heading', { orgin: 'top' });
ScrollReveal().reveal('.services-container, .portfolio-box, .contact form', { orgin: 'bottom' });
ScrollReveal().reveal(' .home-content h1, .about-img, .portfolio-box, .home-img', { orgin: 'left' });
ScrollReveal().reveal(' .home-content p, .about-content', { orgin: 'right' });


const typed = new Typed('.multiple-text', {
    strings: ['Frontend Developer in progress','Friend to many','Student at HCHS','A Person planning to make the impossible possible!'],
    typeSpeed:125,
    backSpeed:135,
    backDelay:1000,
    loop: true
});

    
