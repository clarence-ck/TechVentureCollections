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

// Mobile Navigation
const mobileNavToggle = document.querySelector('.mobile-nav-toggle');
const tabNavigation = document.querySelector('.tab-navigation');
const tabButtons = document.querySelectorAll('.tab-button');

function toggleMobileNav() {
    const isExpanded = mobileNavToggle.getAttribute('aria-expanded') === 'true';
    mobileNavToggle.setAttribute('aria-expanded', !isExpanded);
    tabNavigation.classList.toggle('active');
    document.body.style.overflow = isExpanded ? '' : 'hidden';

    // Animate hamburger to X
    mobileNavToggle.classList.toggle('active');
}

mobileNavToggle.addEventListener('click', toggleMobileNav);

// Close mobile nav when clicking outside
document.addEventListener('click', (e) => {
    if (tabNavigation.classList.contains('active') &&
        !tabNavigation.contains(e.target) &&
        !mobileNavToggle.contains(e.target)) {
        toggleMobileNav();
    }
});

// Close mobile nav when clicking a tab button
tabButtons.forEach(button => {
    button.addEventListener('click', () => {
        if (tabNavigation.classList.contains('active')) {
            toggleMobileNav();
        }
    });
});

// Handle resize events
let resizeTimer;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
        if (window.innerWidth > 768 && tabNavigation.classList.contains('active')) {
            toggleMobileNav();
        }
    }, 250);
});
