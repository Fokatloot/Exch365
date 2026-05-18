function showRegister() {

  document.getElementById("loginScreen").style.display = "none";
  document.getElementById("registerScreen").style.display = "block";
}

function showLogin() {

  document.getElementById("registerScreen").style.display = "none";
  document.getElementById("loginScreen").style.display = "block";
}

function registerUser() {

  alert("Registration Successful");

  window.location.href = "Dashboard.html";
}

function loginUser() {

  alert("Login Successful");

  window.location.href = "Dashboard.html";
}
