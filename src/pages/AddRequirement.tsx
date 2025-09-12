// src/pages/AddRequirement.tsx
import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styles from "../styles/AddRequirement.module.css";

const AddRequirement: React.FC = () => {
  const { category } = useParams<{ category: string }>();
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [unit, setUnit] = useState("kgs");
  const [selectedCategory, setSelectedCategory] = useState(category || "groceries");

  const handleSave = () => {
    if (!name || !quantity) {
      alert("Please fill all fields!");
      return;
    }

    // ✅ Save requirement in localStorage (simple persistence)
    const stored = JSON.parse(localStorage.getItem("requirements") || "[]");
    const newRequirement = {
      name,
      quantity,
      unit,
      category: selectedCategory,
    };
    localStorage.setItem("requirements", JSON.stringify([...stored, newRequirement]));

    // ✅ Go back to dashboard
    navigate("/orphanage/dashboard");
  };

  return (
    <div className={styles.addRequirement}>
      <h2>Add Requirement</h2>
      <div className={styles.formCard}>
        {/* Name */}
        <div className={styles.formGroup}>
          <label>Name:</label>
          <input
            type="text"
            value={name}
            placeholder="e.g., Rice"
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        {/* Quantity */}
        <div className={styles.formGroup}>
          <label>Quantity:</label>
          <div className={styles.quantityRow}>
            <input
              type="number"
              value={quantity}
              placeholder="10"
              onChange={(e) => setQuantity(e.target.value)}
            />
            <select value={unit} onChange={(e) => setUnit(e.target.value)}>
              <option value="kgs">kgs</option>
              <option value="litres">litres</option>
              <option value="pcs">pcs</option>
            </select>
          </div>
        </div>

        {/* Category */}
        <div className={styles.formGroup}>
          <label>Category:</label>
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            <option value="groceries">Groceries</option>
            <option value="stationary">Stationary</option>
            <option value="bedding">Bedding</option>
            <option value="food">Food</option>
            <option value="general">General</option>
          </select>
        </div>

        {/* Buttons */}
        <div className={styles.buttonRow}>
          <button className={styles.cancelBtn} onClick={() => navigate(-1)}>
            Cancel
          </button>
          <button className={styles.saveBtn} onClick={handleSave}>
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddRequirement;