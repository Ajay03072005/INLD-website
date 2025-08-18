import React, { useState } from 'react';
import { 
  FaHeart, 
  FaCreditCard, 
  FaPaypal, 
  FaUniversity, 
  FaMobile,
  FaShieldAlt,
  FaCheck,
  FaHandHoldingHeart,
  FaUsers,
  FaGlobeAmericas,
  FaChartLine
} from 'react-icons/fa';
import '../styles/DonatePage.css';

const DonatePage = () => {
  const [donationAmount, setDonationAmount] = useState('');
  const [customAmount, setCustomAmount] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('card');
  const [donorInfo, setDonorInfo] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    zipCode: ''
  });

  const presetAmounts = [100, 500, 1000, 2500, 5000, 10000];

  const handleAmountSelect = (amount) => {
    setDonationAmount(amount);
    setCustomAmount('');
  };

  const handleCustomAmount = (value) => {
    setCustomAmount(value);
    setDonationAmount('');
  };

  const handleInputChange = (field, value) => {
    setDonorInfo(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const finalAmount = donationAmount || customAmount;
    
    if (!finalAmount || finalAmount <= 0) {
      alert('Please select or enter a valid donation amount');
      return;
    }

    console.log('Donation submission:', {
      amount: finalAmount,
      paymentMethod,
      donorInfo
    });
    
    alert(`Thank you for your donation of ₹${finalAmount}! Redirecting to payment...`);
  };

  const currentAmount = donationAmount || customAmount;

  return (
    <div className="donate-page">
      {/* Hero Section */}
      <div className="donate-hero">
        <div className="hero-content">
          <FaHandHoldingHeart className="hero-icon" />
          <h1>Support Our Cause</h1>
          <p>Your donation helps us build a stronger, more prosperous India for everyone</p>
        </div>
      </div>

      <div className="donate-container">
        {/* Impact Stats */}
        <div className="impact-stats">
          <div className="stat-item">
            <FaUsers className="stat-icon" />
            <div className="stat-content">
              <h3>50,000+</h3>
              <p>Lives Impacted</p>
            </div>
          </div>
          <div className="stat-item">
            <FaGlobeAmericas className="stat-icon" />
            <div className="stat-content">
              <h3>25+</h3>
              <p>States Reached</p>
            </div>
          </div>
          <div className="stat-item">
            <FaChartLine className="stat-icon" />
            <div className="stat-content">
              <h3>95%</h3>
              <p>Fund Utilization</p>
            </div>
          </div>
        </div>

        <div className="donation-content">
          {/* Donation Form */}
          <div className="donation-form-section">
            <div className="form-header">
              <h2>Make a Donation</h2>
              <p>Choose your contribution amount and help us make a difference</p>
            </div>

            <form onSubmit={handleSubmit} className="donation-form">
              {/* Amount Selection */}
              <div className="amount-section">
                <h3>Select Amount (₹)</h3>
                <div className="preset-amounts">
                  {presetAmounts.map(amount => (
                    <button
                      key={amount}
                      type="button"
                      className={`amount-btn ${donationAmount === amount ? 'active' : ''}`}
                      onClick={() => handleAmountSelect(amount)}
                    >
                      ₹{amount.toLocaleString()}
                    </button>
                  ))}
                </div>
                
                <div className="custom-amount">
                  <label>Or enter custom amount:</label>
                  <input
                    type="number"
                    placeholder="Enter amount"
                    value={customAmount}
                    onChange={(e) => handleCustomAmount(e.target.value)}
                    min="1"
                  />
                </div>

                {currentAmount && (
                  <div className="amount-summary">
                    <FaHeart className="heart-icon" />
                    <span>Your donation: ₹{parseFloat(currentAmount).toLocaleString()}</span>
                  </div>
                )}
              </div>

              {/* Payment Method */}
              <div className="payment-section">
                <h3>Payment Method</h3>
                <div className="payment-methods">
                  <div 
                    className={`payment-option ${paymentMethod === 'card' ? 'active' : ''}`}
                    onClick={() => setPaymentMethod('card')}
                  >
                    <FaCreditCard className="payment-icon" />
                    <span>Credit/Debit Card</span>
                  </div>
                  <div 
                    className={`payment-option ${paymentMethod === 'upi' ? 'active' : ''}`}
                    onClick={() => setPaymentMethod('upi')}
                  >
                    <FaMobile className="payment-icon" />
                    <span>UPI</span>
                  </div>
                  <div 
                    className={`payment-option ${paymentMethod === 'netbanking' ? 'active' : ''}`}
                    onClick={() => setPaymentMethod('netbanking')}
                  >
                    <FaUniversity className="payment-icon" />
                    <span>Net Banking</span>
                  </div>
                </div>
              </div>

              {/* Donor Information */}
              <div className="donor-info-section">
                <h3>Donor Information</h3>
                <div className="info-grid">
                  <div className="info-row">
                    <input
                      type="text"
                      placeholder="First Name *"
                      value={donorInfo.firstName}
                      onChange={(e) => handleInputChange('firstName', e.target.value)}
                      required
                    />
                    <input
                      type="text"
                      placeholder="Last Name *"
                      value={donorInfo.lastName}
                      onChange={(e) => handleInputChange('lastName', e.target.value)}
                      required
                    />
                  </div>
                  <div className="info-row">
                    <input
                      type="email"
                      placeholder="Email Address *"
                      value={donorInfo.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      required
                    />
                    <input
                      type="tel"
                      placeholder="Phone Number"
                      value={donorInfo.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                    />
                  </div>
                  <input
                    type="text"
                    placeholder="Address"
                    value={donorInfo.address}
                    onChange={(e) => handleInputChange('address', e.target.value)}
                  />
                  <div className="info-row">
                    <input
                      type="text"
                      placeholder="City"
                      value={donorInfo.city}
                      onChange={(e) => handleInputChange('city', e.target.value)}
                    />
                    <input
                      type="text"
                      placeholder="State"
                      value={donorInfo.state}
                      onChange={(e) => handleInputChange('state', e.target.value)}
                    />
                    <input
                      type="text"
                      placeholder="ZIP Code"
                      value={donorInfo.zipCode}
                      onChange={(e) => handleInputChange('zipCode', e.target.value)}
                    />
                  </div>
                </div>
              </div>

              {/* Security Notice */}
              <div className="security-notice">
                <FaShieldAlt className="security-icon" />
                <div className="security-text">
                  <h4>Secure Donation</h4>
                  <p>Your donation is processed through secure, encrypted channels. All personal information is protected.</p>
                </div>
              </div>

              {/* Submit Button */}
              <button type="submit" className="donate-btn">
                <FaHeart className="btn-icon" />
                Donate ₹{currentAmount ? parseFloat(currentAmount).toLocaleString() : '0'}
              </button>
            </form>
          </div>

          {/* Impact Information */}
          <div className="impact-section">
            <h3>Your Impact</h3>
            <div className="impact-cards">
              <div className="impact-card">
                <div className="impact-amount">₹500</div>
                <div className="impact-text">Supports educational materials for 10 students</div>
              </div>
              <div className="impact-card">
                <div className="impact-amount">₹1,000</div>
                <div className="impact-text">Provides healthcare assistance to 5 families</div>
              </div>
              <div className="impact-card">
                <div className="impact-amount">₹2,500</div>
                <div className="impact-text">Funds community development projects</div>
              </div>
              <div className="impact-card">
                <div className="impact-amount">₹5,000</div>
                <div className="impact-text">Sponsors skill development training</div>
              </div>
            </div>

            {/* Trust Indicators */}
            <div className="trust-section">
              <h4>Why Donate With Us?</h4>
              <div className="trust-items">
                <div className="trust-item">
                  <FaCheck className="check-icon" />
                  <span>100% Transparent Fund Usage</span>
                </div>
                <div className="trust-item">
                  <FaCheck className="check-icon" />
                  <span>Tax-Deductible Donations</span>
                </div>
                <div className="trust-item">
                  <FaCheck className="check-icon" />
                  <span>Regular Progress Updates</span>
                </div>
                <div className="trust-item">
                  <FaCheck className="check-icon" />
                  <span>Secure Payment Processing</span>
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="donation-contact">
              <h4>Need Help?</h4>
              <p>Contact our donation support team:</p>
              <div className="contact-details">
                <p><strong>Phone:</strong> +91-11-1234-5678</p>
                <p><strong>Email:</strong> donations@inld.org</p>
                <p><strong>Hours:</strong> Mon-Fri, 9 AM - 6 PM</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DonatePage;
