import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AppContext } from '../../contexts/AppContext';
import { toast } from 'react-toastify';
import axios from 'axios';

const Login = () => {
  const [see, setSee] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const { dispatch } = useContext(AppContext);
  const history = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const res = await axios.post(`${import.meta.env.VITE_API_URL}/api/v1/auth/login`, { email, password });
      toast.success('Login Successful 👌');
      dispatch({ type: 'LOGIN', payload: res.data });
      localStorage.setItem('user', JSON.stringify(res.data));
      history('/');
    } catch (error) {
      toast.error(error.response?.data?.message || 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen  flex flex-col">
      {/* Header */}
      <header className="flex justify-between items-center py-4 px-4 sm:px-8 lg:px-20">
        <div className="flex items-center">
          <img src="/svgs/buy.svg" alt="Ooja logo" className="w-16 sm:w-20" />
          <h2 className="font-iceberg text-3xl sm:text-4xl text-black">Ooja</h2>
        </div>
        <nav>
          <Link
            to="/signup"
            className="bg-rose-600 text-white py-2 px-3 sm:py-3 sm:px-5 rounded-md font-bold text-sm sm:text-base"
          >
            Signup
          </Link>
        </nav>
      </header>

      {/* Login Form */}
      <div className="flex-grow flex items-center justify-center px-4">
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-md p-6 sm:p-8 bg-slate-700 rounded-lg shadow-lg space-y-6"
        >
          <h2 className="text-center text-2xl sm:text-3xl font-semibold text-white">Login</h2>
          <p className="text-sm sm:text-base text-center text-white">
            Welcome to{' '}
            <span className="font-bold font-iceberg text-rose-500">Ooja</span>. Please enter your
            login details to enjoy the experience.
          </p>

          {/* Email Input */}
          <div>
            <label htmlFor="email" className="sr-only">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-lg border border-gray-300 p-4 text-sm shadow-sm focus:ring-2 focus:ring-rose-500"
              placeholder="Enter email"
              required
            />
          </div>

          {/* Password Input */}
          <div className="relative">
            <label htmlFor="password" className="sr-only">
              Password
            </label>
            <input
              type={see ? 'text' : 'password'}
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full rounded-lg border border-gray-300 p-4 text-sm shadow-sm focus:ring-2 focus:ring-rose-500"
              placeholder="Enter password"
              required
            />
            <button
              type="button"
              onClick={() => setSee(!see)}
              className="absolute inset-y-0 right-0 px-4 text-gray-400 hover:text-gray-600 focus:outline-none"
              aria-label="Toggle password visibility"
            >
              {see ? 'Hide' : 'Show'}
            </button>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className={`w-full rounded-lg py-3 text-white font-medium text-base bg-rose-500 ${
              loading ? 'cursor-not-allowed bg-gray-400' : 'hover:bg-rose-600'
            }`}
          >
            {loading ? 'Loading...' : 'Login'}
          </button>

          <p className="text-center text-sm text-white">
            No account?{' '}
            <Link to="/signup" className="text-yellow-300 font-bold">
              Sign up
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
