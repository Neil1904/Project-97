
//ADD YOUR FIREBASE LINKS HERE

var firebaseConfig = {
      apiKey: "AIzaSyDwsrIgpBzJbcFMCBe7C0yuQfsUY-yWZFU",
      authDomain: "neil-qcbp.firebaseapp.com",
      databaseURL: "https://neil-qcbp-default-rtdb.firebaseio.com",
      projectId: "neil-qcbp",
      storageBucket: "neil-qcbp.appspot.com",
      messagingSenderId: "716469597261",
      appId: "1:716469597261:web:e8a07b8327b40f5867d804",
      measurementId: "G-VJMFXZVDE8"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  
  
  function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
         Room_names = childKey;
        //Start code
        console.log("Room Name - " + "Room_names");
        row = "<div class='room_name' id="+ Room_names +" onclick='redirectToRoomName(this.id)'>" + Room_names + "</div> <hr>";
        document.getElementById("output").innerHTML += row;
        //End code
        });});}
  getData();
  
  function addRoom() {
        room_name = document.getElementById("room_name").value;
        firebase.database().ref("/").child("room_name").update({purpose : "adding room name"});
        localStorage.setItem("room_name", room_name);
        window.location = "kwitter_page.html";
  }
  
  function redirectToRoomName(name) {
        console.log(name);
        localStorage.setItem("room_name", name);
        window.location = "kwitter_page.html"
  }
  
  function logOut() {
        localStorage.removeItem("user_name");
        localStorage.removeItem("room_name");
        window.location = "index.html";
  }