import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/AdminLogin.css';
import { FaUser, FaLock, FaEye, FaEyeSlash } from 'react-icons/fa';
import { apiRequest, API_ENDPOINTS } from '../utils/api';

const AdminLogin = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (error) setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!formData.username || !formData.password) {
      setError('Please enter both username and password');
      return;
    }

    setIsLoading(true);
    setError('');

    try {
      const response = await apiRequest(API_ENDPOINTS.ADMIN_LOGIN, {
        method: 'POST',
        body: JSON.stringify({
          username: formData.username,
          password: formData.password,
          rememberMe
        }),
      });

      if (response.success) {
        localStorage.setItem('adminToken', response.token);
        if (rememberMe) {
          localStorage.setItem('adminRememberMe', 'true');
        }
        navigate('/admin/dashboard');
      } else {
        setError(response.message || 'Invalid credentials');
      }
    } catch (error) {
      console.error('Login error:', error);
      setError('Network error. Please check your connection and try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="login-container">
      {/* Left Side - Image/Branding */}
      <div className="login-left">
        <div className="brand-content">
          <div className="brand-logo">
            <img 
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMiDBg0T6c-XNVLF5aYUQ5gtzxWtp9IKat-w&s" 
              alt="INLD Logo" 
              className="logo-image"
            />
          </div>
          <h1 className="brand-title">Indian National Lok Dal</h1>
          <p className="brand-subtitle">Building a Progressive Haryana</p>
          <div className="brand-features">
            <div className="feature-item">
              <div className="feature-icon">✓</div>
              <span>Secure Admin Access</span>
            </div>
            <div className="feature-item">
              <div className="feature-icon">✓</div>
              <span>Real-time Dashboard</span>
            </div>
            <div className="feature-item">
              <div className="feature-icon">✓</div>
              <span>Data Management</span>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side - Login Form */}
      <div className="login-right">
        <div className="login-form-container">
          <div className="login-header">
            <h2>Welcome Back</h2>
            <p>Sign in to your admin account</p>
          </div>

          {error && (
            <div className="error-alert">
              <span className="error-icon">⚠</span>
              {error}
            </div>
          )}

          <form className="login-form" onSubmit={handleSubmit}>
            <div className="input-group">
              <label htmlFor="username">Username</label>
              <div className="input-container">
                <FaUser className="input-icon" />
                <input
                  id="username"
                  type="text"
                  name="username"
                  value={formData.username}
                  onChange={handleInputChange}
                  placeholder="Enter your username"
                  required
                />
              </div>
            </div>

            <div className="input-group">
              <label htmlFor="password">Password</label>
              <div className="input-container">
                <FaLock className="input-icon" />
                <input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  placeholder="Enter your password"
                  required
                />
                <button
                  type="button"
                  className="password-toggle"
                  onClick={() => setShowPassword(!showPassword)}
                  aria-label={showPassword ? 'Hide password' : 'Show password'}
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
            </div>

            <div className="form-options">
              <label className="checkbox-container">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                />
                <span className="checkmark"></span>
                Remember me
              </label>
              <a href="/forgot-password" className="forgot-link">
                Forgot Password?
              </a>
            </div>

            <button
              type="submit"
              className="login-button"
              disabled={isLoading}
            >
              {isLoading ? (
                <>
                  <div className="loading-spinner"></div>
                  Signing In...
                </>
              ) : (
                'Sign In'
              )}
            </button>
          </form>

          <div className="login-footer">
            <p>
              Need help? <a href="/contact">Contact Support</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
