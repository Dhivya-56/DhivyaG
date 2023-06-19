import { showPopUp } from "./show.js"
// import { closePopup } from "./Pop_up.js";
export const onShow = () => {
  try{
    var i=1;
    // var table=document.getElementById('Table')
    while(i==1){
    var location= document.getElementById("Table").children[0].children[i].children[1].innerText
    i+=1;
    }
  //   var j;
  //  var table=document.getElementById('Table')
  //  for(var i=1;i<table.length;i++){
  //   if( j==1)
  //  {
  //  var location= document.querySelectorAll("#Table").children[0].children[i].children[j].innerText
  //  }
  // }
    // var cell = document.getElementsByTagName("td"); 
    // var i = 1;
    // while(cell[i] != undefined){
    //    var location= cell[i].innerHTML; //do some alert for test
        
    //     }//end while
  // var lname=document.getElementById('location')
  //  let location=lname.innerText
   console.log("lname",location)
   const API_KEY = "c7a9299a3d8da1d910da08bcffb48a3b"
  
   let url = `http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}`

  fetch(url).then(response => response.json()).then(response => {
   
      //console.log(locationName)
      if (response.cod == 200) {
        let t = response.main.temp - 273.15
        let h = response.main.humidity
        let l = response.name
        showPopUp(t,h,l)
        } 
      else {
        alert("No Location found")
       
      }
    })
  }
    catch (error) {
      alert(`onshowerror:${error.message}`)
    }
  }
  // let popupbg = document.getElementById("popupbg");
  //   window.addEventListener("click",(event) => {
  //     if(event.target == popupbg){
  //         closePopup()
  //     }
  //   })
  
