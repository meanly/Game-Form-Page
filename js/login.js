document.addEventListener("DOMContentLoaded", function () {
  const loginButton = document.querySelector(".btn");
  const errorLabel = document.createElement("label");
  errorLabel.style.color = "red";
  errorLabel.style.display = "none"; // Initially hidden
  errorLabel.textContent = "Incorrect username or password!";

  const loginForm = document.querySelector("#register_form");
  const staySignedInCheckbox = loginForm.querySelector("#check");
  const usernameInput = loginForm.querySelector('input[name="username"]');
  const passwordInput = loginForm.querySelector('input[name="password"]');

  loginForm.appendChild(errorLabel); // Append error message to the form

  // Check if the "Stay signed in" checkbox is checked and autofill fields
  staySignedInCheckbox.addEventListener("change", function () {
    if (staySignedInCheckbox.checked) {
      usernameInput.value = "meanly";
      passwordInput.value = "admin123";
    } else {
      usernameInput.value = "";
      passwordInput.value = "";
    }
  });

  loginButton.addEventListener("click", function (event) {
    event.preventDefault(); // Prevent form submission

    const username = usernameInput.value.trim();
    const password = passwordInput.value.trim();

    if (!username || !password) {
      // If fields are empty, show an error
      errorLabel.textContent = "* All fields are required!";
      errorLabel.style.display = "block";
    } else if (username === "meanly" && password === "admin123") {
      // Correct login, redirect to success.html
      window.location.href = "success.html";
    } else {
      // Incorrect login, show error message
      errorLabel.textContent = "Incorrect username or password!";
      errorLabel.style.display = "block";
    }
  });
});
