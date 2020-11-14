//model//
let dato = document.getElementById('datoInput');
let day = 0;
let month = 0;
let year = 0;

//view// 
updateView();
function updateView() {
    document.getElementById('app').innerHTML = `
    <input id="datoInput" type="text" oninput="dateCheck(this)" />
    <p></p<


    `;
}



//controll// 
function dateCheck(dato) {
    dato = document.getElementById('datoInput').value;
    day = dato.slice(0, 2);
    month = dato.slice(3, 5);
    year = dato.slice(6, 10);
    leapYear(dato);
    if(
    lengthCheck(dato) === true && 
    punktumPosisjonCheck(dato) == true && 
    yearCheck(dato) == true && 
    monthCheck(dato) == true && 
    dayValueCheck(dato) == true && 
    dayMonthCheck(dato) == true  
    //februarDatoCheck(dato) == true && 
    //februarleapyearcheck(dato) == true
    ) {
        return console.log("dato: " + dato +  " is correct");
    } else {
        return console.log("false");
    }

}

function lengthCheck(dato) {
    return (dato.length === 10);
}

function punktumPosisjonCheck(dato) {
    return (dato.includes(".", 2)  && dato.includes(".", 5));
}

function yearCheck(dato) {
    return (year.length === 4 && year >= 0000 && year <= 9999);
}

function leapYear(dato) {
    return ((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0);
}

function monthCheck(dato) {
    return (month.length === 2 && month <= 12 && month >= 1);
}

function dayValueCheck(dato) {
    return (day <= 31);
}
function dayMonthCheck(dato) {
    return ((month % 2 == 0 && day <= 30) || (month % 2 !== 0 && day <= 31));
}

function februarDatoCheck() {
    return (month == 02 && day <= 28);
}

function februarLeapyearCheck(dato) {
    return (leapYear(dato) == true && month == 02 && day <= 29);
}
