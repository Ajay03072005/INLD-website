import React from 'react';
import '../styles/ManifestoPage.css';
import { FaCheckCircle, FaFilePdf } from 'react-icons/fa';

const ManifestoPage = () => {
  return (
    <div className="manifesto-page">
      <div className="manifesto-banner">
        <div className="banner-content">
          <h1>INLD Manifesto</h1>
          <p>Our Vision & Promises for Haryana</p>
        </div>
      </div>
      
      <div className="manifesto-container">
        <div className="manifesto-intro">
          <div className="intro-content">
            <h2>Our Manifesto</h2>
            <p>
              The Indian National Lok Dal (INLD) presents a comprehensive roadmap for a prosperous, 
              equitable and progressive Haryana. Our manifesto is based on extensive consultations 
              with citizens across all segments of society.
            </p>
          </div>
          <div className="download-section">
            <div className="pdf-icon">
              <FaFilePdf />
            </div>
            <button className="download-pdf">Download PDF</button>
          </div>
        </div>
        
        <div className="manifesto-highlights">
          <h2>Key Highlights</h2>
          <div className="highlights-grid">
            <div className="highlight-card">
              <div className="highlight-icon agriculture"></div>
              <h3>Agriculture</h3>
              <ul>
                <li><FaCheckCircle className="check-icon" /> Legal guarantee for Minimum Support Price</li>
                <li><FaCheckCircle className="check-icon" /> Waiver of farm loans up to ₹2 lakhs</li>
                <li><FaCheckCircle className="check-icon" /> Free electricity for agricultural use</li>
                <li><FaCheckCircle className="check-icon" /> Modern farming equipment subsidies</li>
              </ul>
            </div>
            
            <div className="highlight-card">
              <div className="highlight-icon education"></div>
              <h3>Education</h3>
              <ul>
                <li><FaCheckCircle className="check-icon" /> Free education up to graduation</li>
                <li><FaCheckCircle className="check-icon" /> New universities in each division</li>
                <li><FaCheckCircle className="check-icon" /> Modernization of government schools</li>
                <li><FaCheckCircle className="check-icon" /> Scholarships for higher studies</li>
              </ul>
            </div>
            
            <div className="highlight-card">
              <div className="highlight-icon employment"></div>
              <h3>Employment</h3>
              <ul>
                <li><FaCheckCircle className="check-icon" /> 75% reservation for local youth in private sector</li>
                <li><FaCheckCircle className="check-icon" /> 2 lakh government jobs within first year</li>
                <li><FaCheckCircle className="check-icon" /> Skill development centers in all districts</li>
                <li><FaCheckCircle className="check-icon" /> Unemployment allowance for graduates</li>
              </ul>
            </div>
            
            <div className="highlight-card">
              <div className="highlight-icon healthcare"></div>
              <h3>Healthcare</h3>
              <ul>
                <li><FaCheckCircle className="check-icon" /> Free healthcare services for all</li>
                <li><FaCheckCircle className="check-icon" /> Medical insurance cover up to ₹10 lakhs</li>
                <li><FaCheckCircle className="check-icon" /> New medical colleges and hospitals</li>
                <li><FaCheckCircle className="check-icon" /> Mobile medical units for rural areas</li>
              </ul>
            </div>
            
            <div className="highlight-card">
              <div className="highlight-icon women"></div>
              <h3>Women Empowerment</h3>
              <ul>
                <li><FaCheckCircle className="check-icon" /> 35% reservation in government jobs</li>
                <li><FaCheckCircle className="check-icon" /> Free public transportation for women</li>
                <li><FaCheckCircle className="check-icon" /> Interest-free loans for women entrepreneurs</li>
                <li><FaCheckCircle className="check-icon" /> Special women police stations</li>
              </ul>
            </div>
            
            <div className="highlight-card">
              <div className="highlight-icon infrastructure"></div>
              <h3>Infrastructure</h3>
              <ul>
                <li><FaCheckCircle className="check-icon" /> All-weather roads to every village</li>
                <li><FaCheckCircle className="check-icon" /> Smart city development in all districts</li>
                <li><FaCheckCircle className="check-icon" /> 24/7 electricity supply</li>
                <li><FaCheckCircle className="check-icon" /> Clean drinking water for all</li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="manifesto-vision">
          <h2>Our Vision for Haryana</h2>
          <div className="vision-content">
            <div className="vision-image"></div>
            <div className="vision-text">
              <p>
                The Indian National Lok Dal envisions a prosperous, equitable and modern Haryana that honors its 
                rich cultural heritage while embracing progress. We are committed to:
              </p>
              <ul>
                <li>Transparent and corruption-free governance</li>
                <li>Equal opportunities for all sections of society</li>
                <li>Sustainable agricultural practices and farmer welfare</li>
                <li>Quality education and healthcare accessible to all</li>
                <li>Women's safety and empowerment</li>
                <li>Creating a robust infrastructure for future growth</li>
              </ul>
              <p>
                We pledge to work tirelessly to transform Haryana into a model state where every citizen 
                has the opportunity to prosper and live with dignity.
              </p>
            </div>
          </div>
        </div>
        
        <div className="join-movement">
          <h2>Join Our Movement</h2>
          <p>Together, we can build a better Haryana for all. Join us in our mission.</p>
          <div className="join-buttons">
            <button className="volunteer-btn">Become a Volunteer</button>
            <button className="donate-btn">Donate</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManifestoPage;
