document.addEventListener('DOMContentLoaded', function() {
  let count = 0;
  const counter = document.getElementById('cartCount');
  const buttons = document.querySelectorAll('.button1');
  
  counter.textContent = count;
  
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
});