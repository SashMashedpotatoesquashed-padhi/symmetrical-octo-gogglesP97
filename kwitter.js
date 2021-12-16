
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

   function addUser() {
    user_name = document.getElementById("user_name").value;
    localStorage.setItem("user_name" , user_name);
    window.location = "kwitter_room.html";
}