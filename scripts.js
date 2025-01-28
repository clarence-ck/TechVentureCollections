// Tab navigation functionality
function showSection(sectionId) {
    const buttons = document.querySelectorAll('.tab-button');
    const sections = document.querySelectorAll('.tab-section');
    const targetSection = document.getElementById(sectionId);
    const currentSection = document.querySelector('.tab-section.active');

    // Update button states
    buttons.forEach(button => {
        button.classList.remove('active');
        if (button.getAttribute('onclick').includes(sectionId)) {
            button.classList.add('active');
        }
    });

    // If there's a current section, fade it out first
    if (currentSection) {
        currentSection.classList.add('fade-out');
        currentSection.classList.remove('active');
        
        // Wait for fade out to complete
        setTimeout(() => {
            currentSection.style.display = 'none';
            currentSection.classList.remove('fade-out');
            
            // Show and fade in the new section
            targetSection.style.display = 'block';
            // Force a reflow to ensure the transition works
            void targetSection.offsetWidth;
            targetSection.classList.add('active', 'fade-in');
            
            // Clean up fade-in class after animation
            setTimeout(() => {
                targetSection.classList.remove('fade-in');
            }, 200);
        }, 200);
    } else {
        // If no current section, just show the new one
        targetSection.style.display = 'block';
        void targetSection.offsetWidth;
        targetSection.classList.add('active', 'fade-in');
        
        setTimeout(() => {
            targetSection.classList.remove('fade-in');
        }, 200);
    }
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
