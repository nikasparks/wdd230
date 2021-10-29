//get images
const images2load = document.querySelectorAll("img[data-src]");

//optinal images options in observer
const imgoptions = {
    threshold: 100,
    rootMargin: "500px"
};

const loadimg = (image) => {
    image.setAttribute('src', image.getAttribute('data-src'));
    image.onload = () => {image.removeAttribute('data-src');};
};

if('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((items, observer) => {
        items.forEach(item => {
            if(item.isIntersecting) {
                loadimg(item.target);
                observer.unobserve(item.target);
            }
        });
    } );
    images2load.forEach((img) => {
        observer.observe(img);
    });
} else {
    images2load.forEach((img) => {
        loadimg(img);
    });
}