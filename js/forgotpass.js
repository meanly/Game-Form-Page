document.addEventListener("DOMContentLoaded", function () {
  const forgotPassButton = document.querySelector(".btn");
  const errorLabel = document.createElement("label");
  errorLabel.style.color = "red";
  errorLabel.style.display = "none"; // Initially hidden
  errorLabel.textContent = "* All fields are required!";

  const emailErrorLabel = document.createElement("label");
  emailErrorLabel.style.color = "red";
  emailErrorLabel.style.display = "none"; // Initially hidden
  emailErrorLabel.textContent = "Please enter a valid email address!";

  const forgotPassForm = document.querySelector("#register_form");
  const emailInput = forgotPassForm.querySelector('input[name="email"]');
  const usernameInput = forgotPassForm.querySelector('input[name="username"]');

  // Append error messages to the form
  forgotPassForm.appendChild(errorLabel);
  forgotPassForm.appendChild(emailErrorLabel);

  // Email validation function
  function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  // Check if all fields are filled and the email is valid
  forgotPassButton.addEventListener("click", function (event) {
    event.preventDefault(); // Prevent form submission

    const email = emailInput.value.trim();
    const username = usernameInput.value.trim();

    if (!email || !username) {
      // Show error if any field is empty
      errorLabel.textContent = "* All fields are required!";
      errorLabel.style.display = "block";
      emailErrorLabel.style.display = "none"; // Hide email error
    } else if (!isValidEmail(email)) {
      // Show email validation error if email is invalid
      emailErrorLabel.style.display = "block";
      errorLabel.style.display = "none"; // Hide general error
    } else {
      // Hide errors and proceed with form submission
      errorLabel.style.display = "none";
      emailErrorLabel.style.display = "none";
      alert("Form submitted successfully!"); // Placeholder for actual submission logic
      // You can add logic for what happens next, e.g., sending an email for password reset
    }
  });
});
