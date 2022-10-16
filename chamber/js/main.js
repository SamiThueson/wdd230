document.querySelector("#yr").textContent = new Date(Date.now()).getFullYear();

document.querySelector("#updated").textContent = `Last Modification: ${document.lastModified}`;

// select the elements to manipulate (output to)
const datefield = document.querySelector(".date");

// derive the current date using a date object
const now = new Date();
const fulldate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(
	now
);
// long, medium, short options ... try them
datefield.innerHTML = `<em>${fulldate}</em>`;



function toggleMenu() {
    document.getElementById("primaryNav").classList.toggle("open");
    document.getElementById("hamburgerBtn").classList.toggle("open");
}

const x = document.getElementById("hamburgerBtn");
x.onclick = toggleMenu;


const parent = document.querySelector('#msg-box');

if (mydate.getDay() == 1 || mydate.getDay() == 5) {
    
    document.querySelector('#msg-box').
    style.display = 'block'
}