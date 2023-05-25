$(document).ready(function() {
  $('#registration-form').submit(function(e) {
    e.preventDefault();

    var name = $('#name').val();
    var email = $('#email').val();
    var password = $('#password').val();
    var dob = $('#dob').val();
    var address = $('#address').val();
    var rollNumber = $('#roll-number').val();

    // Create an object with the form data
    var formData = {
      name: name,
      email: email,
      password: password,
      dob: dob,
      address: address,
      rollNumber: rollNumber
    };

    // Get the existing data from localStorage or initialize an empty array
    var storedData = JSON.parse(localStorage.getItem('userRegistrations')) || [];

    // Push the new registration data to the array
    storedData.push(formData);

    // Store the updated data in localStorage
    localStorage.setItem('userRegistrations', JSON.stringify(storedData));

    // Clear the form inputs
    $('#name').val('');
    $('#email').val('');
    $('#password').val('');
    $('#dob').val('');
    $('#address').val('');
    $('#roll-number').val('');

    // Display success message
    $('#response-message').removeClass('error-message').addClass('success-message').text('Registration successful!');
  });
});
