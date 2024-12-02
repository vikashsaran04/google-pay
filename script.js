function startTimer(duration, display) {
    let timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            timer = duration;
        }
    }, 1000);
}

window.onload = function () {
    const timerDuration = 14 * 60 + 59; // 14 minutes and 51 seconds in seconds
    const display = document.querySelector('.timer');
    startTimer(timerDuration, display);
};


// JavaScript for mobile number validation and redirect
function validateAndRedirect() {
    const mobileNumber = document.getElementById("mobileNumber").value;

    // Check if the mobile number is exactly 10 digits and only contains numbers
    const isValid = /^\d{10}$/.test(mobileNumber);

    if (isValid) {
        // If valid, redirect to the "recharge.html" page
        window.location.href = "recharge.html";
    } else {
        // If invalid, show an alert message
        alert("Please enter a valid 10-digit mobile number.");
    }
}
