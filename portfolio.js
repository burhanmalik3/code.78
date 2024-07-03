document.addEventListener("DOMContentLoaded", function() {

    const navLinks = document.querySelectorAll('nav a');

    navLinks.forEach(function(navLink) {
        navLink.addEventListener('click', function(e) {
            e.preventDefault();

            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);

            window.scrollTo({
                top: targetSection.offsetTop - 50, // Adjusted for fixed header
                behavior: 'smooth'
            });
        });
    });

    // Highlight active navigation link based on scroll position
    window.addEventListener('scroll', function() {
        let fromTop = window.scrollY + 50; // Adjusted for fixed header

        navLinks.forEach(function(navLink) {
            const section = document.querySelector(navLink.hash);

            if (section.offsetTop <= fromTop &&
                section.offsetTop + section.offsetHeight > fromTop) {
                navLink.classList.add('active');
            } else {
                navLink.classList.remove('active');
            }
        });
    });

    // Responsive navigation menu toggle for smaller screens
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('nav ul');

    menuToggle.addEventListener('click', function() {
        nav.classList.toggle('show');
    });
});
