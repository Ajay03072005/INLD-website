import React, { useState } from 'react';
import '../styles/JoinPage.css';
import { FaUsers, FaVoteYea, FaHandHoldingHeart, FaGraduationCap } from 'react-icons/fa';
import { submitRegistration } from '../utils/api';

const JoinPage = () => {
  const [formTitle, setFormTitle] = useState('Volunteer Registration Form');
  const [selectedCategory, setSelectedCategory] = useState('Ground Operations');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    age: '',
    address: '',
    constituency: '',
    profession: '',
    skills: '',
    category: 'Ground Operations',
    agreeTerms: false,
    receiveUpdates: false
  });

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};

    if (!formData.firstName.trim()) newErrors.firstName = 'First name is required';
    if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^\+?[\d\s-()]+$/.test(formData.phone)) {
      newErrors.phone = 'Phone number is invalid';
    }
    if (!formData.address.trim()) newErrors.address = 'Address is required';
    if (!formData.constituency) newErrors.constituency = 'Constituency is required';
    if (!formData.agreeTerms) newErrors.agreeTerms = 'You must agree to terms and conditions';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));

    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleCardClick = (title) => {
    const titles = {
      'Ground Operations': 'Ground Operations Registration Form',
      'Party Membership': 'Party Membership Registration Form',
      'Support & Advocacy': 'Supporter Registration Form',
      'Youth Initiatives': 'Youth Wing Registration Form'
    };
    setFormTitle(titles[title]);
    setSelectedCategory(title);
    setFormData(prev => ({ ...prev, category: title }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      setSubmitMessage('Please fix the errors above');
      return;
    }

    setIsSubmitting(true);
    setSubmitMessage('');

    try {
  
      const result = await submitRegistration(formData);
      
      if (result.success) {
        setSubmitMessage('Registration successful! You will receive a confirmation email shortly.');
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          age: '',
          address: '',
          constituency: '',
          profession: '',
          skills: '',
          category: 'Ground Operations',
          agreeTerms: false,
          receiveUpdates: false
        });
      } else {
        setSubmitMessage(result.message || 'Registration failed. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitMessage('Network error. Please check your connection and try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="join-container">
      <div className="join-header">
        <h1 className="join-title">Join the Movement</h1>
        <p className="join-subtitle">
          Be part of the change you want to see. Join thousands of citizens working towards a better India through INLD's vision of inclusive development.
        </p>
      </div>
      <div className="join-cards">
        <div 
          className={`join-card ${selectedCategory === 'Ground Operations' ? 'selected' : ''}`} 
          onClick={() => handleCardClick('Ground Operations')}
        >
          <div className="icon-container">
            <FaUsers className="card-icon" />
          </div>
          <h3>Ground Operations</h3>
          <p>Join our ground operations and community programs</p>
        </div>
        <div 
          className={`join-card ${selectedCategory === 'Party Membership' ? 'selected' : ''}`} 
          onClick={() => handleCardClick('Party Membership')}
        >
          <div className="icon-container">
            <FaVoteYea className="card-icon" />
          </div>
          <h3>Party Membership</h3>
          <p>Become an official party member with voting rights</p>
        </div>
        <div 
          className={`join-card ${selectedCategory === 'Support & Advocacy' ? 'selected' : ''}`} 
          onClick={() => handleCardClick('Support & Advocacy')}
        >
          <div className="icon-container">
            <FaHandHoldingHeart className="card-icon" />
          </div>
          <h3>Support & Advocacy</h3>
          <p>Show support through donations and advocacy</p>
        </div>
        <div 
          className={`join-card ${selectedCategory === 'Youth Initiatives' ? 'selected' : ''}`} 
          onClick={() => handleCardClick('Youth Initiatives')}
        >
          <div className="icon-container">
            <FaGraduationCap className="card-icon" />
          </div>
          <h3>Youth Initiatives</h3>
          <p>Join our youth initiatives and leadership programs</p>
        </div>
      </div>

      <form className="join-form" onSubmit={handleSubmit}>
        <h2 className="form-title">{formTitle}</h2>
        
        {submitMessage && (
          <div className={`message ${submitMessage.includes('successful') ? 'success' : 'error'}`}>
            {submitMessage}
          </div>
        )}
        
        <div className="form-group">
          <label>First Name *</label>
          <input 
            type="text" 
            name="firstName"
            value={formData.firstName}
            onChange={handleInputChange}
            placeholder="Enter your first name" 
            required 
            className={errors.firstName ? 'error' : ''}
          />
          {errors.firstName && <span className="error-text">{errors.firstName}</span>}
        </div>

        <div className="form-group">
          <label>Last Name *</label>
          <input 
            type="text" 
            name="lastName"
            value={formData.lastName}
            onChange={handleInputChange}
            placeholder="Enter your last name" 
            required 
            className={errors.lastName ? 'error' : ''}
          />
          {errors.lastName && <span className="error-text">{errors.lastName}</span>}
        </div>

        <div className="form-group">
          <label>Email Address *</label>
          <input 
            type="email" 
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="your.email@example.com" 
            required 
            className={errors.email ? 'error' : ''}
          />
          {errors.email && <span className="error-text">{errors.email}</span>}
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Phone Number *</label>
            <input 
              type="tel" 
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              placeholder="+91 9876543210" 
              required 
              className={errors.phone ? 'error' : ''}
            />
            {errors.phone && <span className="error-text">{errors.phone}</span>}
          </div>
          <div className="form-group">
            <label>Age</label>
            <input 
              type="number" 
              name="age"
              value={formData.age}
              onChange={handleInputChange}
              placeholder="25" 
              min="18"
              max="100"
            />
          </div>
        </div>

        <div className="form-group">
          <label>Address *</label>
          <input 
            type="text" 
            name="address"
            value={formData.address}
            onChange={handleInputChange}
            placeholder="Complete address with city, state, PIN" 
            required 
            className={errors.address ? 'error' : ''}
          />
          {errors.address && <span className="error-text">{errors.address}</span>}
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Constituency *</label>
            <select 
              name="constituency"
              value={formData.constituency}
              onChange={handleInputChange}
              required
              className={errors.constituency ? 'error' : ''}
            >
              <option value="">Select your constituency</option>
              <option value="Adampur">Adampur</option>
              <option value="Ambala Cantt">Ambala Cantt</option>
              <option value="Ambala City">Ambala City</option>
              <option value="Assandh">Assandh</option>
              <option value="Ateli">Ateli</option>
              <option value="Badkhal">Badkhal</option>
              <option value="Badshahpur">Badshahpur</option>
              <option value="Bahadurgarh">Bahadurgarh</option>
              <option value="Baroda">Baroda</option>
              <option value="Bawal">Bawal</option>
              <option value="Beri">Beri</option>
              <option value="Bhiwani">Bhiwani</option>
              <option value="Ellenabad">Ellenabad</option>
              <option value="Faridabad">Faridabad</option>
              <option value="Faridabad NIT">Faridabad NIT</option>
              <option value="Fatehabad">Fatehabad</option>
              <option value="Ferozepur Jhirka">Ferozepur Jhirka</option>
              <option value="Ganaur">Ganaur</option>
              <option value="Garhi Sampla-Kiloi">Garhi Sampla-Kiloi</option>
              <option value="Gharaunda">Gharaunda</option>
              <option value="Gohana">Gohana</option>
              <option value="Gurgaon">Gurgaon</option>
              <option value="Hansi">Hansi</option>
              <option value="Hisar">Hisar</option>
              <option value="Indri">Indri</option>
              <option value="Israna">Israna</option>
              <option value="Jagadhri">Jagadhri</option>
              <option value="Jind">Jind</option>
              <option value="Julana">Julana</option>
              <option value="Kalanaur">Kalanaur</option>
              <option value="Kalayat">Kalayat</option>
              <option value="Kalka">Kalka</option>
              <option value="Karnal">Karnal</option>
              <option value="Kosli">Kosli</option>
              <option value="Ladwa">Ladwa</option>
              <option value="Loharu">Loharu</option>
              <option value="Mahendragarh">Mahendragarh</option>
              <option value="Meham">Meham</option>
              <option value="Mewla Maharajpur">Mewla Maharajpur</option>
              <option value="Narnaul">Narnaul</option>
              <option value="Narnaund">Narnaund</option>
              <option value="Narwana">Narwana</option>
              <option value="Nilokheri">Nilokheri</option>
              <option value="Nuh">Nuh</option>
              <option value="Panchkula">Panchkula</option>
              <option value="Panipat City">Panipat City</option>
              <option value="Panipat Rural">Panipat Rural</option>
              <option value="Pehowa">Pehowa</option>
              <option value="Pundri">Pundri</option>
              <option value="Punhana">Punhana</option>
              <option value="Radaur">Radaur</option>
              <option value="Rania">Rania</option>
              <option value="Rewari">Rewari</option>
              <option value="Rohtak">Rohtak</option>
              <option value="Safidon">Safidon</option>
              <option value="Samalkha">Samalkha</option>
              <option value="Sampla">Sampla</option>
              <option value="Saraswati">Saraswati</option>
              <option value="Shahbad">Shahbad</option>
              <option value="Sirsa">Sirsa</option>
              <option value="Sohna">Sohna</option>
              <option value="Sonipat">Sonipat</option>
              <option value="Taraori">Taraori</option>
              <option value="Thanesar">Thanesar</option>
              <option value="Tigaon">Tigaon</option>
              <option value="Tosham">Tosham</option>
              <option value="Uchana Kalan">Uchana Kalan</option>
              <option value="Yamunanagar">Yamunanagar</option>
            </select>
            {errors.constituency && <span className="error-text">{errors.constituency}</span>}
          </div>

          <div className="form-group">
            <label>Profession</label>
            <input 
              type="text" 
              name="profession"
              value={formData.profession}
              onChange={handleInputChange}
              placeholder="Your occupation" 
            />
          </div>
        </div>

        <div className="form-group">
          <label>Skills & Interests</label>
          <input 
            type="text" 
            name="skills"
            value={formData.skills}
            onChange={handleInputChange}
            placeholder="What skills can you contribute? (e.g., organizing, social media, teaching)" 
          />
        </div>

        <div className="checkbox-group">
          <label>
            <input 
              type="checkbox" 
              name="agreeTerms"
              checked={formData.agreeTerms}
              onChange={handleInputChange}
              required 
            />
            I agree to the terms and conditions and privacy policy *
          </label>
          {errors.agreeTerms && <span className="error-text">{errors.agreeTerms}</span>}
        </div>

        <div className="checkbox-group">
          <label>
            <input 
              type="checkbox" 
              name="receiveUpdates"
              checked={formData.receiveUpdates}
              onChange={handleInputChange}
            />
            I want to receive updates about INLD activities and events
          </label>
        </div>

        <button 
          type="submit" 
          className="submit-btn"
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Submitting...' : 'Complete Registration'}
        </button>
      </form>

      <div className="next-steps">
        <h2>What happens next?</h2>
        <div className="steps-container">
          <div className="step">
            <div className="step-number">1</div>
            <p>You'll receive a confirmation email within 24 hours</p>
          </div>
          <div className="step">
            <div className="step-number">2</div>
            <p>Local coordinator will contact you for orientation</p>
          </div>
          <div className="step">
            <div className="step-number">3</div>
            <p>Start participating in local activities and programs</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JoinPage;
