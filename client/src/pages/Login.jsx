import React from 'react'
import { Link } from 'react-router-dom'
import { useState, useNavigate } from 'react';
import axios from 'axios';

const Login = () => {
  const [inputs, setInputs] = useState({
    username: "",
    password: "",
  });

  const [err, setError] = useState(null);

  const navigate = useNavigate()

  const handleChange = e => {
    setInputs(prev => ({...prev, [e.target.name]: e.target.value}));
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const res = await axios.post("/auth/login", inputs);
      console.log(res);
      navigate("/");
    } catch (err) {
      console.log(err);
      setError(err.response.data);
    }
  };

  return (
    <div className='auth'>
      <h1>Login</h1>
      <form> 
        <input type='text' placeholder='username' name='username' onChange={handleChange} required/>
        <input type='password' placeholder='password' name='password' onChange={handleChange} required/>
        <button onClick={handleSubmit}>Login</button>
        {err && <p>{err}</p>}
        <span>
          Don't you have an account? <Link to="/register">Register</Link>
        </span>
      </form>
    </div>
  )
}

export default Login