document.addEventListener('DOMContentLoaded', function() {
    const startQuizButton = document.getElementById('start-quiz');
    const usernameInput = document.getElementById('username');
    const alertBox = document.getElementById('alert-box');

    if (startQuizButton) {
        startQuizButton.addEventListener('click', function() {
            const username = usernameInput.value.trim();

            if (username === '') {
                alertBox.classList.remove('hidden'); // Show alert message
            } else {
                alertBox.classList.add('hidden'); // Hide alert message
                localStorage.setItem('username', username); // Save username to localStorage
                // Redirect to the quiz page
                window.location.href = 'quiz.html';
            }
        });
    }
});