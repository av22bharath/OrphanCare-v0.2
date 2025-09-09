import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Building, Calendar, CreditCard } from 'lucide-react';
import { motion } from 'framer-motion';
import Header from '../components/Header';
import { profileService } from '../utils/profile';
import styles from '../styles/OrphanegeProfileComplete.module.css';

const OrphanegeProfileComplete: React.FC = () => {
  const [formData, setFormData] = useState({
    orphanageName: '',
    location: '',
    capacity: '',
    establishedDate: '',
    maleCount: '',
    femaleCount: '',
    bankName: '',
    accountType: '',
    accountHolderName: '',
    accountNumber: '',
    ifscCode: ''
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
      const result = await profileService.completeOrphanageProfile({
        orphanageName: formData.orphanageName,
        location: formData.location,
        capacity: formData.capacity ? parseInt(formData.capacity) : undefined,
        establishedDate: formData.establishedDate || undefined,
        maleCount: formData.maleCount ? parseInt(formData.maleCount) : undefined,
        femaleCount: formData.femaleCount ? parseInt(formData.femaleCount) : undefined,
        bankDetails: {
          accountName: formData.bankName,
          accountType: formData.accountType,
          accountHolderName: formData.accountHolderName,
          accountNumber: formData.accountNumber,
          ifscCode: formData.ifscCode
        }
      });

      if (result.success) {
        navigate('/orphanage/dashboard');
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
      <Header userType="orphanage" />
      
      <motion.div 
        className={styles.container}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className={styles.card}>
          <div className={styles.header}>
            <div className={styles.projectText}>OUR PROJECT</div>
            <h1>Complete your profile</h1>
            <div className={styles.avatarContainer}>
              <Building size={60} />
            </div>
          </div>
          
          <form onSubmit={handleSubmit} className={styles.form}>
            {/* Basic Details */}
            <div className={styles.section}>
              <h2><span className={styles.sectionNumber}>1</span> Basic Details</h2>
              
              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label htmlFor="orphanageName">Orphanage Name</label>
                  <input
                    type="text"
                    id="orphanageName"
                    name="orphanageName"
                    value={formData.orphanageName}
                    onChange={handleChange}
                    required
                    className={styles.input}
                    placeholder="Enter orphanage name"
                  />
                </div>
                
                <div className={styles.formGroup}>
                  <label htmlFor="establishedDate">Established Date</label>
                  <input
                    type="date"
                    id="establishedDate"
                    name="establishedDate"
                    value={formData.establishedDate}
                    onChange={handleChange}
                    className={styles.input}
                  />
                </div>
              </div>
              
              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label htmlFor="location">Location/Address</label>
                  <input
                    type="text"
                    id="location"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    required
                    className={styles.input}
                    placeholder="Enter complete address"
                  />
                </div>
                
                <div className={styles.formGroup}>
                  <label htmlFor="capacity">Capacity (Optional)</label>
                  <input
                    type="number"
                    id="capacity"
                    name="capacity"
                    value={formData.capacity}
                    onChange={handleChange}
                    className={styles.input}
                    placeholder="Total capacity"
                    min="0"
                  />
                </div>
              </div>
            </div>

            {/* Orphanage Details */}
            <div className={styles.section}>
              <h2><span className={styles.sectionNumber}>2</span> Orphanage Details</h2>
              
              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label htmlFor="maleCount">Male Count (Optional)</label>
                  <input
                    type="number"
                    id="maleCount"
                    name="maleCount"
                    value={formData.maleCount}
                    onChange={handleChange}
                    className={styles.input}
                    placeholder="Enter the number of Male Orphans"
                    min="0"
                  />
                </div>
                
                <div className={styles.formGroup}>
                  <label htmlFor="femaleCount">Female Count (Optional)</label>
                  <input
                    type="number"
                    id="femaleCount"
                    name="femaleCount"
                    value={formData.femaleCount}
                    onChange={handleChange}
                    className={styles.input}
                    placeholder="Enter the number of Female Orphans"
                    min="0"
                  />
                </div>
              </div>
            </div>

            {/* Bank Details */}
            <div className={styles.section}>
              <h2><span className={styles.sectionNumber}>3</span> Bank Details</h2>
              
              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label htmlFor="bankName">Bank Name</label>
                  <input
                    type="text"
                    id="bankName"
                    name="bankName"
                    value={formData.bankName}
                    onChange={handleChange}
                    required
                    className={styles.input}
                    placeholder="Enter bank name"
                  />
                </div>
                
                <div className={styles.formGroup}>
                  <label htmlFor="accountType">Account Type</label>
                  <select
                    id="accountType"
                    name="accountType"
                    value={formData.accountType}
                    onChange={handleChange}
                    required
                    className={styles.select}
                  >
                    <option value="">Select account type</option>
                    <option value="savings">Savings</option>
                    <option value="current">Current</option>
                  </select>
                </div>
              </div>
              
              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label htmlFor="accountHolderName">Account Holder Name</label>
                  <input
                    type="text"
                    id="accountHolderName"
                    name="accountHolderName"
                    value={formData.accountHolderName}
                    onChange={handleChange}
                    required
                    className={styles.input}
                    placeholder="Enter account holder name"
                  />
                </div>
                
                <div className={styles.formGroup}>
                  <label htmlFor="accountNumber">Account Number</label>
                  <input
                    type="text"
                    id="accountNumber"
                    name="accountNumber"
                    value={formData.accountNumber}
                    onChange={handleChange}
                    required
                    className={styles.input}
                    placeholder="Enter account number"
                  />
                </div>
              </div>
              
              <div className={styles.formGroup}>
                <label htmlFor="ifscCode">IFSC Code</label>
                <input
                  type="text"
                  id="ifscCode"
                  name="ifscCode"
                  value={formData.ifscCode}
                  onChange={handleChange}
                  required
                  className={styles.input}
                  placeholder="Enter IFSC code"
                />
              </div>
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
            <Building size={24} />
          </div>
          <div className={styles.decoration2}>
            <Calendar size={24} />
          </div>
          <div className={styles.decoration3}>
            <CreditCard size={24} />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default OrphanegeProfileComplete;