// script.js

document.addEventListener('DOMContentLoaded', function () {
    const hamburger = document.querySelector('.hamburger');
    const nav = document.querySelector('nav');
    const navLinks = document.querySelectorAll('nav ul li a');
    const overlay = document.querySelector('.overlay');
    const header = document.querySelector('header');

    // Toggle Side Menu
    hamburger.addEventListener('click', function () {
        const isActive = nav.classList.toggle('active');
        hamburger.classList.toggle('active'); // For animation
        overlay.classList.toggle('active'); // Show/hide overlay

        // Update ARIA attributes
        hamburger.setAttribute('aria-expanded', isActive);
        nav.setAttribute('id', isActive ? 'navigation-menu' : '');
    });

    // Close menu when clicking on a nav link
    navLinks.forEach(function (link) {
        link.addEventListener('click', function () {
            if (nav.classList.contains('active')) {
                nav.classList.remove('active');
                hamburger.classList.remove('active');
                overlay.classList.remove('active');
                hamburger.setAttribute('aria-expanded', false);
                nav.removeAttribute('id');
            }
        });
    });

    // Close menu when clicking on overlay
    overlay.addEventListener('click', function () {
        if (nav.classList.contains('active')) {
            nav.classList.remove('active');
            hamburger.classList.remove('active');
            overlay.classList.remove('active');
            hamburger.setAttribute('aria-expanded', false);
            nav.removeAttribute('id');
        }
    });

    // Header hide/show on scroll
    let lastScroll = 0;
    window.addEventListener('scroll', function () {
        const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

        if (currentScroll > lastScroll && currentScroll > header.offsetHeight) {
            // Scrolling down
            header.classList.add('hidden');
        } else {
            // Scrolling up
            header.classList.remove('hidden');
        }

        lastScroll = currentScroll <= 0 ? 0 : currentScroll; // For Mobile or negative scrolling
    });
});