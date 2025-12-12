// Translation dictionary
const translations = {
    en: {
        header_home: "Home",
        menu: "Menu",
        nav_home: "Home",
        nav_about: "About me",
        nav_works: "My works",
        nav_contact: "Contacts",
        about_title: "About me",
        about_p1: "Here will be text about me. This is the first paragraph with information about who I am and what I do. You can write anything about your skills and experience.",
        about_p2: "Second paragraph with additional information. You can talk about your goals, projects or anything else.",
        about_p3: "Third paragraph completes the article. Here you can add contact information or call to action.",
        contact_title: "Contacts",
        contact_intro: "If you have any questions or suggestions, you can contact me in the following ways:",
        contact_phone: "Phone",
        form_title: "Feedback Form",
        form_name: "Your name:",
        form_name_placeholder: "Enter your name",
        form_subject: "Subject:",
        form_subject_placeholder: "Message subject",
        form_message: "Message:",
        form_message_placeholder: "Your message...",
        form_submit: "Send",
        form_success: "✓ Message sent successfully! Thank you for contacting us.",
        works_header: "Websites and Description",
        works_title: "Projects and Resources",
        works_intro: "Below are some interesting websites with short and long descriptions. Hovering over a block gives a small highlighting effect.",
        works_desc1: "This is a description of the first project or resource. It can be quite long to explain the purpose, technologies used, and main features it provides to users. For example, this site could be an interactive tool for data visualization or a new startup in the education sector.",
        works_desc2: "Description of the second resource. Here you can talk in more detail about the technical implementation details, about complex algorithms used in its work. For example, it could be a content management system (CMS) or a tool for automating routine tasks.",
        works_desc3: "Third example. This could be a link to your portfolio or social media page. The description here can focus on personal achievements and key skills, demonstrating your professional growth in web development.",
        footer_copyright: "© 2024 Footer text",
        footer_additional: "Additional text at the bottom"
    },
    uk: {
        header_home: "Головна",
        menu: "Меню",
        nav_home: "Головна",
        nav_about: "Про мене",
        nav_works: "Мої роботи",
        nav_contact: "Контакти",
        about_title: "Про мене",
        about_p1: "Тут буде текст про мене. Це перший абзац з інформацією про те, хто я і чим займаюсь. Можна написати будь-що про свої навички та досвід.",
        about_p2: "Другий абзац з додатковою інформацією. Можна розповісти про свої цілі, проекти або що завгодно інше.",
        about_p3: "Третій абзац завершує статтю. Тут можна додати контактну інформацію або заклик до дії.",
        contact_title: "Контакти",
        contact_intro: "Якщо у вас є питання або пропозиції, ви можете зв'язатися зі мною наступними способами:",
        contact_phone: "Телефон",
        form_title: "Форма зворотного зв'язку",
        form_name: "Ваше ім'я:",
        form_name_placeholder: "Введіть ваше ім'я",
        form_subject: "Тема:",
        form_subject_placeholder: "Тема повідомлення",
        form_message: "Повідомлення:",
        form_message_placeholder: "Ваше повідомлення...",
        form_submit: "Відправити",
        form_success: "✓ Повідомлення успішно відправлено! Дякую за звернення.",
        works_header: "Сайти і Опис",
        works_title: "Проекти та ресурси",
        works_intro: "Нижче представлені деякі цікаві сайти з короткими та довгими описами. Наведення курсору на блок дає невеликий ефект підсвічування.",
        works_desc1: "Це опис першого проекту або ресурсу. Він може бути досить довгим, щоб пояснити мету, технології, які використовувалися, та основні функції, які він надає користувачам. Наприклад, цей сайт може бути інтерактивним інструментом для візуалізації даних або новим стартапом у сфері освіти.",
        works_desc2: "Опис другого ресурсу. Тут можна детальніше розповісти про технічні деталі реалізації, про складні алгоритми, які використовуються в його роботі. Наприклад, це може бути система управління контентом (CMS) або інструмент для автоматизації рутинних завдань.",
        works_desc3: "Третій приклад. Це може бути посилання на ваше портфоліо або сторінку в соціальній мережі. Опис тут може фокусуватися на особистих досягненнях і ключових навичках, демонструючи ваш професійний ріст у веб-розробці.",
        footer_copyright: "© 2024 Текст футера",
        footer_additional: "Додатковий текст внизу"
    },
    ru: {
        header_home: "Главная",
        menu: "Меню",
        nav_home: "Главная",
        nav_about: "Обо мне",
        nav_works: "Мои работы",
        nav_contact: "Контакты",
        about_title: "Обо мне",
        about_p1: "Здесь будет текст обо мне. Это первый абзац с информацией о том, кто я и чем занимаюсь. Можно написать что угодно о своих навыках и опыте.",
        about_p2: "Второй абзац с дополнительной информацией. Можно рассказать о своих целях, проектах или что угодно другое.",
        about_p3: "Третий абзац завершает статью. Здесь можно добавить контактную информацию или призыв к действию.",
        contact_title: "Контакты",
        contact_intro: "Если у вас есть вопросы или предложения, вы можете связаться со мной следующими способами:",
        contact_phone: "Телефон",
        form_title: "Форма обратной связи",
        form_name: "Ваше имя:",
        form_name_placeholder: "Введите ваше имя",
        form_subject: "Тема:",
        form_subject_placeholder: "Тема сообщения",
        form_message: "Сообщение:",
        form_message_placeholder: "Ваше сообщение...",
        form_submit: "Отправить",
        form_success: "✓ Сообщение успешно отправлено! Спасибо за обращение.",
        works_header: "Сайты и Описание",
        works_title: "Проекты и ресурсы",
        works_intro: "Ниже представлены некоторые интересные сайты с короткими и длинными описаниями. Наведение курсора на блок даёт небольшой эффект подсветки.",
        works_desc1: "Это описание первого проекта или ресурса. Оно может быть достаточно длинным, чтобы объяснить цель, используемые технологии и основные функции, которые он предоставляет пользователям. Например, этот сайт может быть интерактивным инструментом для визуализации данных или новым стартапом в сфере образования.",
        works_desc2: "Описание второго ресурса. Здесь можно подробнее рассказать о технических деталях реализации, о сложных алгоритмах, которые используются в его работе. Например, это может быть система управления контентом (CMS) или инструмент для автоматизации рутинных задач.",
        works_desc3: "Третий пример. Это может быть ссылка на ваше портфолио или страницу в социальной сети. Описание здесь может фокусироваться на личных достижениях и ключевых навыках, демонстрируя ваш профессиональный рост в веб-разработке.",
        footer_copyright: "© 2024 Текст футера",
        footer_additional: "Дополнительный текст внизу"
    }
};

// Language switching function
function setLanguage(lang) {
    // Store in memory instead of localStorage (artifacts limitation)
    window.currentLanguage = lang;

    // Update all elements with data-translate attribute
    document.querySelectorAll("[data-translate]").forEach(el => {
        const key = el.getAttribute("data-translate");
        if (translations[lang] && translations[lang][key]) {
            el.textContent = translations[lang][key];
        }
    });

    // Update placeholder attributes
    document.querySelectorAll("[data-translate-placeholder]").forEach(el => {
        const key = el.getAttribute("data-translate-placeholder");
        if (translations[lang] && translations[lang][key]) {
            el.placeholder = translations[lang][key];
        }
    });

    // Update HTML lang attribute
    document.documentElement.lang = lang;
}

// Auto-load language on page load
window.addEventListener("DOMContentLoaded", () => {
    const lang = window.currentLanguage || "en";
    setLanguage(lang);
});

// Toggle menu
function toggleMenu() {
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('open');
}

// Close menu when clicking on link (for mobile)
function closeMobileMenu() {
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.remove('open');
}

// Close menu when clicking outside
document.addEventListener('click', function(event) {
    const sidebar = document.getElementById('sidebar');
    const menuToggle = document.querySelector('.menu-toggle');
    
    if (!sidebar.contains(event.target) && !menuToggle.contains(event.target)) {
        sidebar.classList.remove('open');
    }
});

// Smooth scroll to anchors
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

// Scroll to top button
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

// Fade-in animation on scroll
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

// Contact form handling
function handleSubmit(event) {
    event.preventDefault();
    
    const formSuccess = document.getElementById('formSuccess');
    const form = document.getElementById('contactForm');
    
    if (formSuccess && form) {
        // Show success message
        formSuccess.style.display = 'block';
        
        // Clear form
        form.reset();
        
        // Hide message after 3 seconds
        setTimeout(() => {
            formSuccess.style.display = 'none';
        }, 3000);
    }
}

// Auto-set active menu item
window.addEventListener('DOMContentLoaded', function() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const menuLinks = document.querySelectorAll('.sidebar nav a');
    
    menuLinks.forEach(link => {
        const linkPage = link.getAttribute('href');
        
        // Remove active class from all links
        link.classList.remove('active');
        
        // Add active class to current page
        if (linkPage === currentPage || 
            (currentPage === '' && linkPage === 'index.html')) {
            link.classList.add('active');
        }
    });
});

// Cookie functions for language persistence
function setCookie(name, value, days = 365) {
    const date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    const expires = "expires=" + date.toUTCString();
    document.cookie = name + "=" + value + ";" + expires + ";path=/";
}

function getCookie(name) {
    const nameEQ = name + "=";
    const ca = document.cookie.split(';');
    for(let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) === ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}

// Language switching function
function setLanguage(lang) {
    // Save language to cookie
    setCookie('selectedLanguage', lang);
    
    // Store in memory for current session
    window.currentLanguage = lang;

    // Update all elements with data-translate attribute
    document.querySelectorAll("[data-translate]").forEach(el => {
        const key = el.getAttribute("data-translate");
        if (translations[lang] && translations[lang][key]) {
            el.textContent = translations[lang][key];
        }
    });

    // Update placeholder attributes
    document.querySelectorAll("[data-translate-placeholder]").forEach(el => {
        const key = el.getAttribute("data-translate-placeholder");
        if (translations[lang] && translations[lang][key]) {
            el.placeholder = translations[lang][key];
        }
    });

    // Update HTML lang attribute
    document.documentElement.lang = lang;
    
    // Update active state of language buttons
    document.querySelectorAll('.lang-switcher button').forEach(btn => {
        btn.classList.remove('active');
    });
    const activeBtn = document.querySelector(`.lang-switcher button[onclick*="${lang}"]`);
    if (activeBtn) {
        activeBtn.classList.add('active');
    }
}

// Auto-load language on page load
window.addEventListener("DOMContentLoaded", () => {
    const savedLang = getCookie('selectedLanguage') || 'en';
    setLanguage(savedLang);
});