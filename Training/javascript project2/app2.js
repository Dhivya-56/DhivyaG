import { insertData } from "./modules/InsertTable.js"
//import{onDelete} from"./modules/delete.js"
let weatherformcontainer = document.getElementById("Weather_form");
let weathertablecontainer = document.getElementById("weather_Table");
let popcontainer = document.getElementById("popupbg");

fetch('./components/Weather_form.html').then((response) => response.text())
    .then((html) => {
        weatherformcontainer.innerHTML = html

    })
fetch('./components/weather_Table.html').then((response) => response.text())
    .then((html) => {
        weathertablecontainer.innerHTML = html
    })
fetch('./components/weather_Pop_up.html').then((response) => response.text())
    .then((html) => {
        popcontainer.innerHTML = html
    })

var sno = 1
document.getElementById("Weather_form").addEventListener("submit", (event) => {

    try {
        event.preventDefault();

        var locname = document.getElementById("location").value;
        insertData(sno, locname)
        sno = sno + 1
        console.log("sno", sno)
        document.getElementById("location").value = "";


    } catch (error) {
        alert('Apperror:${error.message}')
    }
});