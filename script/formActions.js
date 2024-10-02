const button = document.getElementById("submit_button");
const form = document.getElementById("form");

export function getFormData() {
  const firstName = document
    .querySelector('.input_first[placeholder="First Name"]')
    .value.trim();
  const lastName = document
    .querySelector('.input_first[placeholder="Last name"]')
    .value.trim();
  const email = document
    .querySelector('.input_first[placeholder="Email"]')
    .value.trim();
  const phoneNumber = document
    .querySelector('.input_first[placeholder="Phone Number"]')
    .value.trim();
  const subject = document.querySelector(".input_second").value.trim();
  const message = document.querySelector(".input_third").value.trim();

  return {
    firstName,
    lastName,
    email,
    phoneNumber,
    subject,
    message,
  };
}

function validateForm(formData) {
  const errors = [];

  if (!formData.firstName) {
    errors.push("First Name is required");
  }
  if (!formData.lastName) {
    errors.push("Last Name is required");
  }

  if (!formData.email) {
    errors.push("email is required");
  }
  if (!formData.phoneNumber) {
    errors.push("email is required");
  }

  if (!formData.subject) {
    errors.push("Subject is required");
  }
  if (!formData.message) {
    errors.push("Message is required");
  }

  return errors;
}

function displayErrors(errors) {
  const errorContainer = document.getElementById("error_container");
  errorContainer.innerHTML = "";

  if (errors.length > 0) {
    errors.forEach((error) => {
      const errorElement = document.createElement("p");
      errorElement.classList.add("error-message");
      errorElement.textContent = error;
      errorContainer.appendChild(errorElement);
    });
    return false;
  }
  return true;
}

button.addEventListener("click", (event) => {
  event.preventDefault();

  const formData = getFormData();
  const validationErrors = validateForm(formData);

  if (displayErrors(validationErrors)) {
    form.innerHTML += `
      <div class="custom-alert">
        <h2>Form Submission</h2>
        <p><strong>First Name:</strong> ${formData.firstName}</p>
        <p><strong>Last Name:</strong> ${formData.lastName}</p>
        <p><strong>Email:</strong> ${formData.email}</p>
        <p><strong>Phone Number:</strong> ${formData.phoneNumber}</p>
        <p><strong>Subject:</strong> ${formData.subject}</p>
        <p><strong>Message:</strong> ${formData.message}</p>
        <button onclick="this.parentElement.remove()">Close</button>
      </div>
    `;
  }
});
