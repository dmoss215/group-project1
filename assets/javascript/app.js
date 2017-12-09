$(function() {

// Initialize Firebase
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

//create onclick event to log search history to firebase
	// $('#submit-button').on('click', function(event) {
	// 	event.preventDefault();

	// 	database.push()
	// });

// =====  Modal Open =============
$('#modal1').modal('open');
$('.modal').modal();

//firebase authentication
var email;
var password;
var emailOffered = $('#email-input').val().trim();
var passwordOffered = $('#password-input').val().trim();

//firebase auth listener
firebase.auth().onAuthStateChanged(function(user) {
 window.user = user; // user is undefined if no user signed in
});

$('#register-button').on('click', function(){

	firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
  	// Handle Errors here.
  	email = emailOffered;
  	password = passwordOffered;
  	var errorCode = error.code;
  	var errorMessage = error.message;
  	// ...
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
//onclick for login button

//onclick for home button

//onclick event for search button

//onclick event for user-specific search history

//firebase
	//login firebase script
	//user-specific search history script

});