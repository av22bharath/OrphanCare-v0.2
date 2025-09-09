import React, { useEffect, useState } from "react";
import { MapPin, Phone, ChevronRight } from "lucide-react";
import { data, Link } from "react-router-dom";
import styles from "../styles/Orphanages.module.css";
import Header from "../components/Header";
import supabase from "../utils/supabase";
import { h1 } from "framer-motion/client";

const Orphanages: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setIsLoading] = useState(false);

  // const [orphanage, setOrphange] = useState([]);

  // useEffect(()=>{
  //   fetchOrphanages();
  // })

  const fetchOrphanages = async () => {
    console.log("fecting data... ")
    setIsLoading(true);
    const { data: orphanages, error } = await supabase
    .from('accounts')
    .select('*');
    
    setIsLoading(true);
    console.log("fecting completed ",orphanages)

  if (error) {
    console.error('Error fetching orphanages:', error.message);
    return [];
  }

  // orphanages is now a list of objects
  console.log("orphanages:",orphanages)
  return orphanages;
};

  const orphanages = [
    {
      id: 1,
      name: "Abhayadhama Orphanage",
      description: "Providing care and education to underprivileged children since 1995.",
      address: "Whitefield Post, Bengaluru 560066",
      phone: "+91 9876543210",
    },
    {
      id: 2,
      name: "Hope Children Home",
      description: "A safe haven for children providing love, care, and quality education.",
      address: "Koramangala, Bengaluru 560034",
      phone: "+91 8765432109",
    },
    {
      id: 3,
      name: "new",
      description: "A safe haven for children providing love, care, and quality education.",
      address: "Koramangala, Bengaluru 560034",
      phone: "+91 8765432109",
    }
  ];

  const filteredOrphanages = orphanages.filter((o) =>
    o.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    o.address.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if(loading){
    return(
      <h1>Loading orphanages...</h1>
    )
  }

  return (
   
    <div className={styles.orphanagesPage}>
      <Header userType="donor" />

      <div className={styles.container}>
        <h2 className={styles.title}>Orphanages Near You</h2>
        <p className={styles.subtitle}>
          Explore orphanages around your area and contribute to their needs.
        </p>

        {/* Search Bar */}
        <input
          type="text"
          placeholder="Search orphanages by name or location..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className={styles.searchBar}
        />

        <div className={styles.grid}>
          {filteredOrphanages.length > 0 ? (
            filteredOrphanages.map((orphanage) => (
              <div key={orphanage.id} className={styles.card}>
                <h3>{orphanage.name}</h3>
                <p>{orphanage.description}</p>
                <div className={styles.contact}>
                  <div className={styles.contactItem}>
                    <MapPin size={14} />
                    <span>{orphanage.address}</span>
                  </div>
                  <div className={styles.contactItem}>
                    <Phone size={14} />
                    <span>{orphanage.phone}</span>
                  </div>
                </div>
                <Link to={`/orphanage/${orphanage.id}`} className={styles.btn}>
                  Donate Now <ChevronRight size={16} />
                </Link>
              </div>
            ))
          ) : (
            <p>No orphanages found.</p>
          )}
        </div>
      </div>

      {/* Footer */}
      <footer className={styles.footer}>
        <div className={styles.container}>
          <div className={styles.footerContent}>
            <span>OrphanCare Network © {new Date().getFullYear()}</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Orphanages;
