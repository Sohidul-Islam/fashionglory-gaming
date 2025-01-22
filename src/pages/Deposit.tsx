import React, { useState } from "react";
import { FaArrowLeft, FaSearch, FaHistory } from "react-icons/fa";
import "./Deposit.scss";

interface PaymentMethod {
  id: string;
  name: string;
  icon: string;
  minAmount: number;
  maxAmount: number;
  category?: string;
}

export const Deposit: React.FC = () => {
  const [selectedCountry, setSelectedCountry] = useState("Bangladesh");
  const [activeTab, setActiveTab] = useState("deposit");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const paymentMethods: PaymentMethod[] = [
    {
      id: "bkash",
      name: "bKash",
      icon: "/src/assets/bkash-logo.png",
      minAmount: 500,
      maxAmount: 50000,
      category: "mobile",
    },
    {
      id: "nagad",
      name: "Nagad",
      icon: "/src/assets/nagad-logo.png",
      minAmount: 500,
      maxAmount: 50000,
      category: "mobile",
    },
    {
      id: "rocket",
      name: "Rocket",
      icon: "/src/assets/rocket-logo.png",
      minAmount: 500,
      maxAmount: 30000,
      category: "mobile",
    },
    {
      id: "visa",
      name: "Visa Card",
      icon: "/src/assets/visa-logo.png",
      minAmount: 1000,
      maxAmount: 100000,
      category: "card",
    },
    {
      id: "mastercard",
      name: "Mastercard",
      icon: "/src/assets/mastercard-logo.png",
      minAmount: 1000,
      maxAmount: 100000,
      category: "card",
    },
  ];

  const filteredMethods = paymentMethods.filter((method) => {
    const matchesSearch = method.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const matchesCategory =
      selectedCategory === "all" || method.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="deposit-page">
      <div className="deposit-container">
        <div className="deposit-header">
          <button className="back-button">
            <FaArrowLeft />
          </button>
          <h1>Deposit</h1>
          <button className="history-button">
            <FaHistory />
            <span>History</span>
          </button>
        </div>

        <div className="deposit-tabs">
          <button
            className={`tab-button ${activeTab === "deposit" ? "active" : ""}`}
            onClick={() => setActiveTab("deposit")}
          >
            Deposit
          </button>
          <button
            className={`tab-button ${
              activeTab === "withdrawal" ? "active" : ""
            }`}
            onClick={() => setActiveTab("withdrawal")}
          >
            Withdrawal
          </button>
        </div>

        <div className="deposit-filters">
          <div className="search-box">
            <FaSearch className="search-icon" />
            <input
              type="text"
              placeholder="Search payment method..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <div className="category-filters">
            <button
              className={`category-btn ${
                selectedCategory === "all" ? "active" : ""
              }`}
              onClick={() => setSelectedCategory("all")}
            >
              All
            </button>
            <button
              className={`category-btn ${
                selectedCategory === "mobile" ? "active" : ""
              }`}
              onClick={() => setSelectedCategory("mobile")}
            >
              Mobile Banking
            </button>
            <button
              className={`category-btn ${
                selectedCategory === "card" ? "active" : ""
              }`}
              onClick={() => setSelectedCategory("card")}
            >
              Cards
            </button>
          </div>
        </div>

        <div className="country-selector">
          <label>Select a payment system to top up your account</label>
          <select
            value={selectedCountry}
            onChange={(e) => setSelectedCountry(e.target.value)}
          >
            <option value="Bangladesh">Bangladesh</option>
            <option value="India">India</option>
          </select>
        </div>

        <div className="payment-methods">
          {filteredMethods.map((method) => (
            <div key={method.id} className="payment-method-card">
              <div className="method-icon">
                <img src={method.icon} alt={method.name} />
              </div>
              <div className="method-info">
                <h3>{method.name}</h3>
                <div className="method-limits">
                  <p>Min: ৳{method.minAmount.toLocaleString()}</p>
                  <p>Max: ৳{method.maxAmount.toLocaleString()}</p>
                </div>
                <button className="deposit-btn">Deposit Now</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
