// Add this script just before the closing </body> tag
document.addEventListener('DOMContentLoaded', function() {
    const menuIcon = document.querySelector('#menu-icon');
    const navBar = document.querySelector('.nav-bar');

    // Toggle menu on button click
    menuIcon.addEventListener('click', function() {
        navBar.classList.toggle('active');
    });

    window.addEventListener('scroll', () => {
        if (navBar.classList.remove('active')) {
            toggleMenu();
        }
    });

    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
        if (!menuIcon.contains(event.target) && !navBar.contains(event.target)) {
            navBar.classList.remove('active');
        }
    });

    // Close menu when clicking a nav link
    const navLinks = document.querySelectorAll('.nav-bar a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navBar.classList.remove('active');
        });
    });
});
