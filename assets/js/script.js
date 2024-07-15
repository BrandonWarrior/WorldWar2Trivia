/**
 * This script handles the initial user interaction on the homepage.
 * It validates the username input and redirects the user to the quiz page.
 */

document.addEventListener('DOMContentLoaded', function() {
    const startQuizButton = document.getElementById('start-quiz');
    const usernameInput = document.getElementById('username');
    const alertBox = document.getElementById('alert-box');

    /**
     * Adds an event listener to the start quiz button. 
     * Validates the username input and redirects to the quiz page.
     */
    if (startQuizButton) {
        startQuizButton.addEventListener('click', function() {
            const username = usernameInput.value.trim();

            if (username === '') {
                alertBox.classList.remove('hidden'); // Show alert message
            } else {
                alertBox.classList.add('hidden'); // Hide alert message
                localStorage.setItem('username', username); // Save username to localStorage
                window.location.href = 'quiz.html'; // Redirect to the quiz page
            }
        });
    }
});