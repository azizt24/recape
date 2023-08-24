function calculateGrade() {
  var subject1Score = parseFloat(document.getElementById("subject1").value);
  var subject2Score = parseFloat(document.getElementById("subject2").value);
  var subject3Score = parseFloat(document.getElementById("subject3").value);

  var averageScore = (subject1Score + subject2Score + subject3Score) / 3;

  var grade;
  if (averageScore >= 90) {
      grade = "A";
  } else if (averageScore >= 80) {
      grade = "B";
  } else if (averageScore >= 70) {
      grade = "C";
  } else if (averageScore >= 60) {
      grade = "D";
  } else {
      grade = "F";
  }

  alert("Your grade is: " + grade);
}
