// DISCOVER PAGE

const image = document.querySelectorAll('img');
const pimages = document.querySelectorAll('[data-src]');

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

// Local Storage

if (!localStorage.getItem('lastvisit')) {
    localStorage.setItem('lastvisit', Date.now());
    document.getElementById('visit').textContent = 'This is your 1st visit!';
} else {
    // setStyles();
    let prevDate = localStorage.getItem('lastvisit');
    let currDate = Date.now();

    let difference = currDate - prevDate;
        console.log(difference);
        let daysDifference = Math.floor(difference/1000/60/60/24);

    document.getElementById('visit').textContent = daysDifference;

    localStorage.setItem('lastvisit', Date.now());
}

// function setStyles() {
//     let prevDate = localStorage.getItem('lastvisit');
//     let currDate = Date.now();

//     let difference = currDate - prevDate;
//         console.log(difference);
//         let daysDifference = Math.floor(difference/1000/60/60/24);

//     document.getElementById('visit').textContent = daysDifference;

//     localStorage.setItem('lastvisit', Date.now());
// }