import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });


  let navigate = useNavigate()

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    navigate("/home")
    console.log('Navigating to the homepage', formData);
  };
  
  return (
    <div className='login-container'>
      <h2 className='loginheader'>User Login</h2>
      <form onSubmit={handleSubmit} id='loginform'>
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
        <button className='submitbtn' type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;