const dis_btn=document.getElementById('show_weath')
//the display button
const city=document.getElementById('input_weath')
const output_data=document.querySelector('.display_area')

dis_btn.addEventListener('click',function(){
    let user_city=city.value
    if(user_city){
          
          fetch(`http://api.openweathermap.org/data/2.5/weather?q=${user_city}&units=metric&APPID=01997a6aae77359e24d35d4c16edf1f3`) 
          .then(Response=>{
            return Response.json()
          })
          .then(weather_data=>{
                    const temp = weather_data.main.temp;
                    const desc = weather_data.weather[0].description;
                    const cityName = weather_data.name;
                    output_data.textContent=`weather in ${cityName}: ${temp}C, ${desc}`
                //console.log('full weather data ',weather_data)
                //console.log('temperature',weather_data.main.temp)
          })
          .catch(Error=>{
            alert('error in loading')
          })
    }


})