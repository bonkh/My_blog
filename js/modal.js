document.querySelectorAll('.clickable-img').forEach(img => {
    img.addEventListener('click', function () {
      const modal = document.getElementById('imageModal');
      const modalImg = document.getElementById('modalImg');
      modal.style.display = 'block';
      modalImg.src = this.src;
    });
  });
  
  document.querySelector('.modal .close').addEventListener('click', function () {
    document.getElementById('imageModal').style.display = 'none';
  });
  
  // Optional: Close modal on outside click
  window.addEventListener('click', function(e) {
    const modal = document.getElementById('imageModal');
    if (e.target === modal) modal.style.display = 'none';
  });