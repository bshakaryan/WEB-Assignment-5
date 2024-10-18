var colors = ['white', 'pink'];

var button = document.getElementById('changeColorBtn');

button.addEventListener('click', handleChangeColor);

function handleChangeColor() {
    var currentColor = document.body.style.background;

    if (currentColor === colors[0] || currentColor === '') {
        document.body.style.background = colors[1];
    }
    else {
        document.body.style.background = colors[0];
    }
}

document.addEventListener('DOMContentLoaded', function() {
    // Initialize event listeners
    initializeThemeToggle();
    initializeRatingSystem();
    initializeTimeDisplay();
});

function initializeThemeToggle() {
    var themeButton = document.getElementById('themeButton');
    themeButton.addEventListener('click', toggleTheme);
}

function toggleTheme() {
    document.body.classList.toggle('night');
    document.body.classList.toggle('day');
}

function initializeRatingSystem() {
    var stars = document.querySelectorAll('.star');
    stars.forEach(function(star) {
        star.addEventListener('click', function() {
            setRating(star.dataset.value);
        });
    });
}

function setRating(rating) {
    var stars = document.querySelectorAll('.star');
    stars.forEach(function(s) {
        s.classList.remove('selected');
        if (s.dataset.value <= rating) {
            s.classList.add('selected');
        }
    });
}

function initializeTimeDisplay() {
    var timeButton = document.getElementById('timeButton');
    timeButton.addEventListener('click', displayCurrentTime);
}

function displayCurrentTime() {
    var currentTimeElement = document.getElementById('currentTime');
    var currentTime = new Date().toLocaleTimeString();
    currentTimeElement.textContent = 'Current Time: ' + currentTime;
}

document.addEventListener('DOMContentLoaded', function () {
    const showGreetingBtn = document.getElementById('showGreetingBtn');
    const greetingElement = document.getElementById('greeting');

    function displayGreeting() {
        const currentHour = new Date().getHours();
        let greeting;

        switch (true) {
            case (currentHour >= 5 && currentHour < 12):
                greeting = "Good Morning!";
                break;
            case (currentHour >= 12 && currentHour < 17):
                greeting = "Good Afternoon!";
                break;
            case (currentHour >= 17 && currentHour < 21):
                greeting = "Good Evening!";
                break;
            default:
                greeting = "Good Night!";
        }

        greetingElement.textContent = greeting;
    }

    showGreetingBtn.addEventListener('click', displayGreeting);
});
