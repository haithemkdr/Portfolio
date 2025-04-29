// DOM Elements
const navLinks = document.querySelector('.nav-links');
const navLinksItems = document.querySelectorAll('.nav-links a');
const sections = document.querySelectorAll('section');
const navIndicator = document.querySelector('.nav-indicator');

// Function to update the indicator position
function updateNavIndicator() {
    const activeLink = document.querySelector('.nav-links a.active');
    if (activeLink && navIndicator) {
        const linkRect = activeLink.getBoundingClientRect();
        const navRect = navLinks.getBoundingClientRect();
        
        navIndicator.style.width = `${linkRect.width}px`;
        navIndicator.style.left = `${linkRect.left - navRect.left}px`;
    }
}

// Add animations on scroll
function revealOnScroll() {
    const elements = document.querySelectorAll('.experience-item, .project-card, .skill-item');
    
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (elementTop < windowHeight - 100) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
}

// Initialize animations
window.addEventListener('DOMContentLoaded', () => {
   
    const elements = document.querySelectorAll('.experience-item, .project-card, .skill-item');
    elements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });
    
   
    updateNavIndicator();
    
    // Add click event for indicator update
    navLinksItems.forEach(link => {
        link.addEventListener('click', () => {
            // Remove active class from all links
            navLinksItems.forEach(item => item.classList.remove('active'));
            
            // Add active class to clicked link
            link.classList.add('active');
            
            // Update indicator position
            updateNavIndicator();
        });
    });
    
    // Trigger initial reveal
    revealOnScroll();
    
    // Add scroll listener for animations
    window.addEventListener('scroll', revealOnScroll);
});
