function navigateToSignup(event) {

    event.preventDefault();
    window.location.href = '/signup';
}

function login(event) {

    event.preventDefault();
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;

    const payload = {
        email: email,
        password: password
    };
    fetch('http://localhost:3000/api/user/login', {
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
                return response.json().then(errorData => {
                    throw new Error(errorData.message);
                });
            }
        })
        .then(data => {
            console.log(data.authToken)
            const token = data.authToken;
            localStorage.setItem('email', email);
            localStorage.setItem('token', token);
            window.location.href = '/dashboard';
        })
        .catch(error => {
            console.error('Error:', error);
        });
}