

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

var productSearch = "";

$("#submit-button").on("click", function(){

  productSearch = $("#video-search").val().trim();

  firebase.database().ref().set({

    productSearch: productSearch
    
    })

  })
