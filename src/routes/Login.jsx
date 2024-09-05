import React, { useState } from 'react';
import axios from '../api';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const dispatch = useDispatch();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const onFinish = async (e) => {
    e.preventDefault();

    const userData = { username, password };

    try {
      const response = await axios.post('/auth/login', userData);
      localStorage.setItem('token', response.data.token);
      console.log(response.data.token)
      dispatch({ type: 'SET_AUTH', payload: response.data.token });
      navigate('/profile');
    } catch (error) {
      console.error('Error:', error.response?.data || error.message);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900">
      <div className="w-full max-w-md p-8 bg-gray-800 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-white mb-6 text-center">Login</h2>
        <form onSubmit={onFinish}>
          <div className="mb-4">
            <label className="block text-gray-400 text-sm font-semibold mb-2" htmlFor="username">
              Username
            </label>
            <input id="username" type="text" value={username} onChange={(e) => setUsername(e.target.value)} className="w-full px-4 py-2 border border-gray-700 rounded-lg bg-gray-900 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500" placeholder="Enter your username"/>
          </div>
          <div className="mb-6">
            <label className="block text-gray-400 text-sm font-semibold mb-2" htmlFor="password">
              Password
            </label>
            <input id="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full px-4 py-2 border border-gray-700 rounded-lg bg-gray-900 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500" placeholder="Enter your password" />
          </div>
          <button type="submit" className="w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
