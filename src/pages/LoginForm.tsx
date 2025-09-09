import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Eye, EyeOff } from 'lucide-react';
import { motion } from 'framer-motion';
import { authService } from '../utils/auth';
import styles from '../styles/LoginForm.module.css';
import { useUser } from '../Context/userContext';

interface LoginFormProps {
  role: 'Orphanage' | 'Donor';
}

const LoginForm: React.FC<LoginFormProps> = ({ role }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { setUserData } = useUser();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      const result = await authService.login({
        email: formData.email,
        password: formData.password
      });

      if (result.success && result.user) {
        // Check if user role matches the login page role
        if (result.user.role !== role) {
          alert(`This account is registered as a ${result.user.role}. Please use the correct login page.`);
          setIsLoading(false);
          return;
        }

        if (result.user.role === 'Donor') {
          console.log("login data------------->",result)
          setUserData(result.user,[],"")
          navigate('/donor/dashboard');
        } else {
          navigate('/orphanage/dashboard');
        }
      } else {
        alert(result.message);
        setIsLoading(false);
      }
    } catch (error) {
      alert('Login failed. Please try again.');
      setIsLoading(false);
    }
  };

  const handleGoogleLogin = () => {
    alert('Google login would be implemented here');
  };

  const handleForgotPassword = () => {
    alert('Forgot password flow would be implemented here');
  };

  return (
    <div className={styles.loginForm}>
      <motion.div 
        className={styles.container}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className={styles.card}>
          <div className={styles.formSection}>
            <div className={styles.logo}>
              <span>OrphanCare Network</span>
            </div>
            
            <div className={styles.formContent}>
              <h1>Login</h1>
              <p className={styles.subtitle}>As {role === 'Orphanage' ? 'an' : 'a'} {role}</p>
              
              <form onSubmit={handleSubmit}>
                <div className={styles.formGroup}>
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className={styles.input}
                    placeholder="Enter your Email"
                  />
                </div>
                
                <div className={styles.formGroup}>
                  <label htmlFor="password">Password</label>
                  <div className={styles.passwordField}>
                    <input
                      type={showPassword ? 'text' : 'password'}
                      id="password"
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      required
                      className={styles.input}
                      placeholder="Enter a Password"
                    />
                    <button
                      type="button"
                      className={styles.passwordToggle}
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                    </button>
                  </div>
                  <button 
                    type="button"
                    onClick={handleForgotPassword}
                    className={styles.forgotLink}
                  >
                    Forgot Password?
                  </button>
                </div>
                
                <button 
                  type="submit" 
                  className={`${styles.btn} ${styles.btnPrimary} ${styles.fullWidth}`}
                  disabled={isLoading}
                >
                  {isLoading ? <span className="spinner"></span> : 'Login'}
                </button>
                
                <div className={styles.divider}>
                  <span>or</span>
                </div>
                
                <button 
                  type="button" 
                  className={`${styles.btn} ${styles.btnGoogle} ${styles.fullWidth}`}
                  onClick={handleGoogleLogin}
                >
                  <svg width="20" height="20" viewBox="0 0 24 24">
                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                  </svg>
                  Log in with Google
                </button>
              </form>
              
              <p className={styles.signupLink}>
                Don't have an account? <Link to="/register">Signup</Link>
              </p>
            </div>
          </div>
          
          <div className={styles.illustrationSection}>
            <img 
              src="https://images.pexels.com/photos/8923189/pexels-photo-8923189.jpeg?auto=compress&cs=tinysrgb&w=500&h=600&fit=crop"
              alt="Mother and child illustration"
              className={styles.illustration}
            />
          </div>
          
          <div className={styles.footer}>
            <span>OrphanCare Network</span>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default LoginForm;