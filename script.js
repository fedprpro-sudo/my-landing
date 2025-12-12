// script.js - Всі JavaScript функції для сайту

// Toggling menu
function toggleMenu() {
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('open');
}

// Закриття меню при кліку на посилання (для мобільних)
function closeMobileMenu() {
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.remove('open');
}

// Закриття меню при кліку поза ним
document.addEventListener('click', function(event) {
    const sidebar = document.getElementById('sidebar');
    const menuToggle = document.querySelector('.menu-toggle');
    
    if (!sidebar.contains(event.target) && !menuToggle.contains(event.target)) {
        sidebar.classList.remove('open');
    }
});

// Плавне прокручування до якорів
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Кнопка "Вгору"
window.addEventListener('DOMContentLoaded', function() {
    const scrollToTopBtn = document.getElementById('scrollToTop');
    
    if (scrollToTopBtn) {
        window.addEventListener('scroll', function() {
            if (window.pageYOffset > 300) {
                scrollToTopBtn.classList.add('visible');
            } else {
                scrollToTopBtn.classList.remove('visible');
            }
        });
    }
});

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Анімація появи при прокручуванні
window.addEventListener('DOMContentLoaded', function() {
    const fadeInSections = document.querySelectorAll('.fade-in-section');

    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    fadeInSections.forEach(section => {
        observer.observe(section);
    });
});

// Обробка форми зворотного зв'язку
function handleSubmit(event) {
    event.preventDefault();
    
    const formSuccess = document.getElementById('formSuccess');
    const form = document.getElementById('contactForm');
    
    if (formSuccess && form) {
        // Показуємо повідомлення про успіх
        formSuccess.style.display = 'block';
        
        // Очищаємо форму
        form.reset();
        
        // Ховаємо повідомлення через 3 секунди
        setTimeout(() => {
            formSuccess.style.display = 'none';
        }, 3000);
    }
}

// Автоматичне встановлення активного пункту меню
window.addEventListener('DOMContentLoaded', function() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const menuLinks = document.querySelectorAll('.sidebar nav a');
    
    menuLinks.forEach(link => {
        const linkPage = link.getAttribute('href');
        
        // Видаляємо клас active з усіх посилань
        link.classList.remove('active');
        
        // Додаємо клас active до поточної сторінки
        if (linkPage === currentPage || 
            (currentPage === '' && linkPage === 'index.html')) {
            link.classList.add('active');
        }
    });
});

        function toggleMenu() {
            const sidebar = document.getElementById('sidebar');
            sidebar.classList.toggle('open');
        }
