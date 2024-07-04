document.getElementById('start-quiz').addEventListener('click', function() {
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

document.getElementById('highscores').addEventListener('click', function() {
    // Redirect to the high scores page
    window.location.href = 'highscores.html';
});