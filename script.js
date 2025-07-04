window.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-toggle');

    // Функція для встановлення теми і стану перемикача
    function setTheme(theme) {
        if (theme === 'dark') {
            document.body.classList.add('dark-theme');
            themeToggle.checked = true;
            localStorage.setItem('theme', 'dark');
        } else {
            document.body.classList.remove('dark-theme');
            themeToggle.checked = false;
            localStorage.setItem('theme', 'light');
        }
    }

    // Відновлення теми при завантаженні
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);

    // Вітання
    const greeting = document.getElementById('greeting');
    const hour = new Date().getHours();
    if (hour < 12) {
        greeting.textContent = 'Доброго ранку, я Олександр!';
    } else if (hour < 18) {
        greeting.textContent = 'Добрий день, я Олександр!';
    } else {
        greeting.textContent = 'Добрий вечір, я Олександр!';
    }

    // Зміна теми по перемикачу
    themeToggle.addEventListener('change', () => {
        if (themeToggle.checked) {
            setTheme('dark');
        } else {
            setTheme('light');
        }
    });

    // Підсвічування активного пункту меню
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');

    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            if (pageYOffset >= sectionTop) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });

    // Повідомлення при надсиланні форми
    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Дякуємо за ваше повідомлення!');
        contactForm.reset();
    });
    const backToTopBtn = document.getElementById('back-to-top');

window.addEventListener('scroll', () => {
  if (window.pageYOffset > 300) {
    backToTopBtn.style.display = 'flex';  // показуємо кнопку
  } else {
    backToTopBtn.style.display = 'none';  // ховаємо кнопку
  }
});

backToTopBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

});
