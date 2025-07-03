const btn = document.getElementById('theme-toggle');
const body = document.body;
const header = document.querySelector('header');

btn.addEventListener('click', () => {
  body.classList.toggle('dark-theme');
  header.classList.toggle('dark-theme');
});
