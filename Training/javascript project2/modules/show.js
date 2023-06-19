import { openPopup } from "./Pop_up.js";
export const showPopUp = (t, h, l) => {


   let temperatureA = document.getElementById('temperature');
   let humidityA = document.getElementById('humidity');
   let locationNameA = document.getElementById('locationName');

   temperatureA.innerHTML = `temperature: ${t.toFixed(2)}°C`
   humidityA.innerHTML = `humidity: ${h}%`
   locationNameA.innerHTML = l

   // console.log('temperatureA');
   // console.log('humidityA');
   // console.log('locationNameA');
   openPopup()

}
