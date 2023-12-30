const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const allHeaderLinks = document.querySelectorAll('.header-links');

function toggleHamburger() {
  hamburger.classList.toggle('active');
  navLinks.classList.toggle('activated');
}

function closeMenu() {
  hamburger.classList.remove('active');
  navLinks.classList.remove('activated');
}

function scrollIntoView(e) {
  e.preventDefault();
  const targetId = this.getAttribute('href').substring(1);
  const targetElement = document.getElementById(targetId);

  if (targetElement) {
    targetElement.scrollIntoView({
      behavior: 'smooth',
    });
  }
}

hamburger.addEventListener('click', toggleHamburger);

navLinks.addEventListener('click', (event) => {
  event.preventDefault();
  closeMenu();
});

const scrollTo = document.querySelectorAll('a[href^="#"]');
scrollTo.forEach((clickedNav) => {
  clickedNav.addEventListener('click', scrollIntoView);
});

allHeaderLinks.forEach((link) => {
  link.addEventListener('click', () => {
    allHeaderLinks.forEach((navLink) => {
      navLink.classList.remove('onpage');
    });
    link.classList.add('onpage');
  });
});