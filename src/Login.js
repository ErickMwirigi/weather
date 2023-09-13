import React, { useState } from 'react';
import "./Login.css"

function Login() {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Navigating to the homepage', formData);
  };
  return (
    <div className='container'>
      <h2 className='header'>User Login</h2>
      <form onSubmit={handleSubmit}>
        <div className='inputs'>
          <label className='label'>Username:</label>
          <input
            type="text"
            name="username"
            value={formData.username}
            autoComplete="off"
            onChange={handleChange}
          />
        </div>
        <div className='inputs'>
          <label className='label'>Password:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </div>
        <button className='submit-container' type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;