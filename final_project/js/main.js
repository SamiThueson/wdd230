document.querySelector("#yr").textContent = new Date(Date.now()).getFullYear();

function toggleMenu() {
    document.getElementById("primaryNav").classList.toggle("open");
    document.getElementById("hamburgerBtn").classList.toggle("open");
}

const x = document.getElementById("hamburgerBtn");
x.onclick = toggleMenu;


const date = new Date();

const dateTime = 

    date.getMonth() + ' / ' +

    date.getDate() + ' / ' +

    date.getFullYear() + ' ' +

    date.getHours() + ' : ' +

    date.getMinutes() + ' : ' +

    date.getSeconds()
;

document.querySelector('#date').value = dateTime