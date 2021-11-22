const menuButton = document.querySelector('.ham');
const mainNav = document.querySelector('.navlist')

menuButton.addEventListener('click', () => {mainNav.classList.toggle('responsive')}, false);

// to solve the mid resizing issue with responsive class
window.onresize = () => {if (window.innerWidth > 760)
mainNav.classList.remove('responsive')};