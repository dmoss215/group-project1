//ebay
$("#submit-button").on("click", function(e) {
		e.preventDefault();

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
		});
	  });
