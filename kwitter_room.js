function addUser() {
      user_name = document.getElementById("user_name").value;
      localStorage.setItem("user_name" , user_name);
      window.location = "kwitter_room.html";
  }
  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
      apiKey: "AIzaSyBak6_1bZcJuA_e5ui3pJGqoxohfQkRIlM",
      authDomain: "social-web-530de.firebaseapp.com",
      databaseURL: "https://social-web-530de-default-rtdb.firebaseio.com",
      projectId: "social-web-530de",
      storageBucket: "social-web-530de.appspot.com",
      messagingSenderId: "332688400037",
      appId: "1:332688400037:web:a519f88ba392098152374c"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    

//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();



function addRoom(){
  room_name = document.getElementById("room_name").value;
  firebase.database().ref ("/").child(room_name).update({purpose : "adding room name"});
  localStorage.setItem("room_name",room_name);
  window.location = "kwitter_page.html";
}
function getData(){
      firebase.database().ref("/").on('value',function(snapshot)
      {
            document.getElementById("output").innerHTML="";
            snapshot.forEach(function(childSnapshot)
            {
                  childKey=childSnapshot.key;
                  Room_names=childKey;
                  console.log("Room names" + Room_names);
                  row="<div class='room_name' id="+Room_names+"onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
                  document.getElementById("output").innerHTML+=row;
            });
      });
}
getData();
function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name",name);
      window.location="kwitter_page.html";
}
