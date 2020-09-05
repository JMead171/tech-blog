  async function loginFormHandler(event) {
    event.preventDefault();

    const email = document.querySelector('#email-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();

    if (email && password) {
      const response = await fetch('/api/users/login', {
        method: 'post',
        body: JSON.stringify({
          email,
          password
        }),
        headers: { 'Content-Type': 'application/json' }
      })
      .then((resp) => resp.json()) // Transform the data into json
        .then(function (response) {
        sessionStorage.setItem('user_id', response.user.id)
      if (response.user) {
          document.location.replace('/dashboard');
          } else {
          document.location.replace('/signup');
          }
      })
  }
}
 
document.querySelector('.login-form').addEventListener('submit', loginFormHandler);