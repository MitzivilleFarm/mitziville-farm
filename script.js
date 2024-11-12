// Wait for the DOM to load before adding event listeners
document.addEventListener('DOMContentLoaded', function() {
    // Get the form element by its ID
    var form = document.getElementById('login-form');
    
    // Add event listener to the form to handle submit event
    form.addEventListener('submit', function(event) {
        // Prevent the form from submitting and reloading the page
        event.preventDefault();

        // Get the values of the input fields (username and password)
        var username = document.getElementById('username').value;
        var password = document.getElementById('password').value;

        // Define the correct username and password
        var correctUsername = "mitzivillefarm";
        var correctPassword = "mf2018";

        // Check if the entered username and password are correct
        if (username === correctUsername && password === correctPassword) {
            // If correct, show success message and redirect
            alert("Login successful!");
            window.location.href = "https://mitziville-farm-48002796.hubspotpagebuilder.com/mitziville-farm-members-page"; 
        } else {
            // If incorrect, show an error message
            document.getElementById('error-message').style.display = 'block';
        }
    });
});
