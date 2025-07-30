const sounds = {
    rock: new Audio('Media/rock.mp3'),
    paper: new Audio('Media/paper.mp3'),
    scissors: new Audio('Media/scissors.mp3')
};

document.querySelectorAll('.choice').forEach(button => {
    button.addEventListener('click', () => {
        const userChoice = button.getAttribute('data-choice');
        const choices = ['rock', 'paper', 'scissors'];
        const computerChoice = choices[Math.floor(Math.random() * 3)];

        // Play sound effect for 1.5 seconds
        if (sounds[userChoice]) {
            sounds[userChoice].currentTime = 0;
            sounds[userChoice].play();
            setTimeout(() => {
                sounds[userChoice].pause();
                sounds[userChoice].currentTime = 0;
            }, 1500);
        }

        document.getElementById('user-choice').textContent = `Your choice: ${userChoice}`;
        document.getElementById('computer-choice').textContent = `Computer's choice: ${computerChoice}`;

        let result = '';
        if (userChoice === computerChoice) {
            result = "It's a draw!";
        } else if (
            (userChoice === 'rock' && computerChoice === 'scissors') ||
            (userChoice === 'paper' && computerChoice === 'rock') ||
            (userChoice === 'scissors' && computerChoice === 'paper')
        ) {
            result = "You win!";
        } else {
            result = "You lose!";
        }
        document.getElementById('game-result').textContent = `Result: ${result}`;
    });
});