import { insertData } from "./modules/InsertTable.js"


let weatherformcontainer = document.getElementById("Weather_form");
let weathertablecontainer = document.getElementById("weather_Table");
let popcontainer = document.getElementById("popupbg");
let loadcontainer = document.getElementById("loader");

fetch('./components/Weather_form.html').then((response) => response.text())
    .then((html) => {
        weatherformcontainer.innerHTML = html

    })
fetch('./components/weather_Table.html').then((response) => response.text())
    .then((html) => {
        weathertablecontainer.innerHTML = html
    })
fetch('./components/Pop_up.html').then((response) => response.text())
    .then((html) => {
        popcontainer.innerHTML = html
    })
fetch('./components/loader.html').then((response) => response.text())
    .then((html) => {
        loadcontainer.innerHTML = html
    })

var sno = 1
document.getElementById("Weather_form").addEventListener("submit", (event) => {

    try {
        event.preventDefault();

        var locname = document.getElementById("location").value;
        insertData(sno, locname)
        sno++;
        console.log("sno", sno)
        document.getElementById("location").value = "";


    } catch (error) {
        alert(`Apperror:${error.message}`)
    }
});




