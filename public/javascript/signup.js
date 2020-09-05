async function signupFormHandler(event) {
    event.preventDefault();

    const username = document.querySelector('#username-signup').value.trim();
    const email = document.querySelector('#email-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();

    if (username && email && password) {
      const response = await fetch('/api/users', {
        method: 'post',
        body: JSON.stringify({
          username,
          email,
          password
        }),
        headers: { 'Content-Type': 'application/json' }
      })
      .then((resp) => resp.json()) // Transform the data into json
        .then(function (response) {
        sessionStorage.setItem('user_id', response.user.id)
      // check the response status
      if (response.user) {
        document.location.replace('/dashboard');
      } else {
        alert(response.statusText);
      }
    });
  }
}

document.querySelector('.signup-form').addEventListener('submit', signupFormHandler);