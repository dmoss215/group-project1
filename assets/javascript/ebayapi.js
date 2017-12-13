//ebay
$("#submit-button").on("click", function(e) 
{
		e.preventDefault();
		$('.ebay-result').empty();

		var productSearch = $("#video-search").val().trim();
		var myAppID = "MichaelD-CodingBo-PRD-b51ca6568-036a5a77"	
		// decalare a variable to our API so we can call it with AJAX later
		var queryUrl ='http://open.api.ebay.com/shopping?callname=FindProducts&appid=' + myAppID + '&version=1015&siteid=0&responseencoding=JSON&MaxEntries=20&QueryKeywords=' + productSearch;

		//make an AJAX request to queryURL using HTTP GET
		$.ajax({
		  url: queryUrl,
		  method: "GET",
		  dataType: 'jsonp',
		  jsonp: 'callbackname',
		})
		.done(function(response) {
		  //append to ebay column
			console.log(response);

		  	for (var i = 0; i < 4; i++) 
		  	{
				if(response.Product[i].DisplayStockPhotos === true) 
				{
					var ebayPic = $('<img>');
					ebayPic.attr('src', response.Product[i].StockPhotoURL);
					ebayPic.attr('height', '200px')
					var ebayTitle = $('<span>'+response.Product[i].Title + '</span><br />');
					var ebayTarget = $('<a href='+response.Product[i].DetailsURL+' target=_blank>More Details</a>')

					console.log(ebayPic);

		  			$('.ebay-result').append(ebayPic, ebayTitle, ebayTarget)
		  		}		
		  	};
		});
});
