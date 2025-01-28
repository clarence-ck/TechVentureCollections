// Tab navigation functionality
function showSection(sectionId) {
    // Add fade-out class to current active section
    const currentActive = document.querySelector('.tab-section.active');
    if (currentActive) {
        currentActive.classList.add('fade-out');
        setTimeout(() => {
            currentActive.classList.remove('active', 'fade-out');
        }, 200);
    }

    // Update tab sections
    setTimeout(() => {
        document.getElementById(sectionId).classList.add('active', 'fade-in');
    }, 200);

    // Update tab buttons
    document.querySelectorAll('.tab-button').forEach(button => {
        button.classList.remove('active');
    });
    document.querySelector(`button[onclick="showSection('${sectionId}')"]`).classList.add('active');
}

// Initialize the page with the about-me section
document.addEventListener('DOMContentLoaded', () => {
    showSection('about-me');

    // Add smooth scroll behavior for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});
