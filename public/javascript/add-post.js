async function newFormHandler(event) {
    event.preventDefault();
  
    const title = document.querySelector('input[name="post-title"]').value;
    const blog = document.querySelector('textarea[name="post-blog"]').value;

    const response = await fetch(`/api/posts`, {
      method: 'POST',
      body: JSON.stringify({
        title,
        blog,
       }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
  
    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert(response.statusText);
    }
  }

  function addHandler(event) {
    document.location.replace('/add');
  }
 
  document.querySelector('.btn').addEventListener('click', newFormHandler);