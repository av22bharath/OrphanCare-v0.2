import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ShoppingCart, Book, Shirt, Bed, Utensils, PenTool } from 'lucide-react';
import Header from '../components/Header';
import styles from '../styles/DonationPage.module.css';

const DonationPage: React.FC = () => {
  const { orphanageId } = useParams();
  const navigate = useNavigate();
  const [selectedType, setSelectedType] = useState<string>('');
  const [donationDetails, setDonationDetails] = useState<{[key: string]: string}>({});

  const donationTypes = [
    { id: 'groceries', label: 'Groceries', icon: ShoppingCart },
    { id: 'stationery', label: 'Stationery', icon: PenTool },
    { id: 'books', label: 'Books', icon: Book },
    { id: 'bedding', label: 'Bedding', icon: Bed },
    { id: 'food', label: 'Food', icon: Utensils }
  ];

  const handleTypeSelect = (type: string) => {
    setSelectedType(type);
  };

  const handleDetailsChange = (type: string, value: string) => {
    setDonationDetails({
      ...donationDetails,
      [type]: value
    });
  };

  const handleDonate = () => {
    navigate('/donation/success');
  };

  return (
    <div className={styles.donationPage}>
      <Header userType="donor" />
      
      <div className={styles.container}>
        <div className={styles.card}>
          <div className={styles.header}>
            <h1>Donation</h1>
          </div>
          
          <div className={styles.section}>
            <h2>Types</h2>
            <div className={styles.typeButtons}>
              {donationTypes.map((type) => {
                const Icon = type.icon;
                return (
                  <button
                    key={type.id}
                    onClick={() => handleTypeSelect(type.id)}
                    className={`${styles.typeButton} ${selectedType === type.id ? styles.active : ''}`}
                  >
                    <Icon size={24} />
                    <span>{type.label}</span>
                  </button>
                );
              })}
            </div>
          </div>
          
          {/* Dynamic input sections */}
          {donationTypes.map((type) => (
            <div key={type.id} className={styles.section}>
              {type.id === 'bedding' && (
                <>
                  <h3>{type.label}</h3>
                  <div className={styles.inputGroup}>
                    <input
                      type="text"
                      placeholder="ex: 2 Pillows and 5 Bedsheets"
                      value={donationDetails[type.id] || ''}
                      onChange={(e) => handleDetailsChange(type.id, e.target.value)}
                      className={styles.input}
                    />
                  </div>
                </>
              )}
              
              {type.id === 'food' && (
                <>
                  <h3>{type.label}</h3>
                  <div className={styles.foodNote}>
                    <h4>Contact Orphanage Directly</h4>
                    <div className={styles.noteContent}>
                      <p><strong>NOTE:</strong> We kindly request donors to contact the orphanage directly to confirm the current needs. Since the number of children at our orphanage may vary from time to time due to special activities and other obligations, the food requirements also change accordingly. Your understanding and continued support are deeply appreciated.</p>
                    </div>
                  </div>
                </>
              )}
              
              {!['bedding', 'food'].includes(type.id) && (
                <>
                  <h3>{type.label}</h3>
                  <div className={styles.inputGroup}>
                    <input
                      type="text"
                      placeholder={`Enter ${type.label.toLowerCase()} details`}
                      value={donationDetails[type.id] || ''}
                      onChange={(e) => handleDetailsChange(type.id, e.target.value)}
                      className={styles.input}
                    />
                  </div>
                </>
              )}
            </div>
          ))}
          
          <button 
            onClick={handleDonate}
            className={`${styles.btn} ${styles.btnDonate}`}
          >
            DONATE
          </button>
        </div>
      </div>
      
      {/* Footer */}
      <footer className={styles.footer}>
        <span>OrphanCare Network</span>
      </footer>
    </div>
  );
};

export default DonationPage;