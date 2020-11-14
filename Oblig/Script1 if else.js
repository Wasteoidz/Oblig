//model//
let dato = document.getElementById('datoInput');
let day = 0;
let month = 0;
let year = 0;


//view// 
updateView();
function updateView() {
    document.getElementById('app').innerHTML = `
    <input id="datoInput" type="text" oninput="dateCheck()" />
    <p></p<


    `;
}




//controll// 
function dateCheck() {
    dato = document.getElementById('datoInput').value;
    day = dato.slice(0, 2);
    month = dato.slice(3, 5);
    year = dato.slice(6, 10);

    lengthCheck();
    punktumPosisjonCheck();
    yearCheck();
    monthCheck();
    dayValueCheck();
    dayMonthCheck();
    februarLeapyearCheck();
    return console.log("dato: " + dato);
}

function lengthCheck() {
    if (dato.length === 10) {
        return console.log("true, datoen inneholder 10 tegn");
    } if (dato.length > 10) {
        return console.log("false, datoen inneholder mer enn 10 tegn");
    } else {
        return console.log("false, datoen inneholder ferre enn 10 tegn");
    }
}

function punktumPosisjonCheck() {
    if (dato.includes(".", 2) && dato.includes(".", 5)) {
        console.log("true, punktum er i riktig posisjon");
    } else {
        console.log("false, punktum er ikke i riktig posisjon");
    }
}

function yearCheck() {
    if (year.length === 4) {
        return console.log("true, year har riktig menge tall");
    } else {
        return console.log("false, year har ikke riktig menge tall");

    }
}


function monthCheck() {
    if (month.length === 2 && month <= 12 && month >= 1) {
        return console.log("true, dette er en korrekt month ")
    } else {
        return console.log("false, dette er en ikke korrekt month ")

    }
}

function dayValueCheck() {
    if (day <= 31) {
        return console.log("true, du har valgt en korrekt dag")
    } else {
        return console.log("false, du har ikke valgt en korrekt dag")

    }
}
function dayMonthCheck() {
    if ((month % 2 == 0 && day <= 30) || (month % 2 !== 0 && day <= 31)) {
        return console.log("true, dette er en valid month/day combo")

    } else {
        return console.log("false, dette er ikke en valid month/day combo")

    }
}

function februarLeapyearCheck() {
    if (month = 02 && (year % 4 == 0 && year % 100 != 0 || year % 400 == 0)) {
        day <= 29;
        console.log("29 feb er lov da det er LeapYear")
    } else {
        day <= 28
        console.log("det er ikke leapYear og maks dag i februar er 28")
    }
}







function something(date) {

    if (date == '3') { return true } else { return false };
}
console.log(something('32'));

function something1(date) {
    return (date == '3' ? true && console.log('testing testing') : false && console.log('not testing not testing'));
}

function someting2(date) {
    return (date == '3');
}