$("#submit-button").on("click", function(e) 
{
		e.preventDefault();
		$('.walmart-result').empty();

		var productSearch = $("#video-search").val().trim();
		var myAppID = "rxyfmndsnehbbka79qrqbs84"	
		// decalare a variable to our API so we can call it with AJAX later
		var queryUrl ='http://api.walmartlabs.com/v1/search?apiKey=' + myAppID + '&query=' + productSearch;

		//make an AJAX request to queryURL using HTTP GET
		$.ajax({
		  url: queryUrl,
		  method: "GET"
		})
		.done(function(response) {
		  //append to ebay column
			console.log(response);
					var walmartPic = $('<img>');
					walmartPic.attr('src', response.mediumImage);
					var walmartDescription = $('<span>'+response.shortDescription + '</span><br />');
					var walmartLink = $('<a href='+response.productUrl+' target=_blank>Purchase from Walmart.com</a>')

					console.log(ebayPic);

		  			$('.walmart-result').append(walmartPic, walmartDescription, walmartLink);
		  		});
});
