
document.addEventListener('DOMContentLoaded', function() {
  const themeToggle = document.getElementById('themeToggle');
  if (themeToggle) {
    const themeIcon = themeToggle.querySelector('.theme-btn__icon');
    themeToggle.onclick = function() {
      const currentTheme = document.body.getAttribute('data-theme');
      if (currentTheme === 'dark') {
        document.body.removeAttribute('data-theme');
        if (themeIcon) themeIcon.textContent = '🌙';
      } else {
        document.body.setAttribute('data-theme', 'dark');
        if (themeIcon) themeIcon.textContent = '☀️';
      }
    };
  }
});


document.addEventListener('DOMContentLoaded', function() {
  let count = 0;
  const counter = document.getElementById('cartCount');
  const buttons = document.querySelectorAll('.button1');
  
  if (counter) counter.textContent = count;
  
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].onclick = function() {
      count = count + 1;
      counter.textContent = count;
    };
  }
});


document.addEventListener('DOMContentLoaded', function() {
  let like = document.getElementById('likeBtn');
  let dislike = document.getElementById('dislikeBtn');
  let active = null;
  
  if (like && dislike) {
    like.onclick = function() {
      if (active === 'like') {
        like.classList.remove('active');
        active = null;
      } else {
        like.classList.add('active');
        dislike.classList.remove('active');
        active = 'like';
      }
    };
    
    dislike.onclick = function() {
      if (active === 'dislike') {
        dislike.classList.remove('active');
        active = null;
      } else {
        dislike.classList.add('active');
        like.classList.remove('active');
        active = 'dislike';
      }
    };
  }
});


document.addEventListener('DOMContentLoaded', function() {
  const bookingForm = document.getElementById('bookingForm');
  
  if (bookingForm) {
    bookingForm.onsubmit = function(event) {
      const nameInput = document.getElementById('regName');
      const phoneInput = document.getElementById('regPhone');
      const dateInput = document.getElementById('regDate');
      let hasError = false;

      if (nameInput && nameInput.value.trim() === '') {
        nameInput.classList.add('error-field');
        hasError = true;
      } else if (nameInput) {
        nameInput.classList.remove('error-field');
      }

      if (phoneInput && phoneInput.value.trim() === '') {
        phoneInput.classList.add('error-field');
        hasError = true;
      } else if (phoneInput) {
        phoneInput.classList.remove('error-field');
      }

      if (dateInput && dateInput.value.trim() === '') {
        dateInput.classList.add('error-field');
        hasError = true;
      } else if (dateInput) {
        dateInput.classList.remove('error-field');
      }

      if (hasError) {
        event.preventDefault();
        alert('Пожалуйста, заполните обязательные поля (Имя, Телефон, Дата)!');
      } else {
        event.preventDefault();
        alert('Успешно! Ваш столик забронирован. Ждем вас в AQUARIM!');
        bookingForm.reset();
      }
    };
  }
});



document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.onclick = function(event) {
      const targetId = this.getAttribute('href').substring(1);
      if (!targetId || targetId === '') return;

      const element = document.getElementById(targetId);
      if (element) {
        event.preventDefault();
  
        element.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    };
  });
});


window.addEventListener('scroll', function() {
  const btn = document.getElementById('upBtn');
  btn.style.display = window.scrollY > 300 ? 'block' : 'none';
});

document.getElementById('upBtn').onclick = function() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};  




