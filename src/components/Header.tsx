import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Menu, X, LogOut } from 'lucide-react';
import LogoutModal from './LogoutModal';
import styles from '../styles/Header.module.css';
import logo from '../assets/logooo.jpg'; //  Import your logo

interface HeaderProps {
  userType?: 'donor' | 'orphanage' | null;
  userName?: string;
}

const Header: React.FC<HeaderProps> = ({ userType, userName }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    setShowLogoutModal(false);
    navigate('/');
  };

  const isActive = (path: string) => location.pathname === path;

  const renderAuthLinks = () => {
    if (userType === 'donor') {
      return (
        <>
          <Link 
            to="/donor/dashboard" 
            className={`${styles.navLink} ${isActive('/donor/dashboard') ? styles.active : ''}`}
          >
            Home
          </Link>
          <Link 
            to="/donor/profile-complete" 
            className={`${styles.navLink} ${isActive('/donor/profile-complete') ? styles.active : ''}`}
          >
            Profile
          </Link>
          <Link 
            to="/orphanages" 
            className={`${styles.navLink} ${isActive('/orphanages') ? styles.active : ''}`}
          >
            Orphanages
          </Link>
          <button 
            onClick={() => setShowLogoutModal(true)}
            className={styles.logoutBtn}
          >
            <LogOut size={16} />
            Log out
          </button>
        </>
      );
    }

    if (userType === 'orphanage') {
      return (
        <>
          <Link 
            to="/orphanage/dashboard" 
            className={`${styles.navLink} ${isActive('/orphanage/dashboard') ? styles.active : ''}`}
          >
            Home
          </Link>
          <Link 
            to="/orphanage/profile-complete" 
            className={`${styles.navLink} ${isActive('/orphanage/profile-complete') ? styles.active : ''}`}
          >
            Profile
          </Link>
          <Link 
            to="/orphanage/requests" 
            className={`${styles.navLink} ${isActive('/orphanage/requests') ? styles.active : ''}`}
          >
            Requests
          </Link>
          <button 
            onClick={() => setShowLogoutModal(true)}
            className={styles.logoutBtn}
          >
            <LogOut size={16} />
            Log out
          </button>
        </>
      );
    }

    return (
      <>
        <Link to="/" className={styles.navLink}>Home</Link>
        <Link to="/#about" className={styles.navLink}>About</Link>
        <Link to="/#contact" className={styles.navLink}>Contact</Link>
        <Link to="/register" className={styles.navLink}>Register</Link>
        <Link to="/login" className={`${styles.navLink} ${styles.loginBtn}`}>Log In</Link>
      </>
    );
  };

  return (
    <>
      <header className={styles.header}>
        <div className={styles.container}>
          
          {/* ✅ Logo on top-left */}
          <div className={styles.logo}>
            <Link to="/">
              <img src={logo} alt="Orphan Care Network Logo" className={styles.logoImg} />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className={styles.nav}>
            {renderAuthLinks()}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className={styles.menuButton}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className={styles.mobileNav}>
            {renderAuthLinks()}
          </nav>
        )}
      </header>

      <LogoutModal
        isOpen={showLogoutModal}
        onClose={() => setShowLogoutModal(false)}
        onConfirm={handleLogout}
      />
    </>
  );
};

export default Header;