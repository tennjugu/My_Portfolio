const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

function toggleHamburger() {
  hamburger.classList.toggle('active');
  navLinks.classList.toggle('activated');
}

function closeMenu() {
  hamburger.classList.remove('active');
  navLinks.classList.remove('activated');
}

hamburger.addEventListener('click', toggleHamburger);

navLinks.addEventListener('click', (event) => {
  event.preventDefault();
  closeMenu();
});
