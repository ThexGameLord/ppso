document.getElementById('subscribe-form').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent the form from submitting traditionally

  // Get form data
  var formData = new FormData(event.target);

  // Convert form data to URL-encoded format
  var encodedFormData = new URLSearchParams(formData).toString();

  // Send a POST request to the subscription endpoint
  fetch('https://reviiiveme.thexgamelord.repl.co/subscribe', {
    method: 'POST',
    body: encodedFormData,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  })
  .then(response => response.text())
  .then(message => {
    // Update the message element with the response message
    //document.getElementById('message').innerText = message;
    alert(message)
  })
  .catch(error => {
    console.error('Error:', error);
  });
});
