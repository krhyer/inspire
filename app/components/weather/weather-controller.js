function WeatherController() {
	var weatherService = new WeatherService();

	this.getWeather = function () {
		weatherService.getWeather(draw, failed)
	}

	//What can you do with this weather object?

	function draw(weather) {
		var elem = document.getElementById('weather')
		var template = ''
		var C = weather.main.temp - 273.15
		var F = weather.main.temp * 9 / 5 - 459.67
		var weaF = Math.round(F)
		var weaC = Math.round(C)
		template += `
            
					
					<h2>${weaF}°</h2>
                    <h3>${weather.name}</h3>

        `
		elem.innerHTML = template
	}

	function failed() {
		var elem = document.getElementById('weather')
		elem.innerHTML = "SORRY YOUR REQUEST FAILED"
	} this.getWeather()
}

