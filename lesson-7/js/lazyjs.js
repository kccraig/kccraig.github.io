
// let imagesToLoad = document.querySelectorAll('img[data-src]');
// const loadImages = (image) => {
//     image.setAttribute('src', image.getAttribute('data-src'));
//     image.onload = () => {
//         image.removeAttribute('data-src');
//     };
// };

// imagesToLoad.forEach((img) => {
//     loadImages(img);
// });

// if ('IntersectionObserver' in window) {
//     const observer = new IntersectionObserver((items, observer) => {
//         items.forEach((item) => {
//             if (item.isIntersection) {
//                 loadImages(item.target);
//                 observer.unobserve(item.target);
//             }
//         });
//     });
//     imagesToLoad.forEach((img) => {
//         observer.observe(img);
//     });
// } else {
//     imagesToLoad.forEach((img) => {
//         loadImages(img);
//     });
// }
// get all imgs with data-src attribute
const imagesToLoad = document.querySelectorAll("img[data-src]");

// optional parameters being set for the IntersectionalObserver
const imgOptions = {
  threshold: 0.5
};

const loadImages = (image) => {
  image.setAttribute('src', image.getAttribute('data-src'));
  image.onload = () => {
    image.removeAttribute('data-src');
  };
};

// first check to see if Intersection Observer is supported
if ('IntersectionObserver' in window) {
  const imgObserver = new IntersectionObserver((items, observer) => {
    items.forEach((item) => {
      if (item.isIntersecting) {
        loadImages(item.target);
        imgObserver.unobserve(item.target);
      }
    });
  }, imgOptions);

  // loop through each img and check status and load if necessary
  imagesToLoad.forEach((img) => {
    imgObserver.observe(img);
  });
} else { // just load ALL images if not supported
  imagesToLoad.forEach((img) => {
    loadImages(img);
  });
}