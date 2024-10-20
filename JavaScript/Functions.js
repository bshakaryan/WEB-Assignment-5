// Data structure to hold programming languages and their popularity
const programmingLanguages = [
    { name: "JavaScript", popularity: 9.7 },
    { name: "Python", popularity: 9.3 },
    { name: "Java", popularity: 8.9 },
    { name: "C++", popularity: 8.2 },
];

// Function to display languages
function displayLanguages() {
    const list = document.getElementById("languageList");
    list.innerHTML = ""; // Clear previous content
    programmingLanguages.forEach((lang) => {
        const listItem = document.createElement("li");
        listItem.textContent = `${lang.name} (Popularity: ${lang.popularity})`;
        list.appendChild(listItem);
    });
}

// Call the function to display languages on page load
displayLanguages();

// Load sound effect
const audio = new Audio("popup.mp3"); // Ensure this path is correct

// Show greeting and play sound when button is clicked
document.getElementById("showGreetingBtn").addEventListener("click", () => {
    const greetingDiv = document.getElementById("greeting");
    greetingDiv.textContent = "Hello, welcome to Competitive Programming!";
    greetingDiv.classList.add("show");
    audio.play(); // Play the notification sound
    bounceGreeting(); // Call bounce function
});


// Function to bounce the greeting
function bounceGreeting() {
    const greetingDiv = document.getElementById("greeting");
    greetingDiv.style.transition = "transform 0.2s ease"; // Set transition for bouncing
    greetingDiv.style.transform = "translateY(-10px)"; // Move up

    setTimeout(() => {
        greetingDiv.style.transform = "translateY(0)"; // Move back to original position
    }, 200); // Delay for 200ms before moving back down
}
