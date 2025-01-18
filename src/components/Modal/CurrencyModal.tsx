/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import "./CurrencyModal.scss";

interface CurrencyModalProps {
  isOpen: boolean;
  onClose: () => void;
  onChange: (value: { currency: string; language: string }) => void;
  value: { currency: string; language: string };
}

const currencies = [
  { code: "USD", symbol: "$", name: "US Dollar" },
  { code: "EUR", symbol: "€", name: "Euro" },
  { code: "BDT", symbol: "৳", name: "Bangladeshi Taka" },
];

const languages = [
  { code: "en", name: "English" },
  { code: "es", name: "Spanish" },
  { code: "bn", name: "Bangla" },
];

export const CurrencyModal: React.FC<CurrencyModalProps> = ({
  isOpen,
  onClose,
  onChange: handleChange,
  value,
}) => {
  if (!isOpen) return null;

  const handleCurrencySelect = (currency: string) => {
    handleChange({ ...value, currency });
  };

  const handleLanguageSelect = (language: string) => {
    handleChange({ ...value, language });
  };

  return (
    <div className="currency-modal-overlay" onClick={onClose}>
      <div
        className="currency-modal"
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the modal
      >
        <div className="currency-modal__header">
          <h3>Settings</h3>
          <button className="currency-modal__close" onClick={onClose}>
            &times;
          </button>
        </div>
        <div className="currency-modal__content">
          <div className="currency-modal__section">
            <h4>Select Currency</h4>
            {currencies.map((currency) => (
              <div
                key={currency.code}
                className={`currency-option ${
                  value.currency === currency.code ? "selected" : ""
                }`}
                onClick={() => handleCurrencySelect(currency.code)}
              >
                <span className="currency-symbol">{currency.symbol}</span>
                <span className="currency-name">{currency.name}</span>
              </div>
            ))}
          </div>

          <div className="currency-modal__section">
            <h4>Select Language</h4>
            {languages.map((lang) => (
              <div
                key={lang.code}
                className={`language-option ${
                  value.language === lang.name ? "selected" : ""
                }`}
                onClick={() => handleLanguageSelect(lang.name)}
              >
                <span className="language-name">{lang.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
