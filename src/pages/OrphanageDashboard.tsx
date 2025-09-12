// src/pages/OrphanageDashboard.tsx
import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  MapPin,
  Phone,
  User,
  Edit,
  Plus,
  ShoppingCart,
  Bed,
  Utensils,
  BookOpen,
  PenTool,
  Package,
} from "lucide-react";
import Header from "../components/Header";
import styles from "../styles/OrphanageDashboard.module.css";

interface Requirement {
  category: string;
  name: string;
  quantity: string;
  unit: string;
}

const OrphanageDashboard: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [requirements, setRequirements] = useState<Requirement[]>([]);

  // ✅ Capture new requirement when coming back from AddRequirement page
  useEffect(() => {
    if (location.state && (location.state as any).newRequirement) {
      const newReq = (location.state as any).newRequirement as Requirement;
      setRequirements((prev) => [...prev, newReq]);
      // Clear state after adding to avoid duplication on refresh
      navigate(location.pathname, { replace: true });
    }
  }, [location, navigate]);

  // Helper to render requirements by category
  const renderRequirements = (category: string) => {
    return requirements
      .filter((r) => r.category?.toLowerCase() === category.toLowerCase())
      .map((r, idx) => (
        <div key={idx} className={styles.requirementCard}>
          <span>{r.name}</span>
          <span>
            {r.quantity} {r.unit}
          </span>
        </div>
      ));
  };

  return (
    <div className={styles.orphanageDashboard}>
      <Header userType="orphanage" />

      {/* Profile Section */}
      <section className={styles.profileSection}>
        <div className={styles.container}>
          <h2 className={styles.welcomeText}>
            Welcome back, <span className={styles.highlight}>Abhyadama</span> 👋
          </h2>
          <p className={styles.subtitle}>
            We’re glad to see you again! Here’s your profile overview.
          </p>

          <div className={styles.profileCard}>
            <div className={styles.profileIcon}>
              <User size={48} color="var(--primary-maroon)" />
            </div>
            <div className={styles.profileInfo}>
              <h3>Abhyadama</h3>
              <div className={styles.contactItem}>
                <MapPin size={16} />
                <span>Whitefield Post, Bengaluru 560066</span>
              </div>
              <div className={styles.contactItem}>
                <Phone size={16} />
                <span>+91 9876543210</span>
              </div>
            </div>
            <Link
              to="/orphanage/profile-complete"
              className={`${styles.btn} ${styles.btnEdit}`}
            >
              <Edit size={16} />
              Edit Your Profile
            </Link>
          </div>

          {/* Stats Section */}
          <div className={styles.statsSection}>
            <div className={styles.statCard}>
              <h3>800+</h3>
              <p>Students</p>
            </div>
            <div className={styles.statCard}>
              <h3>500+</h3>
              <p>Male</p>
            </div>
            <div className={styles.statCard}>
              <h3>300+</h3>
              <p>Female</p>
            </div>
          </div>
        </div>
      </section>

      <hr className={styles.hrrr} />

      {/* Orphanage Needs Section */}
      <section className={styles.needsSection}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Orphanage Needs</h2>

          {/* Basic Needs */}
          <div className={styles.needGroup}>
            <h3>Basic Needs</h3>
            <div className={styles.needCards}>
              <div className={styles.needCard}>
                <ShoppingCart className={styles.needIcon} size={28} />
                <span className={styles.needTitle}>Groceries</span>
                <button
                  className={styles.addBtn}
                  onClick={() => navigate("/add-requirement/groceries")}
                >
                  <Plus size={18} />
                </button>
              </div>
              <div className={styles.needCard}>
                <Bed className={styles.needIcon} size={28} />
                <span className={styles.needTitle}>Bedding</span>
                <button
                  className={styles.addBtn}
                  onClick={() => navigate("/add-requirement/bedding")}
                >
                  <Plus size={18} />
                </button>
              </div>
              <div className={styles.needCard}>
                <Utensils className={styles.needIcon} size={28} />
                <span className={styles.needTitle}>Food</span>
                <button
                  className={styles.addBtn}
                  onClick={() => navigate("/add-requirement/food")}
                >
                  <Plus size={18} />
                </button>
              </div>

              {/* Show Added Basic Needs */}
              {renderRequirements("groceries")}
              {renderRequirements("bedding")}
              {renderRequirements("food")}
            </div>
          </div>

          {/* Educational Supplies */}
          <div className={styles.needGroup}>
            <h3>Educational Supplies</h3>
            <div className={styles.needCards}>
              <div className={styles.needCard}>
                <PenTool className={styles.needIcon} size={28} />
                <span className={styles.needTitle}>Stationaries</span>
                <button
                  className={styles.addBtn}
                  onClick={() => navigate("/add-requirement/stationaries")}
                >
                  <Plus size={18} />
                </button>
              </div>
              <div className={styles.needCard}>
                <BookOpen className={styles.needIcon} size={28} />
                <span className={styles.needTitle}>Books</span>
                <button
                  className={styles.addBtn}
                  onClick={() => navigate("/add-requirement/books")}
                >
                  <Plus size={18} />
                </button>
              </div>
              <div className={styles.needCard}>
                <Package className={styles.needIcon} size={28} />
                <span className={styles.needTitle}>Others</span>
                <button
                  className={styles.addBtn}
                  onClick={() => navigate("/add-requirement/educational-others")}
                >
                  <Plus size={18} />
                </button>
              </div>

              {/* Show Added Educational Supplies */}
              {renderRequirements("stationaries")}
              {renderRequirements("books")}
              {renderRequirements("educational-others")}
            </div>
          </div>

          {/* Other Needs */}
          <div className={styles.needGroup}>
            <h3>Other Needs</h3>
            <div className={styles.needCardsSingle}>
              <div className={styles.needCard}>
                <Package className={styles.needIcon} size={28} />
                <span className={styles.needTitle}>General</span>
                <button
                  className={styles.addBtn}
                  onClick={() => navigate("/add-requirement/general")}
                >
                  <Plus size={18} />
                </button>
              </div>

              {/* Show Added General Needs */}
              {renderRequirements("general")}
            </div>
          </div>
        </div>
      </section>

      <footer className={styles.footer}>
        <p>Orphanecare NetworkCopyright © 2025</p>
      </footer>
      
    </div>
  );
};

export default OrphanageDashboard;