let submitBtn = document.getElementById('submitBtn');
let cityName = document.getElementById('cityName');
let city_name = document.getElementById('city_name');
let temp_real_val = document.getElementById('temp_real_val')
let weather_Details_Id = document.getElementById("weather_Details_Id");
let weather_feels_like = document.getElementById("weather_feels_like");
let name_Display = document.getElementById("name");
let name_Id = document.getElementById("name_Id");
let getInfo = async (e) => {
    e.preventDefault();
    let cityVal = cityName.value;


    if (cityVal === "") {
        city_name.textContent = 'Please enter a city name'
    } else {
        try {
            let url = `http://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=1cb6532aea3c298a830a71380eace21e`
            let response = await fetch(url);
            let data = await response.json()
            let arrData = [data]
            console.log(arrData)
            //dynamic
            city_name.innerText = `${arrData[0].name},${arrData[0].sys.country},${arrData[0].main.humidity}`
            temp_real_val.innerText = arrData[0].main.temp
            weather_Details_Id.innerText = `${arrData[0].main.humidity}`;
            weather_feels_like.innerText = `${arrData[0].main.feels_like}`;
            name_Display.innerText = `${arrData[0].name}, ${arrData[0].sys.country}`;
            name_Id.innerText = `${arrData[0].name}, ${arrData[0].sys.country}`

        } catch {
            city_name.textContent = 'Please enter a valid city name'
        }
    }

}

submitBtn.addEventListener('click', getInfo)

