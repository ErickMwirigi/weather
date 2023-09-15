import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login({ userData }) {
  const [ isLoggedIn, setIsLoggedIn ] = useState(false)
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

    const user = userData.find(pass => pass.firstname === formData.username) ? userData.find(pass => pass.firstname === formData.username) : "Can't find"

    user.password === formData.password ? setIsLoggedIn(true) : setIsLoggedIn(false)

    isLoggedIn ? navigate("/home") :  alert("Please input the correct password or sign-up with us today.")
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