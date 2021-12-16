const menuButton = document.querySelector('.ham');
const mainNav = document.querySelector('.navlist')

menuButton.addEventListener('click', () => {mainNav.classList.toggle('responsive')}, false);

// to solve the mid resizing issue with responsive class
window.onresize = () => {if (window.innerWidth > 760)
mainNav.classList.remove('responsive')};

const gridbtn = document.querySelector('.grid');
const listbtn = document.querySelector('.list');
const cardview = document.querySelector('.view')

gridbtn.addEventListener('click', () => {cardview.classList.toggle('gridengage')}, false);

listbtn.addEventListener('click', () => {cardview.classList.remove('gridengage')}, true);
listbtn.addEventListener('click', () => {cardview.classList.toggle('listengage')}, false);

gridbtn.addEventListener('click', () => {cardview.classList.remove('listengage')}, false);