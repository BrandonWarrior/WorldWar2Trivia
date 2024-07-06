document.addEventListener('DOMContentLoaded', function() {
    const startQuizButton = document.getElementById('start-quiz');
    if (startQuizButton) {
        startQuizButton.addEventListener('click', function() {
            const username = document.getElementById('username').value;
            if (username) {
                // Save the username to local storage
                localStorage.setItem('username', username);
                alert(`Welcome, ${username}! Starting the quiz...`);
                // Redirect to the quiz page
                window.location.href = 'quiz.html';
            } else {
                alert('Please enter a username.');
            }
        });
    }

    const highscoresButton = document.getElementById('highscores');
    if (highscoresButton) {
        highscoresButton.addEventListener('click', function() {
            // Redirect to the high scores page
            window.location.href = 'highscores.html';
        });
    }
});