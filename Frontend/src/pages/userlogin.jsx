import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../register.css'; // Reusing the same CSS for consistency

function UserLogin() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    setError('');
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    if (!formData.email || !formData.password) {
      setError('Both email and password are required.');
      return;
    }

    setLoading(true);
    try {
      // This assumes you have a /api/auth/login endpoint on your backend
      const response = await axios.post('/api/auth/login', {
        email: formData.email,
        password: formData.password
      });

      // Assuming the backend sends back a token on successful login
      // You would typically save this token (e.g., in localStorage)
      // For now, we'll just show an alert and navigate.
      alert(response.data.message);
      navigate('/'); // Navigate to the home page after successful login
      
    } catch (err) {
      setError(err.response?.data?.message || 'Login failed. Please check your credentials.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="register-container" style={{ justifyContent: 'center', alignItems: 'center', minHeight: '80vh' }}>
      <div className="register-div1" style={{ maxWidth: '500px' }}>
        <div className="register-title">
          User Login
        </div>

        <form onSubmit={handleLogin}>
          {error && <p style={{ color: 'red', textAlign: 'center' }}>{error}</p>}
          <div className="register-form-grid" style={{ gridTemplateColumns: '1fr' }}>
            
            <div className="register-form-field">
              <label>Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="you@example.com"
                className="input"
              />
            </div>

            <div className="register-form-field">
              <label>Password</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Password"
                className="input"
              />
            </div>

          </div>

          <div className="register-buttons" style={{ marginTop: '20px' }}>
            <button
              type="button"
              className="register-btn-outline-secondary"
              onClick={() => navigate('/register')}
            >
              Create an account
            </button>
            <button type="submit" className="register-btn-reg" disabled={loading}>
              {loading ? 'Logging in...' : 'Login'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default UserLogin;
