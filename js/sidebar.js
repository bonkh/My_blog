// // sidebar.js

// const collapseButton = document.getElementById('collapse-button');
// const sidebar = document.getElementById('sidebar');

// collapseButton.addEventListener('click', () => {
//     sidebar.classList.toggle('collapsed');
// });

// sidebar.js

const collapseButton = document.getElementById('collapse-button');
const sidebar = document.getElementById('sidebar');
const prevPost = document.querySelector('.prev-post');

// Update button position based on sidebar width
function updatePrevButtonPosition() {
  if (!sidebar || !prevPost) return;
  const sidebarWidth = sidebar.offsetWidth;
  prevPost.style.marginLeft = `${sidebarWidth - 60}px`; // Adjust spacing here
}

// On page load
updatePrevButtonPosition();

// On sidebar transition end (no lag!)
sidebar.addEventListener('transitionend', updatePrevButtonPosition);

// On window resize
window.addEventListener('resize', updatePrevButtonPosition);

// On toggle click
collapseButton?.addEventListener('click', () => {
  sidebar.classList.toggle('collapsed');
});
