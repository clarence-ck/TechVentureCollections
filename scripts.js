// Utility functions for managing fade classes
function removeFadeClasses(element) {
    element.classList.remove('active', 'fade-out', 'fade-in');
}

function addFadeClasses(element, classes) {
    element.classList.add(...classes);
}

function updateButtonBackground(button, isActive) {
    const background = button.querySelector('.button-background');
    if (background) {
        background.style.background = isActive ? 
            'var(--gradient-main)' : 
            'var(--gradient-button-inactive)';
    }
}

// Tab navigation functionality
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

    // Update new section with animation frame
    requestAnimationFrame(() => {
        addFadeClasses(newSection, ['active', 'fade-in']);
    });

    // Update tab buttons
    document.querySelectorAll('.tab-button').forEach(button => {
        button.classList.remove('active');
        updateButtonBackground(button, false);
    });
    
    const activeButton = document.querySelector(`button[onclick="showSection('${sectionId}')"]`);
    if (activeButton) {
        activeButton.classList.add('active');
        updateButtonBackground(activeButton, true);
    }
}

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
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
