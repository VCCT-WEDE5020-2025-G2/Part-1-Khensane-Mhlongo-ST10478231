//This code will make the Return button navigate back to the previous page when clicked.
document.addEventListener('DOMContentLoaded', () => {
    // Find the return button by its ID to implement the code
    const returnButton = document.querySelector('#returnButton');
    
    // This checks if button exists before adding the listener
    if (returnButton) {
        returnButton.addEventListener('click', () => {
            // Uses the users history to go back to previous page
            window.history.back();
        });
    }
});