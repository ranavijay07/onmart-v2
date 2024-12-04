import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Alert from './Alert';
import './Login.css';
const bcrypt = require('bcryptjs');

function SignUp() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    dob: '',
    email: '',
    zipCode: '',
    country: 'United States',
    password: '',
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const signUp = async (event) => {
    event.preventDefault();

    try {
      // Hash the password before sending to the server
      const passwordHash = await bcrypt.hash(formData.password, 10);

      const response = await fetch('http://3.144.103.79/api/customers', { // Update with your API endpoint
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          passwordHash: passwordHash, // Replace raw password with hashed password
        }),
      });

      const data = await response.json();

      if (response.ok) {
        // If sign-up is successful, notify the user and redirect
        setSuccess('Account created successfully! Redirecting to login...');
        setError('');
        setTimeout(() => navigate('/signin'), 3000);
      } else {
        // Show error message if sign-up fails
        setError(data.message || 'Sign-up failed. Please check your details.');
        setSuccess('');
      }
    } catch (err) {
      console.error('Error during sign-up:', err);
      setError('An error occurred during sign-up. Please try again.');
      setSuccess('');
    }
  };

  return (
    <div className="login-component">
      <Alert visible={!!error} type="error">
        <p>{error}</p>
        <p>Please try again.</p>
      </Alert>
      <Alert visible={!!success} type="success">
        <p>{success}</p>
      </Alert>
      <h2>Sign Up</h2>
      <form onSubmit={signUp}>
        <div>
          <label htmlFor="firstName">
            First Name
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <div>
          <label htmlFor="lastName">
            Last Name
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <div>
          <label htmlFor="dob">
            Date of Birth
            <input
              type="date"
              id="dob"
              name="dob"
              value={formData.dob}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <div>
          <label htmlFor="email">
            Email
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <div>
          <label htmlFor="zipCode">
            Zip Code
            <input
              type="text"
              id="zipCode"
              name="zipCode"
              value={formData.zipCode}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <div>
          <label htmlFor="country">
            Country
            <select
              id="country"
              name="country"
              value={formData.country}
              onChange={handleChange}
              required
            >
              <option value="United States">United States</option>
              <option value="Canada">Canada</option>
            </select>
          </label>
        </div>
        <div>
          <label htmlFor="password">
            Password
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <button type="submit">Sign Up</button>
      </form>
      <br />
      <br />
    </div>
  );
}

export default SignUp;