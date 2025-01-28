// Tab navigation functionality
function removeFadeClasses(element) {
    element.classList.remove('active', 'fade-out', 'fade-in');
}

function addFadeClasses(element, classes) {
    element.classList.add(...classes);
}

function showSection(sectionId) {
    // Get current and new sections
    const currentActive = document.querySelector('.tab-section.active');
    const newSection = document.getElementById(sectionId);
    
    // Handle current active section
    if (currentActive) {
        addFadeClasses(currentActive, ['fade-out']);
        requestAnimationFrame(() => {
            removeFadeClasses(currentActive);
        });
    }

    // Update new section
    requestAnimationFrame(() => {
        addFadeClasses(newSection, ['active', 'fade-in']);
    });

    // Update tab buttons
    document.querySelectorAll('.tab-button').forEach(button => {
        button.classList.remove('active');
    });
    
    const activeButton = document.querySelector(`.tab-button[data-section="${sectionId}"]`);
    if (activeButton) {
        activeButton.classList.add('active');
    }
}

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
    // Set up tab button click handlers
    document.querySelectorAll('.tab-button').forEach(button => {
        button.addEventListener('click', () => {
            const sectionId = button.getAttribute('data-section');
            if (sectionId) {
                showSection(sectionId);
            }
        });
    });

    // Initialize with about-me section
    showSection('about-me');

    // Add smooth scroll behavior for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetElement = document.querySelector(this.getAttribute('href'));
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});
