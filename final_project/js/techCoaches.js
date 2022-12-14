const requestURL = 'https://samithueson.github.io/wdd230/final_project/about.json';

async function getCoaches(requestURL) {
    const response = await fetch(requestURL);
    console.log(response);
    if (response.ok) {
        const jsObject = await response.json();
        console.log(jsObject);
        const coaches = jsObject['technique-coaches'];
        console.log(coaches[0].name);
        coaches.forEach(displayCoaches);
    }
};

getCoaches(requestURL);

function displayCoaches(item) {
    let coach = document.createElement('section');
    let h2 = document.createElement('h2');
    let h3 = document.createElement('h3');
    let img = document.createElement('img');

    h2.textContent = item.name;
    h3.textContent = item.team
    img.setAttribute('src', item.image);
    img.setAttribute('alt', item.name);

    coach.appendChild(img);
    coach.appendChild(h3);
    coach.appendChild(h2);
    document.querySelector('.tech-coaches').appendChild(coach);
}