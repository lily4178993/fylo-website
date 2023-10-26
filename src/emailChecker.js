let errorDiv; // Declare a variable to hold the error div

/**
 * Validate the email input field.
 * Prevent the form submission if the email is invalid.
 * Display an error message if the email is not in the correct format.
 * Clear the email input and error message if the email is valid.
 *
 * @param {HTMLInputElement} emailInput - The email input field.
 */
const mailValidation = (emailInput) => {
  const emailValue = emailInput.value.trim();
  const emailValidRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  // Remove the existing error div if it exists
  removeError(emailInput);

  // Check if the email is valid
  if (emailValue.match(emailValidRegex)) {
    emailInput.value = '';
    removeError(emailInput);
    removeErrorBorder(emailInput); // Remove error border
  } else {
    // Create and display the error div
    displayError(emailInput);
    addErrorBorder(emailInput); // Add error border
  }
};

/**
 * Display an error message below the email input.
 *
 * @param {HTMLInputElement} emailInput - The email input field.
 */
const displayError = (emailInput) => {
  errorDiv = document.createElement('div');
  errorDiv.id = 'error-' + emailInput.id; // Unique ID for each error div
  errorDiv.className = 'error-message';
  errorDiv.innerText = 'Please check your email';

  // Insert the error div below the email input
  emailInput.insertAdjacentElement('afterend', errorDiv);
};

/**
 * Remove the error message below the email input.
 *
 * @param {HTMLInputElement} emailInput - The email input field.
 */
const removeError = (emailInput) => {
  if (errorDiv) {
    // Remove the error div if it exists
    errorDiv.remove();
    errorDiv = null; // Reset the errorDiv variable
  }
};

/**
 * Add error border to the email input.
 *
 * @param {HTMLInputElement} emailInput - The email input field.
 */
const addErrorBorder = (emailInput) => {
  emailInput.style.borderColor = '#ff9b9b';
};

/**
 * Remove error border from the email input.
 *
 * @param {HTMLInputElement} emailInput - The email input field.
 */
const removeErrorBorder = (emailInput) => {
  emailInput.style.borderColor = ''; // Reset to default border color
};

export default mailValidation;
