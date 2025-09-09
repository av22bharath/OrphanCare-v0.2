import React from 'react';
import { Link } from 'react-router-dom';
import { Users, Heart, BookOpen, Edit } from 'lucide-react';
import Header from '../components/Header';
import styles from '../styles/OrphanageDashboard.module.css';

const OrphanageDashboard: React.FC = () => {
  return (
    <div className={styles.orphanageDashboard}>
      <Header userType="orphanage" />
      
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroBackground}>
          <svg viewBox="0 0 1200 600" className={styles.heroWave}>
            <path d="M0,0 C300,150 500,50 1200,200 L1200,0 Z" fill="var(--primary-maroon)" />
          </svg>
        </div>
        
        <div className={styles.container}>
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>
              "Hope begins here"
            </h1>
            <p className={styles.heroText}>
              Welcome to OrphanCare Network. Together we can provide better care and opportunities for children in need.
            </p>
          </div>
        </div>
      </section>

      <div className={styles.container}>
        {/* Mission Section */}
        <section className={styles.mission}>
          <div className={styles.missionCard}>
            <h2>Our Mission</h2>
            <p>
              To provide a safe, nurturing environment where children can grow, learn, and thrive while connecting with caring donors who believe in their potential.
            </p>
          </div>
          
          <div className={styles.missionImages}>
            <div className={styles.imageCard}>
              <img 
                src="https://images.pexels.com/photos/8419063/pexels-photo-8419063.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop" 
                alt="Children learning"
                loading="lazy"
              />
            </div>
            <div className={styles.imageCard}>
              <img 
                src="https://images.pexels.com/photos/8923189/pexels-photo-8923189.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop" 
                alt="Happy children"
                loading="lazy"
              />
            </div>
          </div>
        </section>

        {/* How to Donate Section */}
        <section className={styles.howToDonate}>
          <h2 className={styles.sectionTitle}>How to Donate?</h2>
          
          <div className={styles.donationSteps}>
            <div className={styles.step}>
              <div className={styles.stepIcon}>
                <Users size={32} />
                <span className={styles.stepNumber}>1</span>
              </div>
              <h3>Register as Donor</h3>
            </div>
            
            <div className={styles.heartbeat}>
              <svg viewBox="0 0 200 50" className={styles.heartbeatLine}>
                <path d="M0,25 L50,25 L60,5 L70,45 L80,15 L90,35 L100,25 L200,25" stroke="var(--primary-maroon)" strokeWidth="2" fill="none" />
              </svg>
              <Heart size={24} fill="var(--primary-maroon)" color="var(--primary-maroon)" className={styles.heartIcon} />
            </div>
            
            <div className={styles.step}>
              <div className={styles.stepIcon}>
                <Edit size={32} />
                <span className={styles.stepNumber}>2</span>
              </div>
              <h3>View the requirements posted by Orphanages</h3>
            </div>
            
            <div className={styles.heartbeat}>
              <svg viewBox="0 0 200 50" className={styles.heartbeatLine}>
                <path d="M0,25 L50,25 L60,5 L70,45 L80,15 L90,35 L100,25 L200,25" stroke="var(--primary-maroon)" strokeWidth="2" fill="none" />
              </svg>
            </div>
            
            <div className={styles.step}>
              <div className={styles.stepIcon}>
                <Heart size={32} />
                <span className={styles.stepNumber}>3</span>
              </div>
              <h3>Donate what you want</h3>
            </div>
          </div>
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
            <p>
              Through our platform, we facilitate meaningful connections that transform 
              lives, ensuring that resources reach the children who need them most while 
              making the donation process transparent and impactful.
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

export default OrphanageDashboard;