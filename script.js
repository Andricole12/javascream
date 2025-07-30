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

// Starfield animation
const canvas = document.getElementById('starfield');
const ctx = canvas.getContext('2d');
let stars = [];

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener('resize', resizeCanvas);

function createStars(count) {
    stars = [];
    for (let i = 0; i < count; i++) {
        stars.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            radius: Math.random() * 1.5 + 0.5,
            speed: Math.random() * 0.5 + 0.2
        });
    }
}
createStars(120);

function animateStars() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "#fff";
    for (let star of stars) {
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fill();
        star.y += star.speed;
        if (star.y > canvas.height) {
            star.y = 0;
            star.x = Math.random() * canvas.width;
        }
    }
    requestAnimationFrame(animateStars);
}
animateStars();