// Get the elements from HTML
const btn = document.getElementById('btn');
const fire = document.getElementById('fire');

// Load Audio
const boom = new Audio('boom1.m4a');
const pwit = new Audio('pwit.m4a');

// Listen for button click
btn.addEventListener('click', () => {
  // Change bomb to fire
  btn.style.display = 'none';
  // Make fire grow quickly
  fire.classList.add('grow');
  // play sound effect
  boom.play();

  // Set 3-second timer
  setTimeout(() => {
    fire.textContent = '💀';
    fire.style.animation = 'none';
    fire.style.transform = 'scale(10)';
    pwit.play();
  }, 5000);
});
