document.getElementById('exe-form').addEventListener('submit', submitForm);

function submitForm(event) {
  event.preventDefault(); // Prevent the default form submission behavior

  // Get the input field value
  var executablePath = document.getElementById('exe-path').value;

  // You can now do something with the input value, for example, display it in an alert
  window.api.runPath(executablePath);
  // You can also send the value to a server using AJAX or perform any other desired action.
}
