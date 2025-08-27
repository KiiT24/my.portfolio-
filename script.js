document.addEventListener('DOMContentLoaded', () => {

    // --- NEW: Interactive Blob Cursor ---
    const blob = document.getElementById("blob");
    const interactiveElements = document.querySelectorAll("a, button");

    document.body.onpointermove = event => {
        const { clientX, clientY } = event;

        blob.animate({
            left: `${clientX}px`,
            top: `${clientY}px`
        }, { duration: 3000, fill: "forwards" });
    };

    // Animate blob scale on hover
    interactiveElements.forEach(el => {
        el.addEventListener('mouseover', () => {
            blob.style.width = '68px';
            blob.style.height = '68px';
        });
        el.addEventListener('mouseout', () => {
            blob.style.width = '34px';
            blob.style.height = '34px';
        });
    });

    // --- NEW: Glassmorphism Header on Scroll ---
    const header = document.querySelector('.site-header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // 1. Mobile Navigation (existing code)
    const hamburger = document.querySelector('.hamburger');
    const mainNav = document.querySelector('.main-nav');
    hamburger.addEventListener('click', () => {
        mainNav.classList.toggle('is-open');
    });
    mainNav.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            mainNav.classList.remove('is-open');
        });
    });

    // 2. Dark Mode Toggle (existing code)
    const themeSwitch = document.querySelector('#checkbox');
    const currentTheme = localStorage.getItem('theme');
    if (currentTheme) {
        document.body.classList.add(currentTheme);
        if (currentTheme === 'dark-mode') {
            themeSwitch.checked = true;
        }
    }
    themeSwitch.addEventListener('change', () => {
        if (themeSwitch.checked) {
            document.body.classList.add('dark-mode');
            localStorage.setItem('theme', 'dark-mode');
        } else {
            document.body.classList.remove('dark-mode');
            localStorage.setItem('theme', 'light-mode');
        }
    });

    // 3. Fade-in Scroll Animation (existing code)
    const sections = document.querySelectorAll('.fade-in-section');
    const sectionObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });
    sections.forEach(section => {
        sectionObserver.observe(section);
    });

    // 4. Back to Top Button (existing code)
    const backToTopButton = document.querySelector('.back-to-top');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            backToTopButton.classList.add('is-visible');
        } else {
            backToTopButton.classList.remove('is-visible');
        }
    });
});