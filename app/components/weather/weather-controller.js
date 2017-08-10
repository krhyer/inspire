function WeatherController() {
	var weatherService = new WeatherService();
	var far = true
	var wc = this
	this.getWeather = function () {
		weatherService.getWeather(draw, failed)
	}
	this.toggleWeather = function () {
		far = !far
		wc.getWeather()
	}
	//What can you do with this weather object?

	function draw(weather) {
		var elem = document.getElementById('weather')
		var template = ''
		var C = weather.main.temp - 273.15
		var F = weather.main.temp * 9 / 5 - 459.67
		var weaF = Math.round(F)
		var weaC = Math.round(C)
		var temp = weaF
		if (far) {
			temp = weaF
		}
		else {
			temp = weaC
		}
		template += `
            
					
					<h4 >${temp}°</h4>
                    <h5>${weather.name}</h5>

        `
		elem.innerHTML = template
	}

	function failed() {
		var elem = document.getElementById('weather')
		elem.innerHTML = "SORRY YOUR REQUEST FAILED"
	} this.getWeather()
}

