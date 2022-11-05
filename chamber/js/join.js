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