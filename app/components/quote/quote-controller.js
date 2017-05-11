function QuoteController(){

	var qs = new QuoteService()

	qs.getQuote(function(quote){
		console.log('What is the quote', quote)
		draw(quote)
	})
	function draw(quote) {
		var elem = document.getElementById('quote')
		var template = ''
	
		template += `
            
					<h4>${quote.quote} -${quote.author}</h4>
					

        `
		elem.innerHTML = template
	}

	function failed() {
		var elem = document.getElementById('weather')
		elem.innerHTML = "SORRY YOUR REQUEST FAILED"
	} 
}

