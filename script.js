//JavaScript Interactivity - Toggle Project Details

document.addEventListener("DOMContentLoaded", () => {

    const buttons = document.querySelectorAll('.details-button');
    const details = document.querySelectorAll('.project-details');

    buttons.forEach((button, index) => {
        button.addEventListener('click', () => {

            const detail = details[index];

            if (detail.style.display === "none" || detail.style.display === "") {
                detail.style.display = "block";
                button.textContent = "Hide Details";  
            } else {
                detail.style.display = "none";  
                button.textContent = "Show Details";
            }
        });
      });
    });


    //Form validation

    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();

        let valid = true;

        const name = document.getElementById('name');
        const email = document.getElementById('email');
        const message = document.getElementById('message');
        
        const nameError = document.getElementById('name-error');
        const emailError = document.getElementById('email-error');
        const messageError = document.getElementById('message-error');

        if (name.value.trim() === '') {
            nameError.textContent = 'Name is required.';
            valid = false;
        } else {
            nameError.textContent = '';
        }
    
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        if (email.value.trim() === '') {
            emailError.textContent = 'Email is required.';
            valid = false;
        } else if (!emailPattern.test(email.value.trim())) {
            emailError.textContent = 'Please enter a valid email address.';
            valid = false;
        } else {
            emailError.textContent = '';
        }
        if (message.value.trim() === '') {
            messageError.textContent = 'Message is required.';
            valid = false;
        } else {
            messageError.textContent = '';
        }

        if (valid) {

            alert('Form submitted successfully!');

        }
    });

    //get location function

    const locationButton = document.getElementById("get-location-btn");
    locationButton.addEventListener("click", getLocation);

    function getLocation() {
        const locationElement = document.getElementById("location");

        if (navigator.geolocation) {
            locationElement.innerHTML = "Getting location...";
        navigator.geolocation.getCurrentPosition(showPosition, showError);
    } else {
        locationElement.innerHTML = "Geolocation is not supported by this browser.";
    }
}

function showPosition(position) {
    const locationElement = document.getElementById("location");

    locationElement.innerHTML = `Latitude: ${position.coords.latitude}<br>Longitude: ${position.coords.longitude}`;
}

function showError(error) {
    const locationElement = document.getElementById("location");

    switch (error.code) {
        case error.PERMISSION_DENIED:
            locationElement.innerHTML = "User denied the request for Geolocation.";
            break;
        case error.POSITION_UNAVAILABLE:
            locationElement.innerHTML = "Location information is unavailable.";
            break;
        case error.TIMEOUT:
            locationElement.innerHTML = "The request to get user location timed out.";
            break;
        case error.UNKNOWN_ERROR:
            locationElement.innerHTML = "An unknown error occurred.";
            break;
    }
}

//toggle betweenb light and dark

/*toggle between light and dark mode"*/

const toggleThemeButton = document.getElementById('toggleTheme');
toggleThemeButton.addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
});
