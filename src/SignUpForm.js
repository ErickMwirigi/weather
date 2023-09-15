import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Signup() {
  const [signUpForm, setSignUpForm] = useState({
    firstname: '',
    surname: '',
    occupation:'',
    contact:'',
    email:'',
    password:''
  });

  let navigate = useNavigate()


  const handleChange = (e) => {
    const { id, value } = e.target;
    setSignUpForm({ ...signUpForm, [id]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("http://localhost:8002/User-data",{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body: JSON.stringify(signUpForm)
    })
    .then(resp => resp.json())
    .then(data=>setSignUpForm(data))
    
    navigate("/home")
  };
  
  return (
    <div className='signup-form'>
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit} id='signUp'>
        <div>
        <div className='inputs'>
          <label htmlFor='firstname' className='label'>Firstname :</label>
          <input
            type="text"
            id="firstname"
            value={signUpForm.firstname}
            autoComplete="off"
            onChange={handleChange}
          />
          <label htmlFor='surname' className='label'>Surname :</label>
          <input
            type="text"
            id="surname"
            value={signUpForm.surname}
            autoComplete="off"
            onChange={handleChange}
          />
          </div>
          <div className='inputs'>
          <label htmlFor='occupation' className='label'>Occupation :</label>
          <input
            type="text"
            id="occupation"
            value={signUpForm.occupation}
            autoComplete="off"
            onChange={handleChange}
          />
          </div>
        <div className='inputs'>
        <label htmlFor='email' className='label'>Email :</label>
        <input
          type="email"
          id="email"
          value={signUpForm.email}
          onChange={handleChange}
        />
        <label htmlFor='contact' className='label'>Contact :</label>
        <input
          type="tel"
          id="contact"
          value={signUpForm.contact}
          onChange={handleChange}
        />
        </div>
        <div className='inputs'>
          <label htmlFor='password' className='label'>Password:</label>
          <input
            type="password"
            id="password"
            value={signUpForm.password}
            onChange={handleChange}
          />
          </div>
        </div>
        <button className='submitbtn' type="submit">Sign Up</button>
      </form>
    </div>
  );
}

export default Signup;