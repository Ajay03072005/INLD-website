import React, { useState } from 'react';
import '../styles/JoinPage.css';
import { FaUsers, FaVoteYea, FaHandHoldingHeart, FaGraduationCap } from 'react-icons/fa';

const JoinPage = () => {
  const [formTitle, setFormTitle] = useState('Volunteer Registration Form');

  const handleCardClick = (title) => {
    const titles = {
      'Ground Operations': 'Ground Operations Registration Form',
      'Party Membership': 'Party Membership Registration Form',
      'Support & Advocacy': 'Supporter Registration Form',
      'Youth Initiatives': 'Youth Wing Registration Form'
    };
    setFormTitle(titles[title]);
  };

  return (
    <div className="join-container">
      <h1> </h1><br></br>
      <br />

      <h1 className="join-title">Join the Movement</h1>
      <p className="join-subtitle">
        Be part of the change you want to see. Join thousands of citizens working towards a better India through INLD's vision of inclusive development.
      </p>
      <div className="join-cards">
        <div className="join-card" onClick={() => handleCardClick('Ground Operations')}>
          <div className="icon-container">
            <FaUsers className="card-icon" />
          </div>
          <h3>Ground Operations</h3>
          <p>Join our ground operations and community programs</p>
        </div>
        <div className="join-card" onClick={() => handleCardClick('Party Membership')}>
          <div className="icon-container">
            <FaVoteYea className="card-icon" />
          </div>
          <h3>Party Membership</h3>
          <p>Become an official party member with voting rights</p>
        </div>
        <div className="join-card" onClick={() => handleCardClick('Support & Advocacy')}>
          <div className="icon-container">
            <FaHandHoldingHeart className="card-icon" />
          </div>
          <h3>Support & Advocacy</h3>
          <p>Show support through donations and advocacy</p>
        </div>
        <div className="join-card" onClick={() => handleCardClick('Youth Initiatives')}>
          <div className="icon-container">
            <FaGraduationCap className="card-icon" />
          </div>
          <h3>Youth Initiatives</h3>
          <p>Join our youth initiatives and leadership programs</p>
        </div>
      </div>

      <form className="join-form">
        <h2 className="form-title">{formTitle}</h2>
        
        <div className="form-group">
          <label>First Name *</label>
          <input type="text" placeholder="Enter your first name" required />
        </div>

        <div className="form-group">
          <label>Last Name *</label>
          <input type="text" placeholder="Enter your last name" required />
        </div>

        <div className="form-group">
          <label>Email Address *</label>
          <input type="email" placeholder="your.email@example.com" required />
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Phone Number *</label>
            <input type="tel" placeholder="+91 9876543210" required />
          </div>
          <div className="form-group">
            <label>Age</label>
            <input type="number" placeholder="25" />
          </div>
        </div>

        <div className="form-group">
          <label>Address *</label>
          <input type="text" placeholder="Complete address with city, state, PIN" required />
        </div>

        <div className="form-row">
          <div className="form-group">
  <label>Constituency *</label>
  <select required>
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
</div>


          <div className="form-group">
            <label>Profession</label>
            <input type="text" placeholder="Your occupation" />
          </div>
        </div>

        <div className="form-group">
          <label>Skills & Interests</label>
          <input type="text" placeholder="What skills can you contribute? (e.g., organizing, social media, teaching)" />
        </div>

        <div className="checkbox-group">
          <label>
            <input type="checkbox" required />
            I agree to the terms and conditions and privacy policy
          </label>
        </div>

        <div className="checkbox-group">
          <label>
            <input type="checkbox" />
            I want to receive updates about INLD activities and events
          </label>
        </div>

        <button type="submit" className="submit-btn">Complete Registration</button>
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
