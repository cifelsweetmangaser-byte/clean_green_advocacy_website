const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
menuToggle.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(isOpen));
});
navLinks.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  navLinks.classList.remove('open');
  menuToggle.setAttribute('aria-expanded', 'false');
}));
document.querySelector('#contactForm').addEventListener('submit', event => {
  event.preventDefault();
  const name = document.querySelector('#name').value.trim();
  document.querySelector('#formStatus').textContent =
    `Thanks, ${name}! This demo form does not send or save messages.`;
  event.target.reset();
});