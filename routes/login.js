function handleEnter(e) {
  if (e.keyCode === 13) {
    validate()
  }
}
function validate() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  if (username === "admin" && password === "westmec") {
    alert("Login successful.");
    location.replace("home.html");
    return false;
  } else {
    alert("Username or password is incorrect, please try again.");
  }
}