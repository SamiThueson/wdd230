const image = document.querySelectorAll('img');

// const io = new IntersectionObserver (
//     (entries, io) => {
//         entries.forEach(entry => {
//             console.log(entries);
//         })
//     },
//     {
//         threshold: [.5]
//     }
// )

// image.forEach(image => {
//     io.observe(image);
// })

const pimages = document.querySelectorAll('[data-src]');
// const options = {
//     threshold: 1,
//     rootMargin: 
// }

function preloadImage(img){
    const source = img.getAttribute('data-src');
    if (!source) {
        return;
    }

    img.src = source;
}

const io = new IntersectionObserver (
    (entries, io) => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            } else {
                preloadImage(entry.target);
                io.unobserve(entry.target);
            }
        })
    },
    {
        threshold: [.5]
    }
);

pimages.forEach(image => {
    io.observe(image);
})