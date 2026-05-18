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

localStorage.setItem("mobile", mobile);
localStorage.setItem("password", password);

alert("Registration Successful");
}

function loginUser() {

let mobile = document.getElementById("mobile").value.trim();
let password = document.getElementById("password").value.trim();

let savedMobile = localStorage.getItem("mobile");
let savedPassword = localStorage.getItem("password");

if(mobile === savedMobile && password === savedPassword){

alert("Login Successful");

window.location.href = "dashboard.html";

}else{

alert("Pehle Register karo ya sahi details dalo");

}

}
