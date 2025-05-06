// sidebar-loader.js

document.addEventListener('DOMContentLoaded', function() {
    // Fetch the sidebar.html file and insert it into the body
    fetch('components/sidebar.html')
      .then(response => response.text())
      .then(html => {
        // Insert the sidebar HTML content into the body of the page
        document.body.insertAdjacentHTML('afterbegin', html);
  
        // Add the event listener for the collapse button
        const collapseButton = document.getElementById('collapse-button');
        const sidebar = document.getElementById('sidebar');
  
        collapseButton.addEventListener('click', function() {
          sidebar.classList.toggle('collapsed');
        });
      })
      .catch(error => {
        console.error('Error loading sidebar:', error);
      });
  });
  