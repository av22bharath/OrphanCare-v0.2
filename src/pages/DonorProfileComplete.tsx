import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { User, Calendar } from 'lucide-react';
import { motion } from 'framer-motion';
import Header from '../components/Header';
import { profileService } from '../utils/profile';
import styles from '../styles/ProfileComplete.module.css';

const DonorProfileComplete: React.FC = () => {
  const [formData, setFormData] = useState({
    donorName: '',
    phoneNumber: '',
    donationPref: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      const result = await profileService.completeDonorProfile({
        donorName: formData.donorName,
        phoneNumber: formData.phoneNumber,
        donationPref: formData.donationPref || undefined
      });

      if (result.success) {
        navigate('/donor/dashboard');
      } else {
        alert(result.message);
      }
    } catch (error) {
      alert('Failed to complete profile. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={styles.profileComplete}>
      <Header userType="donor" />
      
      <motion.div 
        className={styles.container}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className={styles.card}>
          <div className={styles.header}>
            <h1>Complete your profile</h1>
            <div className={styles.avatarContainer}>
              <User size={60} />
            </div>
          </div>
          
          <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.formGroup}>
              <label htmlFor="donorName">Full Name</label>
              <input
                type="text"
                id="donorName"
                name="donorName"
                value={formData.donorName}
                onChange={handleChange}
                required
                className={styles.input}
                placeholder="Enter your full name"
              />
            </div>
            
            <div className={styles.formGroup}>
              <label htmlFor="phoneNumber">Phone Number</label>
              <input
                type="tel"
                id="phoneNumber"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                required
                className={styles.input}
                placeholder="Enter your phone number"
              />
            </div>
            
            <div className={styles.formGroup}>
              <label htmlFor="donationPref">Donation Preference (Optional)</label>
              <input
                type="text"
                id="donationPref"
                name="donationPref"
                value={formData.donationPref}
                onChange={handleChange}
                className={styles.input}
                placeholder="e.g., Education, Food, Healthcare"
              />
            </div>
            
            <button 
              type="submit" 
              className={`${styles.btn} ${styles.btnConfirm}`}
              disabled={isLoading}
            >
              {isLoading ? <span className="spinner"></span> : 'Confirm'}
            </button>
          </form>
          
          <div className={styles.footer}>
            <span>OrphanCare Network</span>
          </div>
        </div>
        
        {/* Decorative elements */}
        <div className={styles.decorations}>
          <div className={styles.decoration1}>
            <User size={24} />
          </div>
          <div className={styles.decoration2}>
            <Calendar size={24} />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default DonorProfileComplete;