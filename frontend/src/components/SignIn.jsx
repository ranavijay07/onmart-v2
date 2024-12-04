import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Alert from './Alert';
import './Login.css';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const navigate = useNavigate();

  const login = async (event) => {
    event.preventDefault();

    console.log(event);
    const email = event.target.email.value;  // Assuming the form input for email is named "email"
    const password = event.target.password.value;  // Assuming the form input for password is named "password"

      // Make API call to authenticate the user
    try {
      const response = await fetch('http://3.144.103.79/api/customers/signin', {  // Update with your API endpoint
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

    const data = await response.json();

    if (response.ok) {
      // If authentication is successful, save the customer ID and login state
      localStorage.setItem('customerId', data.customerId);
      localStorage.setItem('isLogged', true);
      localStorage.setItem('username', email);
      
      // Navigate to homepage
      navigate('/');
    } else {
      // Show error message if authentication fails
      setError(data.message || 'Invalid username or password');
    }
  } catch (err) {
    console.error('Error during login:', err);
    setError('An error occurred during login. Please try again.');
  }
};

  return (
    <div className="login-component">
      <Alert visible={!!error} type="error">
        <p>{error}</p>
        <p>Please try again.</p>
      </Alert>
      <h2>Log In</h2>
      <form onSubmit={login}>
        <div>
          <label htmlFor="username">
            Username
            <input
              type="text"
              id="email"
              value={username}
              autoComplete="username"
              onChange={(event) => setUsername(event.target.value)}
              required
            />
          </label>
        </div>
        <div>
          <label htmlFor="password">
            Password
            <input
              type="password"
              id="password"
              value={password}
              autoComplete="current-password"
              onChange={(event) => setPassword(event.target.value)}
              required
            />
          </label>
        </div>
        <button type="submit">Log In</button>
      </form>
      <br />
      <br />
    </div>
  );
}

export default Login;
