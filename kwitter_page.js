function getData() {
   firebase.database().ref("/" + room_name).on("value", function (snapshot) {
         document.getElementById("output").innerHTML = ""; snapshot.forEach(function (childSnapshot) {
               childKey = childSnapshot.key; childData = childSnapshot.val(); if (childKey != "purpose") {
                     firebase_message_id = childKey;
                     message_data = childData;
                     console.log(firebase_message_id);
                     console.log(message_data);
                     user_name = message_data('name');
                     message = message_data('message');
                     like = message_data('like');
                     name_with_tag = "<h4>" + user_name + "<img class='user_tick' src='tick.png'> </h4>";
                     message_with_tag = "<h4 class='meassage_h4'>" + message + "</h4>";
                     like_button = "<button class='btn btn-warning' id" + firebase_message_id + "value = " + like + "onclick = 'updateLike(this.id)'>";
                     span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'> like : " + like + "</span> <hr>";
                     row = name_with_tag + message_with_tag + like_button + span_with_tag;
                     document.getElementById("output").innerHTML += row;
               }
         });
   });
}
getData();

function send() {
   msg = document.getElementById("output").value;
   firebase.database().ref("/" + room_name).push({
         name: user_name,
         message: msg,
         like: 0
   });
   document.getElementById("output").value = "";

}

function logOut() {
   localStorage.removeItem("user_name");
   localStorage.removeItem("room_name");
   window.location = "index.html";
}

function updateLike(message_id) {
   console.log("Number of times like button clicked - " + message_id);
   button_id = message_id;
   likes = document.getElementById(button_id).value;
   updated_likes = Number(likes) + 1;
   console.log(updated_likes);
   firebase.database().ref(room_name).child(message_id).update({
         like : updated_likes
   });
}