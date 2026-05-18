function showRegister(){

  document.getElementById("loginScreen").classList.add("hidden");

  document.getElementById("registerScreen").classList.remove("hidden");
}

function showLogin(){

  document.getElementById("registerScreen").classList.add("hidden");

  document.getElementById("loginScreen").classList.remove("hidden");
}

function registerUser(){

  alert("Registration Successful");

  window.location.href = "Dashboard.html";
}

function loginUser(){

  alert("Login Successful");

  window.location.href = "Dashboard.html";
}
