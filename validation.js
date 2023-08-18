function validateForm() {
    var name = document.getElementById("name").value;
    var mobile = document.getElementById("mobile").value;
    var mobileError = document.getElementById("mobileError"); // Get the error span element
    
    // Validate mobile number
    var mobileRegex = /^[0-9]{10}$/;
    if (!mobile.match(mobileRegex)) {
        mobileError.textContent = "Please enter a valid 10-digit mobile number."; // Show error message
        return false;
    } else {
        mobileError.textContent = ""; // Clear error message if valid
    }
    
    // Form is valid, submit it
    return true;
}
