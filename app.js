function loginUser() {

let mobile = document.getElementById("mobile").value;
let password = document.getElementById("password").value;

if(mobile === "" || password === ""){
alert("Please Fill All Details");
return;
}

alert("Login Successful");

window.location.href = "dashboard.html";
}

function registerUser() {

let mobile = document.getElementById("mobile").value;
let password = document.getElementById("password").value;

if(mobile === "" || password === ""){
alert("Please Fill All Details");
return;
}

alert("Registration Successful");

window.location.href = "dashboard.html";
}
