// Зміна теми
const themeToggle = document.getElementById('theme-toggle');
themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
});

// Вітання залежно від часу доби
const greeting = document.getElementById('greeting');
const hour = new Date().getHours();

if (hour < 12) {
    greeting.textContent = 'Доброго ранку, я Олексій!';
} else if (hour < 18) {
    greeting.textContent = 'Добрий день, я Олексій!';
} else {
    greeting.textContent = 'Добрий вечір, я Олексій!';
}

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
