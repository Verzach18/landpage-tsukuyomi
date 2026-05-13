document.addEventListener('DOMContentLoaded', () => {
    // Reveal Elements on Scroll with Window Effect
    const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    };

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('reveal');
                revealObserver.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Track all window-entry elements
    document.querySelectorAll('.window-entry').forEach(el => {
        revealObserver.observe(el);
    });

    // Smooth Scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            
            // Close mobile menu if open
            const menuToggle = document.getElementById('menu-toggle');
            if (menuToggle) menuToggle.checked = false;

            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                e.preventDefault();
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Close mobile menu on external link clicks too
    document.querySelectorAll('.nav-external').forEach(link => {
        link.addEventListener('click', () => {
            const menuToggle = document.getElementById('menu-toggle');
            if (menuToggle) menuToggle.checked = false;
        });
    });

    // Floating Parallax on Hero
    const heroBg = document.querySelector('.hero-full');
    if (heroBg) {
        window.addEventListener('scroll', () => {
            const scrolled = window.scrollY;
            if (scrolled < window.innerHeight) {
                heroBg.style.backgroundPosition = `center ${scrolled * 0.4}px`;
            }
        });
    }

    // Navbar scroll effect
    const mainNav = document.querySelector('.main-nav');
    if (mainNav) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                mainNav.classList.add('scrolled');
            } else {
                mainNav.classList.remove('scrolled');
            }
        });
    }

    // Hover effect for photo placeholders
    document.querySelectorAll('.photo-placeholder').forEach(photo => {
        photo.addEventListener('mouseover', () => {
            photo.style.borderColor = 'var(--neon-magenta)';
            photo.style.color = 'var(--neon-magenta)';
        });
        photo.addEventListener('mouseout', () => {
            photo.style.borderColor = 'var(--text-muted)';
            photo.style.color = 'var(--text-muted)';
        });
    });
});
