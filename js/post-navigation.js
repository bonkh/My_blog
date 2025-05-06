document.addEventListener("DOMContentLoaded", () => {
    const postIdMeta = document.querySelector('meta[name="post-id"]');
    const folderPathMeta = document.querySelector('meta[name="post-folder"]');
    const filenameMeta = document.querySelector('meta[name="post-filename"]');
  
    if (!postIdMeta || !folderPathMeta || !filenameMeta) return;
  
    const postId = parseInt(postIdMeta.content, 10);
    const folderPath = folderPathMeta.content;
    const filename = filenameMeta.content;
  
    const prevPost = document.querySelector('.prev-post');
    const nextPost = document.querySelector('.next-post');
  
    const formatId = id => String(id).padStart(2, '0');
  
    // Previous Post
    const prevId = postId - 1;
    const prevPath = `${folderPath}${formatId(prevId)}/`;
    const prevLink = prevPost?.querySelector('a.nav-button');
  
    fetch(prevPath)
      .then(response => {
        if (response.ok && prevLink) {
          prevLink.href = prevPath;
        } else if (prevLink) {
          prevLink.classList.add('disabled');
          prevLink.setAttribute('tabindex', '-1');
        }
      })
      .catch(() => {
        if (prevLink) {
          prevLink.classList.add('disabled');
          prevLink.setAttribute('tabindex', '-1');
        }
      });
  
    // Next Post
    const nextId = postId + 1;
    const nextPath = `${folderPath}${formatId(nextId)}/`;
    const nextLink = nextPost?.querySelector('a.nav-button');
  
    fetch(nextPath)
      .then(response => {
        if (response.ok && nextLink) {
          nextLink.href = nextPath;
        } else if (nextLink) {
          nextLink.classList.add('disabled');
          nextLink.setAttribute('tabindex', '-1');
        }
      })
      .catch(() => {
        if (nextLink) {
          nextLink.classList.add('disabled');
          nextLink.setAttribute('tabindex', '-1');
        }
      });
  });
  