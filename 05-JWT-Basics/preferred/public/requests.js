localStorage.removeItem('token');
const dataLabel = document.getElementById('dataLabel');
// login (POST)
document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const data = { username, password };

    fetch('http://localhost:3000/api/v1/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => {
        if (data.token) {
            localStorage.setItem('token', data.token);
            dataLabel.innerHTML = '<h5 style="color: #008000;">Token has been provided!</h5>'
        }
    })
    .catch((error) => {
        console.error('Error:', error);
        localStorage.removeItem('token');
    });
    document.getElementById('logon').reset();
});

// get data (GET)
document.getElementById('action').addEventListener('click', function() {

    const token = localStorage.getItem('token');
    fetch('http://localhost:3000/api/v1/hello', {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    })
    .then(res => res.json())
    .then(data => {
        if (data.secret) {
            dataLabel.innerHTML = `<h3>${data.msg}</h3><br>${data.secret}`;
        } else {
            dataLabel.innerHTML = `<h3 style="color: #FF0000;">${data.msg}</h3>`;
        }
    })
    .catch((error) => {
        console.error('Error:', error);
    });
});
