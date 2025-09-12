import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Users, Gift, BookOpen, Phone, Mail, Facebook, Instagram, Twitter } from 'lucide-react';
import Header from '../components/Header';
import styles from '../styles/LandingPage.module.css';

const LandingPage: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className={styles.landingPage}>
      <Header />

      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroBackground}>
          <svg viewBox="0 0 1200 800" className={styles.heroWave}>
            <path d="M0,0 C400,200 600,100 1200,300 L1200,0 Z" fill="var(--primary-maroon)" />
          </svg>
        </div>
        
        <div className={styles.container}>
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>
              "Hope begins here"
            </h1>
            <p className={styles.heroText}>
              Welcome to OrphanCare Network. You can be the reason a child smiles today.
              Join our mission to bring hope and happiness to children in need.
            </p>
            <Link to="/register" className="btn btn-primary">
              Get Started
            </Link>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section id="mission" className={styles.mission}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Our Mission</h2>
          <p className={styles.missionText}>
            To connect caring donors with orphanages in need, creating a bridge of hope
            that transforms lives and builds stronger communities for our children.
          </p>
          
          <div className={styles.missionImages}>
            <div className={styles.imageCard}>
              <img 
                src="https://images.pexels.com/photos/764681/pexels-photo-764681.jpeg" 
                alt="Children learning together"
                loading="lazy"
              />
            </div>
            <div className={styles.imageCard}>
              <img 
                src="https://media.istockphoto.com/id/2163548774/vector/a-flat-style-illustration-of-orphanage-charity.jpg?s=612x612&w=0&k=20&c=b8PLYro_CWvWCDsDPt41AfzWNVSLi9Vrb31sDbCP1bI=" 
                alt="Happy children playing"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* How to Donate Section */}
      <section id="donate" className={styles.howToDonate}>
        <div className={styles.container}>
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
                <BookOpen size={32} />
                <span className={styles.stepNumber}>2</span>
              </div>
              <h3>View orphanage requirements</h3>
            </div>
            
            <div className={styles.heartbeat}>
              <svg viewBox="0 0 200 50" className={styles.heartbeatLine}>
                <path d="M0,25 L50,25 L60,5 L70,45 L80,15 L90,35 L100,25 L200,25" stroke="var(--primary-maroon)" strokeWidth="2" fill="none" />
              </svg>
            </div>
            
            <div className={styles.step}>
              <div className={styles.stepIcon}>
                <Gift size={32} />
                <span className={styles.stepNumber}>3</span>
              </div>
              <h3>Donate what you want</h3>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className={styles.about}>
        <div className={styles.container}>
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
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className={styles.footer}>
        <div className={styles.container}>
          <div className={styles.footerContent}>
            <div className={styles.footerSection}>
              <h3>OrphanCare Network</h3>
              <p>OrphanCare Network is a Non-Profit Organization.</p>
            </div>
            
            <div className={styles.footerSection}>
              <h4>Contact Us</h4>
              <div className={styles.contactInfo}>
                <div className={styles.contactItem}>
                  <Mail size={16} />
                  <span>info@orphancare.org</span>
                </div>
                <div className={styles.contactItem}>
                  <Phone size={16} />
                  <span>+91 9876543210</span>
                </div>
              </div>
            </div>
            
            <div className={styles.footerSection}>
              <h4>Follow Us</h4>
              <div className={styles.socialLinks}>
                <a href="#" aria-label="Facebook">
                  <Facebook size={20} />
                </a>
                <a href="#" aria-label="Instagram">
                  <Instagram size={20} />
                </a>
                <a href="#" aria-label="Twitter">
                  <Twitter size={20} />
                </a>
              </div>
            </div>
          </div>
          
          <div className={styles.footerBottom}>
            <p>&copy; 2024 OrphanCare Network. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;