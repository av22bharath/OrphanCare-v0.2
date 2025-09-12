import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Edit, Heart, Calendar, User, ChevronRight } from 'lucide-react';
import Header from '../components/Header';
import styles from '../styles/DonorDashboard.module.css';

import { useUser } from '../Context/userContext';




const DonorDashboard: React.FC = () => {

  const user = useUser();

console.log("user from dashboard:",user)

  const handleEditProfile = () => {
    // Navigate to profile edit
  };

  const handleDonate = (orphanageId: string) => {
    // Navigate to donation page
  };

  const handleLogout = () => {
    // Logout functionality
  };

// test comment

  return (
    <div className={styles.donorDashboard}>
      <Header userType="donor" /><br></br>
      <h2>Welcome back, <span className={styles.spann}>{user.user?.email}</span> 👋</h2>
      <p>We’re glad to see you again! Here’s your profile overview.</p>
      
      {/* Hero Section */}
      

      <div className={styles.container}>
        {/* Profile Section */}
        <section className={styles.profileSection}>
          <div className={styles.profileCard}>
            <div className={styles.profileInfo}>
              <div className={styles.profileAvatar}>
                <User size={40} />
              </div>
              <div className={styles.profileDetails}>
                <h2>{user.user?.email.toString()}</h2>
                <div className={styles.profileMeta}>
                  <div className={styles.metaItem}>
                    <MapPin size={16} />
                    <span>Bangalore, Karnataka</span>
                  </div>
                  <div className={styles.metaItem}>
                    <Phone size={16} />
                    <span>+91 9876543210</span>
                  </div>
                </div>
              </div>
            </div>
            <Link to="/donor/profile-complete" className={`${styles.btn} ${styles.btnEdit}`}>
              <Edit size={16} />
              Edit Your Profile
            </Link>
          </div>
        </section><hr className={styles.hrrr}></hr>
        
        {/* Your Donations */}
        <section className={styles.donations}>
          <h2 className={styles.sectionTitle}>Your Donations</h2><br></br>
          <div className={styles.donationsScroll}>
            <div className={styles.donationCard}>
              <div className={styles.donationStats}>
                <div className={styles.statItem}>
                  <span className={styles.statNumber}>5</span>
                  <span className={styles.statLabel}>Books</span>
                </div>
                <div className={styles.statItem}>
                  <span className={styles.statNumber}>3</span>
                  <span className={styles.statLabel}>Clothes</span>
                </div>
                <div className={styles.statItem}>
                  <span className={styles.statNumber}>₹2000</span>
                  <span className={styles.statLabel}>Fund</span>
                </div>
              </div>
              <h4>Abhayadhama Orphanage</h4>
              <div className={styles.donationMeta}>
                <Calendar size={14} />
                <span>15 Dec 2024</span>
              </div>
            </div>
            
            <div className={styles.donationCard}>
              <div className={styles.donationStats}>
                <div className={styles.statItem}>
                  <span className={styles.statNumber}>10</span>
                  <span className={styles.statLabel}>Books</span>
                </div>
                <div className={styles.statItem}>
                  <span className={styles.statNumber}>₹5000</span>
                  <span className={styles.statLabel}>Fund</span>
                </div>
              </div>
              <h4>Hope Children Home</h4>
              <div className={styles.donationMeta}>
                <Calendar size={14} />
                <span>10 Dec 2024</span>
              </div>
            </div>
          </div>

          
          
          
        </section><br></br><hr className={styles.hrrr}></hr>
        

        {/* Orphanages Near Me */}
        <section className={styles.orphanages}>
          <h2 className={styles.sectionTitle}>List of Orphanages</h2><br></br>
          <div className={styles.orphanagesGrid}>
            <div className={styles.orphanageCard}>
              <h4>Abhayadhama</h4>
              <p className={styles.orphanageDesc}>
                Providing care and education to underprivileged children since 1995.
              </p>
              <div className={styles.orphanageContact}>
                <div className={styles.contactItem}>
                  <MapPin size={14} />
                  <span>Whitefield Post, Bengaluru 560066</span>
                </div>
                <div className={styles.contactItem}>
                  <Phone size={14} />
                  <span>+91 9876543210</span>
                </div>
              </div>
              
              <div className={styles.currentNeeds}>
                <h5>Current Needs</h5>
                <div className={styles.needsTags}>
                  <span className={styles.tag}>Food</span>
                  <span className={styles.tag}>Clothes</span>
                  <span className={styles.tag}>Groceries</span>
                  <span className={styles.tag}>Funds</span>
                </div>
              </div>
              
              <Link 
                to="/orphanage/1" 
                className={`${styles.btn} ${styles.btnDonate}`}
              >
                Donate Now
                <ChevronRight size={16} />
              </Link>
            </div>
            
            <div className={styles.orphanageCard}>
              <h4>Hope Children Home</h4>
              <p className={styles.orphanageDesc}>
                A safe haven for children providing love, care, and quality education.
              </p>
              <div className={styles.orphanageContact}>
                <div className={styles.contactItem}>
                  <MapPin size={14} />
                  <span>Koramangala, Bengaluru 560034</span>
                </div>
                <div className={styles.contactItem}>
                  <Phone size={14} />
                  <span>+91 8765432109</span>
                </div>
              </div>
              
              <div className={styles.currentNeeds}>
                <h5>Current Needs</h5>
                <div className={styles.needsTags}>
                  <span className={styles.tag}>Books</span>
                  <span className={styles.tag}>Stationery</span>
                  <span className={styles.tag}>Bedding</span>
                </div>
              </div>
              
              <Link 
                to="/orphanage/2" 
                className={`${styles.btn} ${styles.btnDonate}`}
              >
                Donate Now
                <ChevronRight size={16} />
              </Link>
            </div>
          </div>
          <Link to="/orphanages" className={styles.viewmore}>
                View more...
          </Link>
        </section><br></br><hr className={styles.hrrr}></hr>
       

        {/* Pending Donations */}
        <section className={styles.pendingDonations}>
          <h2 className={styles.sectionTitle}>Pending Donations</h2>
          <div className={styles.pendingList}>
            <div className={styles.pendingCard}>
              <div className={styles.pendingInfo}>
                <h4>Abhayadhama</h4>
                <span className={styles.pendingStatus}>Pending</span>
                <p className={styles.requestedItem}>Food</p>
              </div>
            </div>
            <div className={styles.pendingCard}>
              <div className={styles.pendingInfo}>
                <h4>Hope Children Home</h4>
                <span className={styles.pendingStatus}>Pending</span>
                <p className={styles.requestedItem}>Clothes & Groceries</p>
              </div>
            </div>
          </div>
          <p className={styles.pendingMessage}>
            Your donation is still pending – please complete it as soon as possible
          </p>
        </section>

        {/* About Us Section */}
        <section className={styles.about}>
          <div className={styles.aboutCard}>
            <h2 className={styles.sectionTitle}>About Us</h2>
            <p>
              OrphanCare Network is a dedicated platform that bridges the gap between 
              generous donors and orphanages in need. We believe that every child deserves 
              love, care, and opportunity to thrive.
            </p>
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className={styles.footer}>
        <div className={styles.container}>
          <div className={styles.footerContent}>
            <span>OrphanCare Network</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default DonorDashboard;