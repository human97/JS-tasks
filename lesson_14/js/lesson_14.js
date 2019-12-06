// #01
fetch(
        'https://api.openweathermap.org/data/2.5/weather?q=Samara,RU&appid=b898573b7c51bba91d9c7661ffff6b52'
    )
    
    .then(function (resp) {
        return resp.json()
    })

    .then(function (data) {
        console.log(data)
        document.querySelector('.wrapper--title').textContent = data.name
        document.querySelector('.day_of_the_week').innerHTML = `${new Date(data.dt*1000)
.getDay() === new Date().getDay() ? 'Now' : new Date(data.dt*1000).toLocaleString('en', {
                weekday: "long"})}, ${new Date(data.dt*1000).toLocaleString('en', {
                    month: "short",
                    day: "numeric"
                })}`
        document.querySelector('.temp_day').innerHTML = `${Math.round(data.main.temp-273)}&deg`
        document.querySelector('.weather-item-icon').innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0]['icon']}.png">`
    })