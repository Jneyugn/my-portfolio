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