const form = document.getElementById('form');
const password1El = document.getElementById('password1');
const password2El = document.getElementById('password2');
const messageContainer = document.querySelector('.message-container');
const message = document.getElementById('message');

//State Variables
let isValid = false;
let passwordsMatch = false;

const validateForm = function () {
  //Using Constraint API
  isValid = form.checkValidity();
  // Style main message for an error
  if (!isValid) {
    message.textContent = 'Please Fill Out All Fields';
    message.style.color = 'red';
    messageContainer.style.borderColor = 'red';
    return;
  }
  //Check to see if passwords Match
  if (password1El.value === password2El.value) {
    passwordsMatch = true;
    password1El.style.borderColor = 'green';
    password2El.style.borderColor = 'green';
  } else {
    passwordsMatch = false;
    message.textContent = 'Make Sure Passwords Match!';
    message.style.color = 'red';
    messageContainer.style.borderColor = 'red';
    password1El.style.borderColor = 'red';
    password2El.style.borderColor = 'red';
    return;
  }
  // If form is valid and passwords match
  if (isValid && passwordsMatch) {
    message.textContent = 'Successfully Registered!';
    message.style.color = 'green';
    messageContainer.style.borderColor = 'green';
  }
};

const storeFormData = function () {
  const user = {
    name: form.name.value,
    phone: form.phone.value,
    email: form.email.value,
    website: form.website.value,
    password: form.password.value,
  };
  //Do something with User Data
  console.log(user);
};

const processFormData = function (e) {
  e.preventDefault();
  //Validate form
  validateForm();
  if (isValid && passwordsMatch) {
    storeFormData();
  }
};

//Event Listeners
form.addEventListener('submit', processFormData);
