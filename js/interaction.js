window.addEventListener('scroll', function () {
    const navbar = document.querySelector('nav');
    if (window.scrollY > 0) {
        navbar.style.position = 'fixed';
        navbar.style.top = '0';
        navbar.style.width = '100%';
        navbar.style.zIndex = '1000';
        navbar.style.backgroundColor = 'white';
        navbar.style.borderRadius = '0';
        navbar.style.boxShadow = '0 2px 5px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.position = 'relative';
        navbar.style.borderRadius = '12px';
    }
});

window.addEventListener('scroll', function () {
    const header = document.querySelector('header');
    if (window.scrollY > 0) {
        header.style.margin = '0'
    }
    else {
        header.style.backgroundColor = 'white';
        header.style.margin = '1.5rem 2rem 1.5rem 2rem';
        header.style.borderRadius = '12px'
    }
})

document.addEventListener('DOMContentLoaded', () => {
    const hiddenElements = document.querySelectorAll('.hidden');

    const observerOptions = {
        root: null,
        threshold: 0.02,
    };

    const revealOnScroll = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    };

    const observer = new IntersectionObserver(revealOnScroll, observerOptions);

    hiddenElements.forEach(el => observer.observe(el));
});
