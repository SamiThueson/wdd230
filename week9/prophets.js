// ASYNC AWAIT Fetch

const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';

async function getProphets(requestURL) {
    const response = await fetch(requestURL);
    console.log(response);
    if (response.ok) {
        const jsObject = await response.json();
        console.log(jsObject);
        const prophets = jsObject['prophets'];
        console.log(prophets[0].lastname);
        prophets.forEach(displayProphets);
    }
};

getProphets(requestURL);

function displayProphets(prophet) {
    let card = document.createElement('section');
    let h2 = document.createElement('h2');
    let img = document.createElement('img');
    let birthdate = document.createElement('p');
    let birthplace = document.createElement('p');

    h2.textContent = prophet.name + ' ' + prophet.lastname;
    img.setAttribute('src', prophet.imageurl);
    img.setAttribute('alt', prophet.name + ' ' + prophet.lastname + '-' + prophet.order);
    birthdate.textContent = 'Date of Birth: ' + prophet.birthdate;
    birthplace.textContent = 'Place of Birth: ' + prophet.birthplace;

    card.appendChild(h2);
    card.appendChild(birthdate);
    card.appendChild(birthplace);
    card.appendChild(img);
    document.querySelector('.cards').appendChild(card);
}