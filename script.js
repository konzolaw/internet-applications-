document.addEventListener("DOMContentLoaded", function () {
    // Get the footer text element
    const footerText = document.getElementById("footer-text");

    // Set initial position
    let position = 0;

    // Animation function
    function animateFooter() {
        // Update the position
        position += 1;

        // Apply the new position to the left style property
        footerText.style.left = position + "px";

        // Reset the position if it goes beyond the screen width
        if (position > window.innerWidth) {
            position = -footerText.offsetWidth;
        }

        // Call the function recursively
        requestAnimationFrame(animateFooter);
    }

    // Start the animation
    animateFooter();
});
