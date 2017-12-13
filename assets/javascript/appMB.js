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
  //Initial value.
  //var prodSearch = "shampoo";
  //console.log(prodSearch);
  // Capture Button Click
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
 
