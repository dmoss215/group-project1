// ================  ajax call for youtube ==================================================
$("#submit-button").on("click", function () {
	$("#youtube-results").empty();
	$("#youtube-results").css('visibility', 'visible');
	var youTubeHeader= $('<img>');
		youTubeHeader.attr('src', 'http://learn.corel.com/wp-content/uploads/2016/09/YouTube-logo-banner-600x251.png');
		youTubeHeader.attr('class', 'logo');
		$('#youtube-results').prepend(youTubeHeader);

	let productSearch = $("#video-search").val().trim();
	let reviewSearch = productSearch + " " + "review";
	console.log(reviewSearch);

	// decalare a variable to our API so we can call it with AJAX later
	let queryURL = "https://www.googleapis.com/youtube/v3/search?part=snippet&q=" + reviewSearch + "&key=AIzaSyDEaBQlVZQZqUOstf3Cfz0ueQ4RP4GbSAI";

	//make an AJAX request to queryURL using HTTP GET
	$.ajax({
		url: queryURL,
		method: "GET"
	}).done(function (response) {
		console.log(response);

		for (let i = 0; i < 3; i++) {
			let video = response.items[i].id.videoId;
			console.log(video);

			// build this to hold the video - <iframe width="580" height="320" src="https://www.youtube.com/embed/KvNis_A6UaI" frameborder="0" allowfullscreen></iframe>
			let iframe = $("<iframe>");
			iframe.attr("src", "https://www.youtube.com/embed/" + video);
			iframe.attr("frameboarder", "0");
			iframe.attr("width", "auto");
			iframe.attr("height", "320");

			console.log(iframe);

			$(".result").append(iframe);
		}

	});
	$("#video-search").val("");
});

// Enable enter key to do the same as clicking search button 
$("#video-search").keyup(function (event) {
	if (event.keyCode == 13) {
		$("#submit-button").trigger('click');
	}
})