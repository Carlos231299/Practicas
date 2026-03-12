// Mobile Navigation Toggle
const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    burger.addEventListener('click', () => {
        // Toggle Nav
        nav.classList.toggle('nav-active');

        // Animate Links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
            }
        });

        // Burger Animation
        burger.classList.toggle('toggle');
    });
};

// Navbar Background on Scroll
const navScroll = () => {
    const nav = document.querySelector('#main-nav');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
    });
};

// Reveal Elements on Scroll
const revealOnScroll = () => {
    const reveals = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');
    
    const observerOptions = {
        threshold: 0.15
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, observerOptions);

    reveals.forEach(reveal => {
        observer.observe(reveal);
    });
};

// Initialize All
document.addEventListener('DOMContentLoaded', () => {
    navSlide();
    navScroll();
    revealOnScroll();
    
    // Smooth Entry for Hero
    setTimeout(() => {
        document.querySelectorAll('#hero .reveal').forEach(el => el.classList.add('active'));
    }, 100);
});

// Menu Tab Logic (Simple demo)
const menuTabs = document.querySelectorAll('.menu-tab');
menuTabs.forEach(tab => {
    tab.addEventListener('click', () => {
        menuTabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        // Here you would normally filter the menu grid items
    });
});
