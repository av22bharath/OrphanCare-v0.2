import React, { useState } from 'react';
import { Check, X, ChevronDown, ChevronUp, User, Mail, Phone } from 'lucide-react';
import Header from '../components/Header';
import styles from '../styles/DonationRequestsPage.module.css';

interface DonationRequest {
  id: string;
  donorName: string;
  category: string;
  status: 'pending' | 'completed';
  phone: string;
  email: string;
  items: string[];
}

const DonationRequestsPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'requests' | 'completed'>('requests');
  const [expandedRequest, setExpandedRequest] = useState<string | null>(null);

  const mockRequests: DonationRequest[] = [
    {
      id: '1',
      donorName: 'Akshay D S',
      category: 'Groceries',
      status: 'pending',
      phone: '+91 9876543210',
      email: 'akshay@email.com',
      items: ['Rice - 10kg', 'Oil - 2 liters', 'Dal - 5kg']
    },
    {
      id: '2',
      donorName: 'Priya Sharma',
      category: 'Books',
      status: 'pending',
      phone: '+91 8765432109',
      email: 'priya@email.com',
      items: ['Science Books - 20 units', 'Story Books - 15 units']
    },
    {
      id: '3',
      donorName: 'Rahul Kumar',
      category: 'Bedding',
      status: 'completed',
      phone: '+91 7654321098',
      email: 'rahul@email.com',
      items: ['Pillows - 10 units', 'Bedsheets - 15 units']
    }
  ];

  const pendingRequests = mockRequests.filter(req => req.status === 'pending');
  const completedRequests = mockRequests.filter(req => req.status === 'completed');

  const handleApprove = (id: string) => {
    alert(`Request ${id} approved!`);
  };

  const handleReject = (id: string) => {
    alert(`Request ${id} rejected!`);
  };

  const toggleExpand = (id: string) => {
    setExpandedRequest(expandedRequest === id ? null : id);
  };

  const renderRequests = (requests: DonationRequest[]) => {
    return requests.map((request) => (
      <div key={request.id} className={styles.requestCard}>
        <div className={styles.requestHeader} onClick={() => toggleExpand(request.id)}>
          <div className={styles.requestInfo}>
            <div className={styles.donorAvatar}>
              <User size={24} />
            </div>
            <div className={styles.requestDetails}>
              <h4>{request.donorName}</h4>
              <span className={`${styles.categoryBadge} ${styles[request.category.toLowerCase()]}`}>
                {request.category}
              </span>
            </div>
          </div>
          
          <div className={styles.requestActions}>
            {request.status === 'pending' ? (
              <>
                <button 
                  onClick={(e) => { e.stopPropagation(); handleApprove(request.id); }}
                  className={`${styles.actionBtn} ${styles.approveBtn}`}
                  aria-label="Approve request"
                >
                  <Check size={16} />
                </button>
                <button 
                  onClick={(e) => { e.stopPropagation(); handleReject(request.id); }}
                  className={`${styles.actionBtn} ${styles.rejectBtn}`}
                  aria-label="Reject request"
                >
                  <X size={16} />
                </button>
              </>
            ) : (
              <button 
                className={`${styles.actionBtn} ${styles.completedBtn}`}
                aria-label="Completed request"
              >
                <Check size={16} />
              </button>
            )}
            
            <button className={styles.expandBtn}>
              {expandedRequest === request.id ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
            </button>
          </div>
        </div>
        
        {expandedRequest === request.id && (
          <div className={styles.requestExpanded}>
            <div className={styles.donorDetails}>
              <h5>Donor Details</h5>
              <div className={styles.contactInfo}>
                <div className={styles.contactItem}>
                  <Phone size={14} />
                  <span>{request.phone}</span>
                </div>
                <div className={styles.contactItem}>
                  <Mail size={14} />
                  <span>{request.email}</span>
                </div>
              </div>
            </div>
            
            <div className={styles.donationDetails}>
              <h5>Donation Details</h5>
              <ul className={styles.itemsList}>
                {request.items.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    ));
  };

  return (
    <div className={styles.donationRequestsPage}>
      <Header userType="orphanage" />
      
      {/* Banner */}
      <section className={styles.banner}>
        <img 
          src="https://images.pexels.com/photos/8923113/pexels-photo-8923113.jpeg?auto=compress&cs=tinysrgb&w=1200&h=300&fit=crop"
          alt="Orphanage banner"
          className={styles.bannerImage}
        />
      </section>

      <div className={styles.container}>
        <section className={styles.requestsSection}>
          <h1>Donation Requests</h1>
          
          <div className={styles.tabs}>
            <button 
              onClick={() => setActiveTab('requests')}
              className={`${styles.tab} ${activeTab === 'requests' ? styles.activeTab : ''}`}
            >
              Requests
            </button>
            <button 
              onClick={() => setActiveTab('completed')}
              className={`${styles.tab} ${activeTab === 'completed' ? styles.activeTab : ''}`}
            >
              Completed
            </button>
          </div>
          
          <div className={styles.requestsList}>
            {activeTab === 'requests' ? (
              <>
                {pendingRequests.length > 0 ? (
                  renderRequests(pendingRequests)
                ) : (
                  <div className={styles.emptyState}>
                    <p>No pending requests at the moment.</p>
                  </div>
                )}
              </>
            ) : (
              <>
                {completedRequests.length > 0 ? (
                  renderRequests(completedRequests)
                ) : (
                  <div className={styles.emptyState}>
                    <p>No completed requests yet.</p>
                  </div>
                )}
              </>
            )}
          </div>
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

export default DonationRequestsPage;