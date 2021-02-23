var button = document.querySelector('.button')
var inputValue = document.querySelector('.inputValue');
var desc = document.querySelector('.desc')
var temp = document.querySelector('.temp')
var informationEl = document.getElementById('information')
var humidity = document.querySelector('.humidity')
var windspeed = document.querySelector('.windspeed')
var city = document.querySelector('.city')
// var uv = document.querySelector('.uv')









  button.addEventListener('click',function(){

    fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputValue.value+'&appid=4353c46d3ab855722001deead1d2698c')
    .then(response => response.json())
    .then(data =>{
        var cityValue = data.name;
    // var nameValue = data['main']['name']
    var tempValue = data['main']['temp'];
    var descValue = data['weather'][0]['description'];
    var humidityValue = data['main']['humidity'];
   var windspeedValue = data['wind']['speed'];
    

    city.innerHTML= cityValue;

    temp.innerHTML =  "  Temprature :  "+  tempValue ;
    desc.innerHTML=  "   Description :  "+ descValue;
     humidity.innerHTML=  "  Humidity :  " + humidityValue; 
   windspeed.innerHTML= " Windspeed  :  " + windspeedValue ;
  
console.log(data)

    })
  



.catch(err =>alert("wrong city name "))


  })


  


  informationEl.addEventListener('click',function(){
})
