function signup(event) {

  event.preventDefault();
  const email = document.getElementById('signup-email').value;
  const password = document.getElementById('signup-password').value;

  const payload = {
    email: email,
    password: password
  };

  fetch('http://localhost:3000/api/user/signup', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(payload)
  })
    .then(response => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error('Signup failed');
      }
    })
    .then(data => {
      window.location.href = '/login';
    })
    .catch(error => {
      console.error('Error:', error);
    });
}