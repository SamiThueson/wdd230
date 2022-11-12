const requestURL = 'https://samithueson.github.io/wdd230/chamber/data.json';

async function getBusinesses(requestURL) {
    const response = await fetch(requestURL);
    console.log(response);
    if (response.ok) {
        const jsObject = await response.json();
        console.log(jsObject);
        const businesses = jsObject['businesses'];
        console.log(businesses[0].lastname);
        businesses.forEach(displayBusinesses);
        businesses.forEach(displayBusinessTable);
    }
};

getBusinesses(requestURL);

// let button2 = document.querySelector('.tbl');
// button2.addEventListener('click', clearCards);

function displayBusinesses(item) {
    let business = document.createElement('section');
    let h2 = document.createElement('h2');
    let address = document.createElement('p');
    let phone = document.createElement('p');
    let email = document.createElement('p');
    let website = document.createElement('a');
    let img = document.createElement('img');

    h2.textContent = item.name;
    address.textContent = item.address;
    phone.textContent = item.phone;
    email.textContent = item.email;
    website.textContent = item.website;
    website.setAttribute('href', item.website);
    img.setAttribute('src', item.image);
    img.setAttribute('alt', item.name);

    business.appendChild(img);
    business.appendChild(h2);
    business.appendChild(address);
    business.appendChild(phone);
    business.appendChild(email);
    business.appendChild(website);
    document.querySelector('.businesses').appendChild(business);

    // let button2 = document.querySelector('.tbl');
    // if (button2.addEventListener('click')) {
    //     business.style.display = 'none'
    // }
    // business.style.display = 'none';

    // business.forEach((item) => {
    //     item.remove();
    // }
}

function displayBusinessTable(item) {
    let table_rows = document.createElement('tr');
    let table_name = document.createElement('td');
    let table_address = document.createElement('td');
    let table_phone = document.createElement('td');
    let table_email = document.createElement('td');
    let table_website = document.createElement('td');
    let in_website = document.createElement('a');

    in_website.textContent = item.website;
    in_website.setAttribute('href', item.website);
    
    table_name.textContent = item.name;
    table_address.textContent = item.address;
    table_phone.textContent = item.phone;
    table_email.textContent = item.email;
    table_website.appendChild(in_website);

    table_rows.appendChild(table_name);
    table_rows.appendChild(table_address);
    table_rows.appendChild(table_phone);
    table_rows.appendChild(table_email);
    table_rows.appendChild(table_website);
    document.querySelector('.table').appendChild(table_rows);
}

// function clearCards() {
//     document.querySelector('.businesses').style.display = 'none';
// }

// let button2 = document.querySelector('.tbl');
// button2.addEventListener('click', clearCards, displayBusinessTable);

// function clearTable() {
//     document.querySelector('.table').style.display = 'none';
// }

// let button1 = document.querySelector('.cards');
// button1.addEventListener('click', clearTable, displayBusinesses);