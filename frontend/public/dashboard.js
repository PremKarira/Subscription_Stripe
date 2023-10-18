// JWT token received after successful login
// let token;

function getToken() {
  token = localStorage.getItem('token');
  email = localStorage.getItem('email');

  if (email) {
    document.getElementById('user-email-text').textContent = email;
  }
}

function refresh() {
  getToken();
  fetch(`http://localhost:3000/api/sub/${email}`, {
    method: 'GET',
  })
    .then(async response => {
      if (response.ok) {
        const data = await response.json();
        console.log(data)
        document.getElementById('plan').textContent = data.plan || 'No active subscription';
        document.getElementById('interval').textContent = data.interval || '';
        document.getElementById('subscriptionId').textContent = data.subscriptionId || '';
      } else {
        throw new Error('Failed to fetch');
      }
    })
    .catch(error => {
      console.error('Error:', error);
    });
}