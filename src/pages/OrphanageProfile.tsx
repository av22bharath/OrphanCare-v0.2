import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Users, User } from 'lucide-react';
import Header from '../components/Header';
import styles from '../styles/OrphanageProfile.module.css';

const OrphanageProfile: React.FC = () => {
  const { id } = useParams();

  return (
    <div className={styles.orphanageProfile}>
      <Header userType="donor" />
      
      {/* Banner Section */}
      <section className={styles.banner}>
        <img 
          src="https://images.pexels.com/photos/8923113/pexels-photo-8923113.jpeg?auto=compress&cs=tinysrgb&w=1200&h=400&fit=crop"
          alt="Orphanage group photo"
          className={styles.bannerImage}
        />
      </section>
      
      <div className={styles.container}>
        {/* Info Section */}
        <section className={styles.infoSection}>
          <div className={styles.infoCard}>
            <div className={styles.infoContent}>
              <h1>Abhayadhama</h1>
              <div className={styles.contactInfo}>
                <div className={styles.contactItem}>
                  <MapPin size={20} />
                  <span>Whitefield Post, Bengaluru 560066</span>
                </div>
                <div className={styles.contactItem}>
                  <Phone size={20} />
                  <span>+91 9876543210</span>
                </div>
                <div className={styles.contactItem}>
                  <Mail size={20} />
                  <span>contact@abhayadhama.org</span>
                </div>
              </div>
            </div>
            
            <Link 
              to={`/donation/${id}`} 
              className={`${styles.btn} ${styles.btnDonate}`}
            >
              Donate Now
            </Link>
          </div>
          
          <div className={styles.stats}>
            <div className={styles.statCard}>
              <div className={styles.statIcon}>
                <Users size={32} />
              </div>
              <div className={styles.statContent}>
                <span className={styles.statNumber}>800+</span>
                <span className={styles.statLabel}>Students</span>
              </div>
            </div>
            
            <div className={styles.statCard}>
              <div className={styles.statIcon}>
                <User size={32} />
              </div>
              <div className={styles.statContent}>
                <span className={styles.statNumber}>500+</span>
                <span className={styles.statLabel}>Male</span>
              </div>
            </div>
            
            <div className={styles.statCard}>
              <div className={styles.statIcon}>
                <User size={32} />
              </div>
              <div className={styles.statContent}>
                <span className={styles.statNumber}>300+</span>
                <span className={styles.statLabel}>Female</span>
              </div>
            </div>
          </div>
        </section>

        {/* Needs Section */}
        <section className={styles.needsSection}>
          <div className={styles.needsContent}>
            <h2>Orphanage Needs</h2>
            
            <div className={styles.needsGrid}>
              <div className={styles.needsCategory}>
                <h3>Basic Needs</h3>
                <div className={styles.needsList}>
                  <div className={styles.needItem}>
                    <h4>Groceries</h4>
                    <p>Rice, wheat, cooking oil, spices, and other essential food items for daily meals.</p>
                  </div>
                  <div className={styles.needItem}>
                    <h4>Bedding</h4>
                    <p>Pillows, bedsheets, blankets, and mattresses for comfortable sleeping arrangements.</p>
                  </div>
                  <div className={styles.needItem}>
                    <h4>Food</h4>
                    <p>Fresh fruits, vegetables, milk, eggs, and nutritious meals for growing children.</p>
                  </div>
                </div>
              </div>
              
              <div className={styles.needsCategory}>
                <h3>Educational Supplies</h3>
                <div className={styles.needsList}>
                  <div className={styles.needItem}>
                    <h4>Stationery</h4>
                    <p>Notebooks, pens, pencils, erasers, rulers, and other writing materials for studies.</p>
                  </div>
                  <div className={styles.needItem}>
                    <h4>Books</h4>
                    <p>Textbooks, story books, educational materials, and library resources for learning.</p>
                  </div>
                  <div className={styles.needItem}>
                    <h4>Others</h4>
                    <p>Computers, tablets, educational toys, and other learning aids to support education.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className={styles.otherNeeds}>
              <h3>Other Needs</h3>
              <div className={styles.otherNeedsContent}>
                <p>
                  We also need support for medical expenses, clothing, sports equipment, and infrastructure 
                  development. Any contribution towards maintenance of the building, utilities, and transportation 
                  for the children would be greatly appreciated. Special requirements include medical care, 
                  physiotherapy equipment, and educational technology to help children with special needs.
                </p>
              </div>
            </div>
          </div>
          
          <div className={styles.needsIllustration}>
            <img 
              src="https://images.pexels.com/photos/8419063/pexels-photo-8419063.jpeg?auto=compress&cs=tinysrgb&w=400&h=500&fit=crop"
              alt="Children learning"
            />
          </div>
        </section>

        {/* Donate Button */}
        <section className={styles.donateSection}>
          <Link 
            to={`/donation/${id}`} 
            className={`${styles.btn} ${styles.btnDonateLarge}`}
          >
            DONATE NOW
          </Link>
        </section>
      </div>

      {/* Footer */}
      <footer className={styles.footer}>
        <div className={styles.container}>
          <span>OrphanCare Network</span>
        </div>
      </footer>
    </div>
  );
};

export default OrphanageProfile;