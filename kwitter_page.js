const firebaseConfig = {
    apiKey: "AIzaSyCBbN7V6JIZqBObXeWL3vr0W3WR5_8Vs5U",
    authDomain: "coding-78a2f.firebaseapp.com",
    databaseURL: "https://coding-78a2f-default-rtdb.firebaseio.com",
    projectId: "coding-78a2f",
    storageBucket: "coding-78a2f.appspot.com",
    messagingSenderId: "272428798203",
    appId: "1:272428798203:web:d63444e2526191ab01605e"
  };
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);
user_name=localStorage.getItem("user_name");
room_name=localStorage.getItem("room_name");
function send(){
    msg=document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
        name:user_name,
        message:msg,
        like:0
    });
    document.getElementById("msg").value="";
}
