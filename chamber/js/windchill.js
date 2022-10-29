// INDEX PAGE

const temp = document.querySelector('#t').textContent;
const windspeed = document.querySelector('#ws').textContent;

if (temp < 50 && windspeed > 3 ) {
    let chill = Math.round((35.74 + (0.6215 * temp))-(35.75 * Math.pow(windspeed,0.16)) + (0.4275*temp*Math.pow(windspeed,0.16)));

    const windchill = document.querySelector('#wc')

    windchill.innerHTML = chill + '&#8457;';
}