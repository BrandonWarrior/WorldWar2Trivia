# Welcome to: World War II Trivia 

Welcome to the World War 2 Trivia Quiz project! This interactive quiz application is designed to test your knowledge about various aspects of World War 2 history. From key events and battles to influential figures and significant dates, challenge yourself with a series of questions and see how well you know this pivotal period in global history.

![Am I responsive](docs/images/amiresponsive.png)

## Features:
- Multiple Choice Questions: Answer a variety of questions related to World War 2.

- Timer: Each question is timed to add an element of challenge.

- Detailed Feedback: After completing the quiz, receive detailed feedback on your answers.

- How to Play Page: Provides instructions on how to navigate and play the quiz, ensuring users understand the game mechanics.

## Technologies used:
- HTML, CSS: For structuring and styling the quiz interface.

- JavaScript: To handle quiz logic, including question generation and answers.

- Responsive Design: Ensures the quiz adapts well to various screen sizes, from desktops, tablets and mobile phones.

## Deployment
I deployed the page to GitHub Pages using the following steps:

- Navigate to the project's repository and click on the Settings tab.

- Select the Pages option from the menu on the left.

- In the Source section, choose the Main branch from the drop-down menu and click Save.

- A confirmation message will appear, indicating a successful deployment to GitHub Pages and providing the live URL.

- You can find the live site via the following URL: https://brandonwarrior.github.io/WorldWar2Trivia/index.html

## Color Scheme

### Primary Colors
- Gold (#FFD700): This color is used for text and buttons, providing a sharp contrast against darker backgrounds. It symbolizes value and significance, drawing attention to key elements and interactive features.

- Black (#000000): The black background for the header text and other elements symbolizes the somber and serious tone of the subject matter, providing a strong foundation for the visual hierarchy.

### Secondary Colors 
- Dark Gray (#333333): Used as the background for containers and footers, this color provides a neutral but sophisticated backdrop that ensures content readability while maintaining the overall aesthetic.

- Red (#FF0000): Employed for alert messages and feedback, red commands attention and signals importance or urgency, making it perfect for providing immediate feedback to users.

- Green (#00FF00): This bright green color is used for correct answers and rating, symbolizing success and positive feedback. It provides a clear visual cue that the user has selected the right answer or achieved a good rating.

## Background 
- Background Image: The background image, a custom-created piece reflecting World War II themes, serves as a powerful visual anchor. It is set to cover the entire screen and maintain a consistent appearance across different devices and screen sizes, enhancing the immersive experience.

## Font
- The font family used is "Oswald," a sans-serif typeface that is both modern and legible, adding to the overall clarity and usability of the quiz interface.

## Index page
[]()
[]()
## Quiz

[]()
[]()

## Results

[]()
[]()
[]()

## Validation

[]()
[]()
[]()
[]()

## Lighthouse

### Mobile 
[]()
[]()

### Desktop
[]()
[]()

## Bugs

### Bug 1 
- Porblem with the timer not resetting when the 'Restart Quiz' Button was clicked.  
### Fix
- Instead of making 2 different functions for startTimer and ResetTimer. i merged them togther to make resetAndStartTimer function. It ensures that the timer starts fresh with the specified duration, updates the timer display regularly, and triggers actions when the time runs out, such as showing an alert and displaying the quiz results.

### Bug 2
-  Problem when multiple clicks to a single answer question contirbuting to the overall score. Example: 20/12. 
### Fix
- Made the corect answer buttons unclickable once clicked for subsequent clicks. 
### Bug 3
- Code changes not applying to runnable python3 -m http.server. 
### Fix
- Deleting browser history, coockies and clearing cached images and files solved the problem and code update and changes were applied.
### Bug 4
- Google Font not applying to buttons throughout the quiz. 
### Fix
- applied the font stlying to buttons in css showed the font on my buttons throughout the quiz. 


## Credits:
- background image - I created the background image using a AI image generator https://www.canva.com/design/DAGKxMr4i6w/K6HHEQgduea1uBTfz6EkOQ/edit?ui=eyJFIjp7IkE_IjoiViIsIkIiOiJCIn0sIkciOnsiQiI6dHJ1ZX19

- The code used for the background image shorthand was taken from the Love Running project.

- Font - Google Fonts 

- To generate the questions I was going to use I used ChatGPT https://openai.com/chatgpt/