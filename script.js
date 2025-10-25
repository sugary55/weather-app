const dis_btn=document.getElementById('show_weath')
//the display button
const city=document.getElementById('input_weath')
const output_data=document.querySelector('.display_area')

async function addEventListener_t(){
    const usercity= city.value.trim()
    if(usercity ){
      try{
        const res=await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${usercity}&units=metric&APPID=01997a6aae77359e24d35d4c16edf1f3`)
          if(res.status==200){
            console.log('ok')
            const weather_data=await res.json()
            const{main:{temp,feels_like}}=weather_data;
            output_data.textContent=`temp is ${temp} : feels like ${feels_like}`;
          }
          else{
            output_data.textContent=`your city is ${res.status}`;

          }
      }
      catch(error){
          console.log(`error of catch: ${error}`)
      }
    }
}
