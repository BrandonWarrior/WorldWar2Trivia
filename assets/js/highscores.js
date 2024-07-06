// Function to fetch usernames and scores from localStorage
function getHighScores() {
    let highScores = JSON.parse(localStorage.getItem('highScores')) || [];
    return highScores;
}

// Function to display high scores from localStorage
function displayHighScores() {
    const highScores = getHighScores();
    highscoresList.innerHTML = '';
    highScores.forEach((score, index) => {
        const li = document.createElement('li');
        li.innerText = `${score.name}: ${score.score}`;
        highscoresList.appendChild(li);
    });
}

// Display high scores when page loads
document.addEventListener('DOMContentLoaded', displayHighScores);
const highscoresList = document.getElementById('highscores-list');

// Display high scores when page loads
document.addEventListener('DOMContentLoaded', displayHighScores);