function loadContent(containerId, filePath) {
    fetch(filePath)
      .then(response => response.text())
      .then(data => {
        document.getElementById(containerId).innerHTML = data;
      })
      .catch(error => console.error('Error loading content:', error));
  }
  
  // Load the initial tab
  loadContent('portfolio', 'portfolio.html');
//   loadContent('blog', 'blog_posts.html');
  