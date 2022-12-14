// Local Storage
if (!localStorage.getItem('lastvisit')) {
    localStorage.setItem('lastvisit', Date.now());
    document.getElementById('visit').textContent = 'Your 1st visit!';
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