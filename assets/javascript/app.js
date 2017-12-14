$(function() {

	//Initialize Firebase
	var config = {
		apiKey: "AIzaSyCUE8vxN9tFrV5spAnE3AvkWPYNA-ai24k",
	    authDomain: "group-project-1-f1ac1.firebaseapp.com",
	    databaseURL: "https://group-project-1-f1ac1.firebaseio.com",
	    projectId: "group-project-1-f1ac1",
	    storageBucket: "group-project-1-f1ac1.appspot.com",
	    messagingSenderId: "891913964044"
	  };
	firebase.initializeApp(config);

	var database = firebase.database();

	$('#submit-button').on('click', function(event) {
		event.preventDefault();

		// =========  Trending Searches ================================
	let newSearch = $("#video-search").val().trim();
	console.log($("#video-search"))
	console.log(newSearch);
	database.ref("/Trending").set({      
  Search: newSearch, 
	});
	
	database.ref("/Trending").push(newSearch);

	// database.ref("/Trending").on("child_added", function (childSnapshot) {
	// 	let addedSearch = childSnapshot.val();
	// 	let trendingDiv = $("<div>");
	// 	trendingDiv.text(addedSearch);
	// 	console.log(trendingDiv);
	// 	$("#trending-products").append(trendingDiv);

	});

	$("#video-search").val("");
});

// =====  Sign Up Modal Open =============
$('.modal').modal();

// ===== Collapse Navbar ========
$(".button-collapse").sideNav();

// ====== Sign Up Firebase Authentication ==============================
$("#signup-button").on('click', function () { 
	console.log("sign up button worked");
	email = $("#signup-email").val().trim();
	password = $("#signup-pw").val().trim();

	console.log(email, password);
	firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
		// Handle Errors here.
		var errorCode = error.code;
		var errorMessage = error.message;


		// ...
	  });
	  $("#signup-email").val("");
	  $("#signup-pw").val("");
 })


//firebase auth listener
firebase.auth().onAuthStateChanged(function(user) {
 window.user = user; // user is undefined if no user signed in

$('#login-button').on('click', function(){
	console.log("login button clicked");
	let email = $("#email-input").val().trim();
	let password = $("#password-input").val().trim();
	
	firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
		// Handle Errors here.
		var user = firebase.auth().currentUser;
		var userUID = user.uid;
		console.log(userUID);
		if (user) {
			console.log(userUID);
			database.ref("/Users").push(userUID);
		}
  	var errorCode = error.code;
  	var errorMessage = error.message;
  	// ...
	});



	// console.log("Sign-in provider: " + profile.providerId);
	// console.log("  Provider-specific UID: " + profile.uid);
	// console.log("  Name: " + profile.displayName);
	// console.log("  Email: " + profile.email);


	// user.updateProfile({
	//   displayName: "Jane Q. User",

	// }).then(function() {
	//   // Update successful.
	// }).catch(function(error) {
	//   // An error happened.
	// });
	console.log(firebase.auth().currentUser);
});

	$('#sign-out').on('click', function () {
		console.log("signed out")
		firebase.auth().signOut().catch(function (error) {
		// Handle errors here
		var errorCode = error.code;
	  	var errorMessage = error.message;
	  	// ...
		});
	});
});
// ==== END GET CURRENT SIGNED IN USER WITH onAuthStateChanged =======================================









// 	$("#submit-button").on("click", function (event){
//        event.preventDefault();
  
//       // Values input in text boxes.
//       var prodSearch = $("#video-search").val().trim();
//       console.log(prodSearch);
//       // Code for "Setting values in the database"
//       database.ref().set({
        
//       prodSearch: prodSearch 
//   });

// });
//===========================================================================================
    // Firebase watcher + initial loader HINT: .on("value")
    // database.ref().on("value", function(snapshot) {

    //   // Log snapshot
    //   //console.log(snapshot.val());
    //   console.log(snapshot.val());


    //   // Change the HTML to reflect
    //   $("#video-search").text(snapshot.val().prodSearch);

    //   // Handle the errors
    // }, function(errorObject) {
    //   console.log("Errors handled: " + errorObject.code);
    // });
 

});