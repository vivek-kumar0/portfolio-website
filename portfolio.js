// Menu icon
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
  menuIcon.classList.toggle('bx-x');
  navbar.classList.toggle('active');
};

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if (top >= offset && top < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove('active');
        document
          .querySelector('header nav a[href*=' + id + ']')
          .classList.add('active');
      });
    }
  });

  // Sticky navbar
  let header = document.querySelector('.header');
  header.classList.toggle('sticky', window.scrollY > 100);

  // Remove menu icon and navbar when clicking a navbar link (on scroll)
  if (navbar.classList.contains('active')) {
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
  }
};

// Dark mode
let darkModeIcon = document.querySelector('#darkMode-icon');

darkModeIcon.onclick = () => {
  darkModeIcon.classList.toggle('bx-sun');
  document.body.classList.toggle('dark-mode');
};

// Scroll Reveal animations
ScrollReveal({
  reset: true,
  distance: '80px',
  duration: 2000,
  delay: 200,
});

ScrollReveal().reveal('.home-content , .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img img , .services-container , .projects-box , .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1 , .about-img img , .projects-box , .contact form', { origin: 'left' });
ScrollReveal().reveal('.home-content h3 , .home-content h3 p , .about-content , .projects-box , .contact form', { origin: 'right' });

// Resume download feature
const downloadCv = document.querySelector('#downloadCv');

if (downloadCv) {
  downloadCv.addEventListener('click', (e) => {
    e.preventDefault();
    const link = document.createElement('a');
    link.href = 'files/resume.pdf';     // update with your actual PDF path
    link.download = 'My_Resume.pdf';    // desired filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  });
}
