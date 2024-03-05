// Function to check the grade based on the score
function checkGrade(score) {
  if (score >= 90) {
    return "A";
  } else if (score >= 80) {
    return "B";
  } else if (score >= 70) {
    return "C";
  } else if (score >= 50) {
    return "D";
  } else {
    return "F";
  }
}

// Function to handle form submission
function handleFormSubmit(event) {
  event.preventDefault();
  
  const scoreInput = document.getElementById("scoreInput");
  const gradeResult = document.getElementById("gradeResult");
  
  const score = parseInt(scoreInput.value);
  
  if (!isNaN(score)) {
    const grade = checkGrade(score);
    gradeResult.textContent = `Your grade is ${grade}`;
    scoreInput.value = "";
  } else {
    gradeResult.textContent = "Invalid score. Please enter a number.";
  }
}

// Event listener for the form submission
document.getElementById("gradeForm").addEventListener("submit", handleFormSubmit);
