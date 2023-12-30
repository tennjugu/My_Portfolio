const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const sections = document.querySelectorAll('section[id]');

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

function scrollActive() {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    const sectionId = current.getAttribute('id');

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document.querySelector(`.nav-links a[href*=${sectionId}]`).classList.add('onpage');
    } else {
      document.querySelector(`.nav-links a[href*=${sectionId}]`).classList.remove('onpage');
    }
  });
}

window.addEventListener('scroll', scrollActive);