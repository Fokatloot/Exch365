function loginUser() {

let mobile = document.getElementById("mobile").value.trim();
let password = document.getElementById("password").value.trim();

if(mobile === "" || password === ""){
alert("Mobile Number aur Password zaroori hai");
return;
}

if(mobile.length !== 10 || isNaN(mobile)){
alert("Sahi 10 digit Mobile Number dalo");
return;
}

alert("Login Successful");

window.location.href = "dashboard.html";
}

function registerUser() {

let mobile = document.getElementById("mobile").value.trim();
let password = document.getElementById("password").value.trim();

if(mobile === "" || password === ""){
alert("Mobile Number aur Password zaroori hai");
return;
}

if(mobile.length !== 10 || isNaN(mobile)){
alert("Sahi 10 digit Mobile Number dalo");
return;
}

alert("Registration Successful");

window.location.href = "dashboard.html";
}
