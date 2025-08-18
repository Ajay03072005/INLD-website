import React from 'react';
import '../styles/About.css';
import { FaHistory, FaLandmark, FaHandshake, FaBullseye } from 'react-icons/fa';
import { GiSprout, GiPoliceBadge } from 'react-icons/gi';
import { MdAgriculture, MdHealthAndSafety, MdCastForEducation } from 'react-icons/md';
import { RiGovernmentLine } from 'react-icons/ri';

const About = () => {
  return (
    <div className="about-container">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="about-hero-content">
          <h1>About Indian National Lok Dal</h1>
          <p>Championing the voice of rural India and advocating for agricultural prosperity since 1999</p>
        </div>
      </section>

      {/* History Section */}
      <section className="about-section">
        <div className="section-header">
          <FaHistory className="section-icon" />
          <h2>Our History</h2>
        </div>
        <div className="section-content">
          <div className="section-text">
            <p>
              The Indian National Lok Dal (INLD) was founded in 1996, emerging from the legacy of Chaudhary Devi Lal, 
              who was a prominent farmer leader and former Deputy Prime Minister of India. The party officially came into 
              existence after the split of Janata Dal, with its roots deeply embedded in the agrarian movement of North India.
            </p>
            <p>
              Under the leadership of Om Prakash Chautala, INLD became a significant political force in Haryana, forming 
              governments and advocating for the rights of farmers, rural communities, and marginalized sections of society. 
              The party has maintained its position as a key regional player in Haryana politics for over two decades.
            </p>
            <p>
              INLD has consistently fought for rural development, agricultural reforms, and the preservation of regional 
              identity. Throughout its history, the party has remained committed to social justice, economic equality, 
              and the welfare of farmers, positioning itself as the voice of rural Haryana.
            </p>
          </div>
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h3>1996</h3>
                <p>Foundation of Indian National Lok Dal after the split from Janata Dal</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h3>1999-2005</h3>
                <p>First term as the ruling party in Haryana with Om Prakash Chautala as Chief Minister</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h3>2000-2014</h3>
                <p>Period of significant growth and expansion across Haryana</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h3>2019</h3>
                <p>Reorganization and renewed focus on farmer issues and rural development</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h3>2022-Present</h3>
                <p>New leadership and renewed vision for Haryana's comprehensive development</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="about-section vision-mission">
        <div className="section-header">
          <FaBullseye className="section-icon" />
          <h2>Vision & Mission</h2>
        </div>
        <div className="vision-mission-container">
          <div className="vision-mission-card">
            <h3>Our Vision</h3>
            <p>
              To create a prosperous, equitable, and self-reliant Haryana where farmers thrive, rural communities 
              flourish, and every citizen has access to quality education, healthcare, and economic opportunities.
            </p>
          </div>
          <div className="vision-mission-card">
            <h3>Our Mission</h3>
            <p>
              To advocate for policies that prioritize agricultural prosperity, rural development, and social justice 
              while preserving regional identity and cultural heritage. We strive to represent the voice of farmers and 
              working people in governance and policy-making.
            </p>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="about-section">
        <div className="section-header">
          <FaLandmark className="section-icon" />
          <h2>Our Core Values</h2>
        </div>
        <div className="values-grid">
          <div className="value-card">
            <div className="value-icon">
              <MdAgriculture />
            </div>
            <h3>Agricultural Prosperity</h3>
            <p>Championing farmer rights and sustainable agricultural practices</p>
          </div>
          <div className="value-card">
            <div className="value-icon">
              <GiSprout />
            </div>
            <h3>Rural Development</h3>
            <p>Focusing on infrastructure and economic opportunities in rural areas</p>
          </div>
          <div className="value-card">
            <div className="value-icon">
              <FaHandshake />
            </div>
            <h3>Social Justice</h3>
            <p>Ensuring equality and fairness for all sections of society</p>
          </div>
          <div className="value-card">
            <div className="value-icon">
              <MdCastForEducation />
            </div>
            <h3>Education for All</h3>
            <p>Promoting accessible and quality education across urban and rural areas</p>
          </div>
          <div className="value-card">
            <div className="value-icon">
              <GiPoliceBadge />
            </div>
            <h3>Integrity in Governance</h3>
            <p>Upholding transparency, accountability, and ethical leadership</p>
          </div>
          <div className="value-card">
            <div className="value-icon">
              <MdHealthAndSafety />
            </div>
            <h3>Healthcare Access</h3>
            <p>Working towards affordable and quality healthcare for all citizens</p>
          </div>
        </div>
      </section>

      {/* Key Policy Priorities Section */}
      <section className="about-section policy-section">
        <div className="section-header">
          <RiGovernmentLine className="section-icon" />
          <h2>Key Policy Priorities</h2>
        </div>
        <div className="policy-container">
          <div className="policy-list">
            <div className="policy-item">
              <h3>Agricultural Reforms</h3>
              <p>
                Advocating for fair Minimum Support Prices, modern farming techniques, farmer insurance, 
                and sustainable agricultural practices that protect both farmers' livelihoods and the environment.
              </p>
            </div>
            <div className="policy-item">
              <h3>Rural Infrastructure</h3>
              <p>
                Developing comprehensive road networks, irrigation systems, electricity distribution, and 
                digital connectivity in rural areas to bridge the urban-rural divide.
              </p>
            </div>
            <div className="policy-item">
              <h3>Education & Skill Development</h3>
              <p>
                Establishing quality educational institutions in rural areas, promoting vocational training, 
                and ensuring skill development programs that align with industry requirements.
              </p>
            </div>
            <div className="policy-item">
              <h3>Healthcare Accessibility</h3>
              <p>
                Building healthcare facilities in underserved areas, implementing affordable healthcare schemes, 
                and ensuring quality medical services for all citizens.
              </p>
            </div>
            <div className="policy-item">
              <h3>Youth Employment</h3>
              <p>
                Creating opportunities for youth through entrepreneurship programs, job creation initiatives, 
                and policies that encourage industrial growth and diversification.
              </p>
            </div>
            <div className="policy-item">
              <h3>Women Empowerment</h3>
              <p>
                Supporting women's education, economic independence, political participation, and safety through 
                targeted programs and policy interventions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="about-section achievements-section">
        <div className="section-header">
          <FaLandmark className="section-icon" />
          <h2>Key Achievements</h2>
        </div>
        <div className="achievements-container">
          <div className="achievement-card">
            <div className="achievement-number">25+</div>
            <h3>Years of Service</h3>
            <p>Dedicated to Haryana's development and the welfare of its people</p>
          </div>
          <div className="achievement-card">
            <div className="achievement-number">5+</div>
            <h3>Major Rural Development Programs</h3>
            <p>Implemented across Haryana's villages and towns</p>
          </div>
          <div className="achievement-card">
            <div className="achievement-number">100+</div>
            <h3>Farmer Support Initiatives</h3>
            <p>From irrigation projects to market linkages and subsidies</p>
          </div>
          <div className="achievement-card">
            <div className="achievement-number">50+</div>
            <h3>Educational Institutions</h3>
            <p>Established or supported in rural and underserved areas</p>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="about-cta">
        <h2>Join Us in Building a Better Haryana</h2>
        <p>
          Indian National Lok Dal welcomes all citizens who believe in our vision of a prosperous, 
          equitable, and self-reliant state. Together, we can create positive change and ensure a 
          bright future for generations to come.
        </p>
        <div className="cta-buttons">
          <a href="/join" className="cta-button primary">Become a Member</a>
          <a href="/contact" className="cta-button secondary">Get In Touch</a>
        </div>
      </section>
    </div>
  );
};

export default About;
