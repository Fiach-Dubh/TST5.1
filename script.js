const root = document.documentElement;
const themeToggle = document.getElementById('themeToggle');
const today = document.getElementById('today');

const savedTheme = localStorage.getItem('satoshiTimesTheme');
if (savedTheme === 'light' || savedTheme === 'dark') {
  root.dataset.theme = savedTheme;
}

function setButtonLabel() {
  if (!themeToggle) return;
  themeToggle.textContent = root.dataset.theme === 'dark' ? 'Light mode' : 'Dark mode';
}

setButtonLabel();

if (themeToggle) {
  themeToggle.addEventListener('click', () => {
    const next = root.dataset.theme === 'dark' ? 'light' : 'dark';
    root.dataset.theme = next;
    localStorage.setItem('satoshiTimesTheme', next);
    setButtonLabel();
  });
}

if (today) {
  const formatter = new Intl.DateTimeFormat(undefined, {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
  today.textContent = formatter.format(new Date());
}
