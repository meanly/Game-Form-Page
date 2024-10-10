document.addEventListener("DOMContentLoaded", function () {
  const signupButton = document.querySelector(".btn"); // Updated button reference
  const errorLabel = document.createElement("label");
  errorLabel.style.color = "red"; // Change to desired error color
  errorLabel.style.display = "none"; // Initially hidden
  errorLabel.textContent = "* All fields are required!";

  const ageErrorLabel = document.createElement("label");
  ageErrorLabel.style.color = "red"; // Change to desired error color
  ageErrorLabel.style.display = "none"; // Initially hidden
  ageErrorLabel.textContent = "You must be at least 18 years old!";

  const emailErrorLabel = document.createElement("label");
  emailErrorLabel.style.color = "red"; // Change to desired error color
  emailErrorLabel.style.display = "none"; // Initially hidden
  emailErrorLabel.textContent = "Please enter a valid email address!";

  const registerForm = document.getElementById("register_form"); // Updated form reference
  registerForm.appendChild(errorLabel);
  registerForm.appendChild(ageErrorLabel);
  registerForm.appendChild(emailErrorLabel); // Append email error label

  // Email validation function
  function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  signupButton.addEventListener("click", function (event) {
    event.preventDefault(); // Prevent form submission
    const inputs = registerForm.querySelectorAll("input");
    let allFilled = true;

    // Check if all input fields are filled
    inputs.forEach((input) => {
      if (!input.value) {
        allFilled = false;
      }
    });

    // Validate email
    const emailInput = registerForm.querySelector('input[name="email"]'); // Update with your actual email input name
    const email = emailInput.value.trim();
    const validEmail = isValidEmail(email);

    // Check if the user is at least 18 years old
    const birthdayInput = registerForm.querySelector(".birthday-input").value; // Use input type date
    const dob = new Date(birthdayInput);
    const age = new Date().getFullYear() - dob.getFullYear();
    const isAdult = age > 18 || (age === 18 && new Date() >= dob);

    // Show or hide the error messages
    if (!allFilled) {
      errorLabel.style.display = "block"; // Show error
      ageErrorLabel.style.display = "none"; // Hide age error
      emailErrorLabel.style.display = "none"; // Hide email error
    } else if (!validEmail) {
      emailErrorLabel.style.display = "block"; // Show email error
      errorLabel.style.display = "none"; // Hide general error
      ageErrorLabel.style.display = "none"; // Hide age error
    } else if (!isAdult) {
      ageErrorLabel.style.display = "block"; // Show age error
      errorLabel.style.display = "none"; // Hide general error
      emailErrorLabel.style.display = "none"; // Hide email error
    } else {
      errorLabel.style.display = "none"; // Hide general error
      ageErrorLabel.style.display = "none"; // Hide age error
      emailErrorLabel.style.display = "none"; // Hide email error
      // Redirect to success.html
      window.location.href = "success.html"; // Adjust the path if needed
    }
  });
});
