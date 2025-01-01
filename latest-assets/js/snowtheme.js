document.addEventListener("DOMContentLoaded", function() {
    const snowContainer = document.querySelector(".snow-container");

    const particlesPerThousandPixels = 0.1;
    const fallSpeed = 1.00;
    const pauseWhenNotActive = true;
    const maxSnowflakes = 80;
    const snowflakes = [];

    let snowflakeInterval;
    let isTabActive = true;

    function resetSnowflake(snowflake) {
        const size = Math.random() * 5 + 1;
        const viewportWidth = window.innerWidth - size; // Adjust for snowflake size
        const viewportHeight = window.innerHeight;

        snowflake.style.width = `${size}px`;
        snowflake.style.height = `${size}px`;
        snowflake.style.left = `${Math.random() * viewportWidth}px`; // Constrain within viewport width
        snowflake.style.top = `-${size}px`;

        const animationDuration = (Math.random() * 3 + 2) / fallSpeed;
        snowflake.style.animationDuration = `${animationDuration}s`;
        snowflake.style.animationTimingFunction = "linear";
        snowflake.style.animationName =
            Math.random() < 0.5 ? "fall" : "diagonal-fall";

        setTimeout(() => {
            if (parseInt(snowflake.style.top, 10) < viewportHeight) {
                resetSnowflake(snowflake);
            } else {
                snowflake.remove(); // Remove when it goes off the bottom edge
            }
        }, animationDuration * 1000);
    }

    function createSnowflake() {
        if (snowflakes.length < maxSnowflakes) {
            const snowflake = document.createElement("div");
            snowflake.classList.add("snowflake");
            snowflakes.push(snowflake);
            snowContainer.appendChild(snowflake);
            resetSnowflake(snowflake);
        }
    }

    function generateSnowflakes() {
        const numberOfParticles =
            Math.ceil((window.innerWidth * window.innerHeight) / 1000) *
            particlesPerThousandPixels;
        const interval = 5000 / numberOfParticles;

        clearInterval(snowflakeInterval);
        snowflakeInterval = setInterval(() => {
            if (isTabActive && snowflakes.length < maxSnowflakes) {
                requestAnimationFrame(createSnowflake);
            }
        }, interval);
    }

    function handleVisibilityChange() {
        if (!pauseWhenNotActive) return;

        isTabActive = !document.hidden;
        if (isTabActive) {
            generateSnowflakes();
        } else {
            clearInterval(snowflakeInterval);
        }
    }

    generateSnowflakes();

    window.addEventListener("resize", () => {
        clearInterval(snowflakeInterval);
        setTimeout(generateSnowflakes, 1000);
    });

    document.addEventListener("visibilitychange", handleVisibilityChange);
});




// Function to show the greeting message
function showGreetingMessage() {
    const greetingMessage = document.getElementById('greeting-message');
    greetingMessage.style.display = 'block';

    // Hide after 5 seconds if not closed
    setTimeout(() => {
        if (greetingMessage.style.display === 'block') {
            greetingMessage.style.display = 'none';
        }
    }, 10000);
}

// Function to handle closing the greeting message (either by closing or pressing "Thank You")
function closeGreetingMessage() {
    const greetingMessage = document.getElementById('greeting-message');
    greetingMessage.style.display = 'none';

    // Store the date when the greeting message was closed
    const currentDate = new Date().toISOString().split('T')[0]; // Store date as 'YYYY-MM-DD'
    localStorage.setItem('greetingClosedDate', currentDate);
}

// Check if the greeting message has already been shown today
function checkGreetingMessageVisibility() {
    const lastClosedDate = localStorage.getItem('greetingClosedDate');
    const currentDate = new Date().toISOString().split('T')[0]; // Get today's date 'YYYY-MM-DD'

    // If the greeting was shown today, don't show it again
    if (lastClosedDate === currentDate) {
        return; // Do nothing if the message was already shown today
    }

    // If it's a new day, show the greeting message after 5 seconds
    setTimeout(showGreetingMessage, 5000);
}

// Add event listener to the "Thank You" button
document.getElementById('thank-you-button').addEventListener('click', closeGreetingMessage);

// Check if the greeting message should be shown
checkGreetingMessageVisibility();