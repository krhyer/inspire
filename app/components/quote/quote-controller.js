function QuoteController() {

	var qs = new QuoteService()

	qs.getQuote(function (quote) {
		console.log('What is the quote', quote)
		draw(quote)
	})
	function draw(quote) {
		var elem = document.getElementById('quote')
		var template = ''

		template += `
            
			<div class="row">
				<div class="col-xs-12">
					<h4>"${quote.quote}"</h4>
				</div>			
				<div class="col-xs-12">
					<h4>-${quote.author}</h4>
				</div>
			</div>
					

        `
		elem.innerHTML = template
	}

	function failed() {
		var elem = document.getElementById('weather')
		elem.innerHTML = "SORRY YOUR REQUEST FAILED"
	}
}

