// Get the elements
const toggleButton = document.getElementById('toggle-skills');
const skillsSection = document.querySelector('.right-section ul');

// Initially hide the skills section
skillsSection.style.display = 'none';

// Add event listener to toggle visibility
toggleButton.addEventListener('click', () => {
    if (skillsSection.style.display === 'none') {
        skillsSection.style.display = 'block';  // Show the skills section
    } else {
        skillsSection.style.display = 'none';   // Hide the skills section
    }
});
