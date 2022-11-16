const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5861897&appid=115bd075ba67ecd482327a5d857a0665";

const getWeather = async () => {
    const response = await fetch(apiURL);
    const jsObject = await response.json();
    console.log(jsObject);

    const fahren = (jsObject.main.temp - 273.15)* 1.8000 + 32.00;
    console.log(fahren);
    document.querySelector('#current-temp').textContent = Math.round(fahren);

    const iconsrc= `https://openweathermap.org/img/w/${jsObject.weather[0].icon}.png`;
    const desc = jsObject.weather[0].description;
    document.querySelector('#icon-src').textContent = iconsrc;
    document.querySelector('#weathericon').setAttribute('src', iconsrc);
    document.querySelector('#weathericon').setAttribute('alt', desc);
    document.querySelector('figcaption').textContent = desc;

    const windspeed = jsObject.wind.speed;
    document.querySelector('#ws').textContent = windspeed;

    if (fahren < 50 && windspeed > 3 ) {
        const chill = Math.round((35.74 + (0.6215 * fahren))-(35.75 * Math.pow(windspeed,0.16)) + (0.4275*fahren*Math.pow(windspeed,0.16)));
        console.log(chill);

        document.querySelector('#wc').textContent = chill + '&#8457';

        // const windchill = document.querySelector('#wc')

        // windchill.innerHTML = chill + '&#8457;';
    }
  };

getWeather();
