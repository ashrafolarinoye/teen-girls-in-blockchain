const hamburger = document.querySelector('.hamburger');
const navLink = document.querySelector('.nav__link');

hamburger.addEventListener('click', () => {
  navLink.classList.toggle('hide');
});

const container = document.querySelector('.container');
const windowHeight = window.innerHeight;

function animateOnScroll() {
  const containerTop = container.getBoundingClientRect().top;
  if (containerTop < windowHeight) {
    container.style.opacity = 1;
    container.style.transform = 'translateY(0)';
  }
}

window.addEventListener('scroll', animateOnScroll);


