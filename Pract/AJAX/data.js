$(document).ready(function() {
    // Get the stored data from localStorage
    var storedData = JSON.parse(localStorage.getItem('userRegistrations')) || [];
  
    // Retrieve the table body element
    var userDataElement = $('#user-data');
  
    // Iterate over the stored data and generate HTML rows
    for (var i = 0; i < storedData.length; i++) {
      var user = storedData[i];
      var row = '<tr><td>' + user.name + '</td><td>' + user.email + '</td><td>' + user.password + '</td><td>' + user.dob + '</td><td>' + user.address + '</td><td>' + user.rollNumber + '</td></tr>';
      userDataElement.append(row);
    }
  
    // Add event listener to clear data button
    $('#clear-data-btn').click(function() {
      // Clear all data from localStorage
      localStorage.removeItem('userRegistrations');
      // Remove all rows from the table
      userDataElement.empty();
    });
  });
  