async function newFormHandler(event) {
    event.preventDefault();
  
    const title = document.querySelector('input[name="post-title"]').value;
    const blog = document.querySelector('textarea[name="post-blog"]').value;

    var user_id = JSON.parse(sessionStorage.getItem('user_id'))
  
    const response = await fetch(`/api/posts`, {
      method: 'POST',
      body: JSON.stringify({
        title,
        blog,
        user_id: user_id
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


  //document.querySelector('.add-post').addEventListener('click', addHandler);
  
  document.querySelector('.btn').addEventListener('click', newFormHandler);