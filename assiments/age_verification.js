function checkAge() {
  var age = parseInt(document.getElementById("ageInput").value);

  if (age >= 18) {
      document.getElementById("result").innerHTML = "Access granted. Welcome!";
  } else {
      document.getElementById("result").innerHTML = "Sorry, you are not old enough to access this content.";
  }
}
