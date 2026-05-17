function showRegister(){

document.getElementById("loginScreen").classList.remove("active");

document.getElementById("registerScreen").classList.add("active");

}

function showLogin(){

document.getElementById("registerScreen").classList.remove("active");

document.getElementById("loginScreen").classList.add("active");

}

function registerUser(){

alert("Registration Successful");

document.getElementById("registerScreen").classList.remove("active");

document.getElementById("homeScreen").classList.add("active");

}

function loginUser(){

alert("Login Successful");

document.getElementById("loginScreen").classList.remove("active");

document.getElementById("homeScreen").classList.add("active");

<button onclick="openDeposit()">Deposit</buttonfunction openDeposit(){

document.getElementById("depositPopup").style.display="flex";

}

function closeDeposit(){

document.getElementById("depositPopup").style.display="none";

}

function submitDeposit(){

alert("Deposit Request Submitted");

closeDeposit();

}