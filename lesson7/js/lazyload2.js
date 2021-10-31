//get images
const images2load = document.querySelectorAll("img[data-src]");
function preloadImage(img) {
    const src = img.getAttribute("data-src");
    if(!src) {
        return;
    }

    img.src = src
}

//optinal images options in observer
const imgoptions = {
    threshold: 0,
    rootMargin: "0px 0px -40px 0px"
};

// const loadimg = (image) => {
//     image.setAttribute('src', image.getAttribute('data-src'));
//     image.onload = () => {image.removeAttribute('data-src');};
// };

// if('IntersectionObserver' in window) {
const observer = new IntersectionObserver((items, observer) => {
    items.forEach(item => {
        if(!item.isIntersecting) {
            return;
        } else{
            preloadImage(item.target);
            observer.unobserve(item.target);
        }
    })
},imgoptions);
images2load.forEach((img) => {
    observer.observe(img);
});
// } else {
    // images2load.forEach((img) => {
    //     loadimg(img);
    // });
// }