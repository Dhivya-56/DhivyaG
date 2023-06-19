

export function insertData(sno, locname) {
  try {
    var table = document.getElementById("Table");
    var newRow = table.insertRow(-1);
    var cell1 = newRow.insertCell(0);
    cell1.innerHTML = sno;
    var cell2 = newRow.insertCell(1);
    cell2.innerHTML = locname;
    var cell3 = newRow.insertCell(2);
    cell3.innerHTML =
      `<button  id='btncheck'>Show</button>`;
    cell3.addEventListener("click", function () {
      var loaderData = document.getElementById("loader");
      const loader = (isLoading) => {

        if (isLoading) {
          loaderData.style.display = "block";
        } else {
          loaderData.style.display = "none";
        }


      }
      // var i=1;
      // while(i==1){
      //  var location= document.getElementById("Table").children[0].children[i].children[1].innerText
      //  i+=1;
      //  }
      const API_KEY = "c7a9299a3d8da1d910da08bcffb48a3b"

      let url = `http://api.openweathermap.org/data/2.5/weather?q=${locname}&appid=${API_KEY}`
      loader(true)
      fetch(url).then(response => response.json()).then(response => {
        loader(false)
        //console.log(locationName)
        if (response.cod == 200) {
          let t = response.main.temp - 273.15
          let h = response.main.humidity
          let l = response.name
          showPopUp(t, h, l)
        }
        else {
          alert("No Location found")

        }
      })


    })
    var cell4 = newRow.insertCell(3);
    cell4.innerHTML =
      `<button  id='btncheck1'>Delete</button>`;
    cell4.addEventListener("click", function () {
      newRow.remove(cell1)
      updateSno()
    })
  }
  catch (error) {
    alert(`onshowerror:${error.message}`)
  }

  // let popupbg = document.getElementById("popupbg");
  //   window.addEventListener("click",(event) => {
  //     if(event.target == popupbg){
  //         closePopup()
  //     }
  //   })



}
function updateSno() {
  let row = document.getElementsByTagName("tr")
  for (let j = 1; j < row.length; j++) {
    let rows = row[j];
    let scell = rows.cells[0];
    scell.innerHTML = j;
  }
  S.no = row.length - 1;
}


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

export const openPopup = () => {
  //   let popup = document.getElementById("popup");
  // let popupbg = document.getElementById("popupbg");
  popup.style.display = "block";
  popupbg.style.display = "block";

}

export const closePopup = () => {
  popup.style.display = "none";
  popupbg.style.display = "none";
}


// var table=document.getElementById('Table')


window.addEventListener("click", (event) => {
  if (event.target == popupbg) {
    closePopup()
  }
})


