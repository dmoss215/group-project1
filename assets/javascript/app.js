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

		database.push()
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
});

$('#signup').on('click', function(){

	console.log(emailOffered);
	firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
  	// Handle Errors here.
  	email = emailOffered;
  	password = passwordOffered;
  	var errorCode = error.code;
  	var errorMessage = error.message;
	  // ...
	console.log(email);
	
	});	
});	

$('#login-button').on('click', function(){
	firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
  	// Handle Errors here.
  	email = emailOffered;
  	password = passwordOffered;
  	var errorCode = error.code;
  	var errorMessage = error.message;
  	// ...
	});
});

	$('#signOut-button').on('click', function () {
		firebase.auth().signOut().catch(function (error) {
		// Handle errors here
		var errorCode = error.code;
	  	var errorMessage = error.message;
	  	// ...
		});
	});


	$("#submit-button").on("click", function (event){
       event.preventDefault();
  
      // Values input in text boxes.
      var prodSearch = $("#video-search").val().trim();
      console.log(prodSearch);
      // Code for "Setting values in the database"
      database.ref().set({
        
      prodSearch: prodSearch 
  });

});
//===========================================================================================
    // Firebase watcher + initial loader HINT: .on("value")
    database.ref().on("value", function(snapshot) {

      // Log snapshot
      //console.log(snapshot.val());
      console.log(snapshot.val());


      // Change the HTML to reflect
      $("#video-search").text(snapshot.val().prodSearch);

      // Handle the errors
    }, function(errorObject) {
      console.log("Errors handled: " + errorObject.code);
    });
 

});