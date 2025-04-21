const banners = document.querySelectorAll('.banner');
let current = 0;

setInterval(() => {
  banners[current].classList.remove('active');
  current = (current + 1) % banners.length;
  banners[current].classList.add('active');
}, 4000); // Change every 4 seconds


  const header = document.querySelector('.lt-header');
  const toggleBtn = document.querySelector('.lt-toggle');

  toggleBtn.addEventListener('click', () => {
    header.classList.toggle('active');
  });

