import React, { useState, useEffect } from "react";

const PaymentModal = ({ isOpen, onClose, amount, onSuccess }) => {
  const [name, setName] = useState("");
  const [card, setCard] = useState("");
  const [cvv, setCvv] = useState("");

  useEffect(() => {
    if (!isOpen) {
      setName(""); setCard(""); setCvv("");
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handlePay = () => {
    if (!name || !card || !cvv) {
      alert("Please fill all payment fields");
      return;
    }
    // Simulate payment success
    setTimeout(() => {
      onSuccess();
      onClose();
    }, 600);
  };

  return (
    <div className="modal-backdrop">
      <div className="modal">
        <h3>Payment - ${amount.toFixed(2)}</h3>
        <input placeholder="Name on card" value={name} onChange={(e) => setName(e.target.value)} />
        <input placeholder="Card number" value={card} onChange={(e) => setCard(e.target.value)} />
        <input placeholder="CVV" value={cvv} onChange={(e) => setCvv(e.target.value)} />
        <div className="modal-actions">
          <button onClick={handlePay} className="pay-btn">Pay ${amount.toFixed(2)}</button>
          <button onClick={onClose} className="cancel-btn">Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default PaymentModal;
