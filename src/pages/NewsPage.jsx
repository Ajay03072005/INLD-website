import React, { useState, useEffect } from 'react';
import '../styles/NewsPage.css';
import { FaCalendarAlt, FaMapMarkerAlt, FaClock, FaTimes, FaUser, FaEnvelope, FaPhone, FaArrowRight } from 'react-icons/fa';
import { apiRequest, API_ENDPOINTS } from '../utils/api';

const NewsPage = () => {
  const [activeTab, setActiveTab] = useState('upcoming');
  const [selectedNews, setSelectedNews] = useState(null);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [showRegistrationForm, setShowRegistrationForm] = useState(false);
  const [selectedEventForRegistration, setSelectedEventForRegistration] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');
  const [registrationData, setRegistrationData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    eventId: '',
    eventTitle: '',
    specialRequirements: '',
    agreeTerms: false
  });
  const [errors, setErrors] = useState({});

  const events = [
    {
      id: 1,
      title: "INLD State-Wide Rally",
      date: "2025-08-15",
      time: "10:00 AM",
      location: "Rohtak, Haryana",
      description: "Join us for a massive state-wide rally addressing key issues affecting our state and discussing future initiatives.",
      image: "https://media.gettyimages.com/id/812068560/photo/ambala-india-indian-national-lok-dal-party-workers-during-the-protest-on-syl-issue-at-saddopur.jpg?s=612x612&w=0&k=20&c=-XHsJaB4QEFkjHzeC6SnS0-6KmRSpj0sduJbzmUnIVA=",
      type: "upcoming",
      fullDescription: `Join us for a historic state-wide rally that will address the key issues affecting our state and outline our vision for Haryana's future.

Event Highlights:
• Major policy announcements
• Interactive session with party leadership
• Public grievance redressal
• Cultural performances

Key Discussion Points:
1. Agricultural reforms and farmer welfare
2. Youth employment initiatives
3. Industrial development
4. Education system improvements
5. Healthcare accessibility

Schedule:
- 10:00 AM: Rally commencement
- 10:30 AM: Welcome address
- 11:00 AM: Main session
- 1:00 PM: Public interaction
- 2:00 PM: Cultural program

Venue Details:
• Location: New Exhibition Ground, Rohtak
• Seating capacity: 50,000
• Parking available
• Medical facilities on-site
• Refreshments provided

Transportation:
- Special buses from all districts
- Free shuttle service from major points in Rohtak
- Reserved parking for senior citizens`
    },
    {
      id: 2,
      title: "Farmer's Rights Conference",
      date: "2025-08-20",
      time: "11:30 AM",
      location: "Hisar, Haryana",
      description: "Discussion on agricultural policies and farmer welfare programs. Key party leaders will address current agricultural challenges.",
      image: "https://cdn.britannica.com/10/1610-050-C80C9901/Farmers-fields-Yamunanagar-India-Haryana.jpg",
      type: "upcoming",
      fullDescription: `A comprehensive conference focused on addressing the rights and challenges of farmers in Haryana. This event brings together agricultural experts, policy makers, and farmers to discuss sustainable solutions.

Conference Agenda:

Morning Session (11:30 AM - 1:30 PM):
• Inaugural address by party leadership
• Expert panel on agricultural policies
• Presentation on modern farming techniques
• Discussion on MSP and market reforms

Afternoon Session (2:30 PM - 4:30 PM):
• Farmer testimonials and experiences
• Technology in agriculture workshop
• Organic farming demonstration
• Financial support schemes overview

Key Topics:
1. Minimum Support Price reforms
2. Water conservation techniques
3. Organic farming promotion
4. Agricultural credit facilities
5. Modern farming technologies

Special Features:
- Live demonstration of farming equipment
- One-on-one consultation with experts
- Information kiosks for government schemes
- Free soil testing facility

Available Resources:
• Detailed policy documents
• Agricultural scheme brochures
• Expert consultation
• Network opportunities`
    },
    {
      id: 3,
      title: "Youth Leadership Summit",
      date: "2025-08-25",
      time: "2:00 PM",
      location: "Kurukshetra, Haryana",
      description: "Empowering the next generation of leaders. Join us for interactive sessions, leadership workshops, and networking opportunities.",
      image: "https://static.toiimg.com/thumb/msid-82079644,width-400,resizemode-4/82079644.jpg",
      type: "upcoming",
      fullDescription: `The Youth Leadership Summit is a transformative event designed to nurture and empower the next generation of leaders in Haryana. Join us for an inspiring day of learning, networking, and skill development.

Program Schedule:

2:00 PM - Opening Session:
• Inaugural speech by youth wing leadership
• Keynote address on leadership in modern India
• Interactive Q&A session

3:00 PM - Skill Development Workshops:
1. Public Speaking & Communication
2. Digital Leadership & Social Media
3. Community Organization
4. Project Management

4:00 PM - Breakout Sessions:
• Political Leadership Track
• Social Entrepreneurship Track
• Civic Engagement Track
• Technology & Innovation Track

5:00 PM - Networking & Mentorship:
• Speed mentoring with party leaders
• Peer networking sessions
• Project presentation opportunities

What You'll Gain:
- Leadership skill development
- Networking opportunities
- Mentorship connections
- Certificate of participation
- Project implementation support

Who Should Attend:
• Youth aged 18-35
• Student leaders
• Young professionals
• Social activists
• Aspiring politicians

Registration includes:
- Workshop materials
- Refreshments
- Networking dinner
- Resource kit`
    },
    {
      id: 4,
      title: "Women's Empowerment Conference",
      date: "2025-09-01",
      time: "11:00 AM",
      location: "Panipat, Haryana",
      description: "A platform to discuss women's rights, education, and economic empowerment. Special focus on rural women's development.",
      image: "https://cdn.pixabay.com/photo/2017/09/21/19/06/woman-2773007_1280.jpg",
      type: "upcoming",
      fullDescription: `Join us for an impactful conference focused on women's empowerment and development in Haryana. This event brings together leaders, activists, and community members to discuss and implement initiatives for women's advancement.

Conference Program:

Morning Session (11:00 AM - 1:00 PM):
• Welcome and inauguration
• Keynote address on women's rights
• Panel discussion on education opportunities
• Presentation on economic empowerment schemes

Afternoon Session (2:00 PM - 4:00 PM):
• Skill development workshops
• Healthcare awareness program
• Legal rights seminar
• Entrepreneurship guidance

Key Focus Areas:
1. Education and skill development
2. Economic empowerment
3. Healthcare access
4. Legal awareness
5. Political participation

Special Features:
- Success stories showcase
- One-on-one counseling
- Self-defense workshop
- Career guidance

Resources Available:
• Government scheme information
• Legal aid support
• Skill development registration
• Healthcare consultation
• Business mentorship

Target Participants:
- Rural women
- Women entrepreneurs
- College students
- Self-help group members
- Community leaders`
    },
    {
      id: 5,
      title: "Rural Development Forum",
      date: "2025-09-10",
      time: "10:30 AM",
      location: "Karnal, Haryana",
      description: "Comprehensive discussion on rural infrastructure, agriculture, and sustainable development initiatives.",
      image: "https://th.bing.com/th?q=Rural+Development+HD+Images&w=120&h=120&c=1&rs=1&qlt=70&r=0&o=7&cb=1&dpr=1.1&pid=InlineBlock&rm=3&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1&mw=247",
      type: "upcoming",
      fullDescription: `A comprehensive forum addressing rural development challenges and opportunities in Haryana. This event brings together stakeholders to discuss and plan sustainable rural development initiatives.

Forum Schedule:

Morning Session (10:30 AM - 1:00 PM):
• Inaugural address
• Rural infrastructure development plans
• Agricultural modernization strategies
• Village digitization initiatives

Afternoon Session (2:00 PM - 4:30 PM):
• Smart village presentation
• Sustainable farming methods
• Rural entrepreneurship
• Clean energy solutions

Key Discussion Topics:
1. Rural Infrastructure
   - Road connectivity
   - Water supply
   - Electricity distribution
   - Internet connectivity

2. Agricultural Development
   - Modern farming techniques
   - Irrigation systems
   - Storage facilities
   - Market linkages

3. Social Development
   - Education facilities
   - Healthcare centers
   - Skill development
   - Women empowerment

4. Economic Initiatives
   - Rural entrepreneurship
   - Cottage industries
   - Self-help groups
   - Agricultural startups

Expected Outcomes:
• Comprehensive rural development blueprint
• Implementation timeline
• Resource allocation plan
• Monitoring framework

Participating Stakeholders:
- Government officials
- Agricultural experts
- Rural development specialists
- Village leaders
- NGO representatives`
    }
  ];

  const news = [
    {
      id: 1,
      title: "INLD Announces New Youth Employment Initiative",
      date: "2025-08-01",
      category: "Policy",
      description: "INLD launches comprehensive program to boost youth employment and skill development across Haryana.",
      fullDescription: `The Indian National Lok Dal (INLD) today announced a groundbreaking youth employment initiative aimed at transforming the employment landscape in Haryana. The comprehensive program includes:

Key Features:
• Skill Development Centers in every district
• Industry partnerships for job placements
• Entrepreneurship support programs
• Technical training workshops

Implementation Plan:
1. Phase 1 (2025): Setting up skill development centers
2. Phase 2 (2026): Industry collaboration and placement cells
3. Phase 3 (2026-27): Entrepreneurship incubation centers

Expected Impact:
- Creation of 100,000+ job opportunities
- Skill development for 50,000 youth annually
- Support for 5,000 new startups

The initiative will focus on sectors including IT, agriculture, manufacturing, and service industries. Special emphasis will be placed on rural youth and women empowerment through dedicated training programs.`,
      image: "https://pbs.twimg.com/media/F63uw1-aEAAN3cE?format=jpg&name=360x360"
    },
    {
      id: 2,
      title: "Party Leaders Meet to Discuss State Development",
      date: "2025-07-28",
      category: "Meeting",
      description: "Senior INLD leaders convene to formulate strategies for state development and public welfare programs.",
      fullDescription: `A crucial meeting of INLD's senior leadership was held today to discuss comprehensive state development strategies and public welfare initiatives. The meeting focused on several key areas:

Development Priorities:
• Infrastructure modernization
• Agricultural sector reforms
• Industrial growth corridors
• Urban-rural development balance

Key Decisions:
1. Formation of district-level development committees
2. Launch of new rural infrastructure projects
3. Expansion of irrigation networks
4. Modernization of public transport system

Welfare Initiatives:
- Enhanced healthcare accessibility
- Educational scholarships
- Farmer support programs
- Senior citizen welfare schemes

The meeting concluded with the formation of specialized task forces to oversee the implementation of these initiatives across different regions of Haryana.`,
      image: "https://media.gettyimages.com/id/469803948/photo/new-delhi-india-samajwadi-party-chief-mulayam-singh-yadav-rashtriya-janata-dal-chief-lalu.jpg?s=612x612&w=0&k=20&c=yfcys7R1LFfGesThKjtVqjAxNGrmkMhuDGcE5_iCmNQ="
    },
    {
      id: 3,
      title: "INLD's Green Energy Vision for Haryana",
      date: "2025-07-25",
      category: "Environment",
      description: "Party unveils comprehensive plan for sustainable energy development and environmental conservation in Haryana.",
      fullDescription: `INLD today unveiled an ambitious green energy vision for Haryana, setting forth a comprehensive roadmap for sustainable development and environmental conservation.

Vision 2030 Goals:
• 50% renewable energy in total power mix
• Carbon neutrality in major cities
• 100% electric public transport
• Green building standards implementation

Implementation Strategy:
1. Solar Power Expansion
   - Installation of solar panels in all government buildings
   - Solar farming incentives for agricultural lands
   - Residential solar program subsidies

2. Wind Energy Development
   - Wind farm development in suitable regions
   - Public-private partnerships for wind energy
   - Grid infrastructure upgradation

3. Environmental Conservation
   - Urban forest development
   - Water body restoration
   - Biodiversity protection programs

4. Green Technology Innovation
   - Research & Development centers
   - Green technology parks
   - Startup incubation programs

Investment and Timeline:
- Total investment: ₹15,000 crores
- Phase 1 (2025-2027): Infrastructure development
- Phase 2 (2027-2029): Technology implementation
- Phase 3 (2029-2030): Scale-up and optimization

Expected Outcomes:
- 30% reduction in carbon emissions
- 100,000 new green jobs
- 40% reduction in power costs
- Improved air and water quality`,
      image: "https://cdn.pixabay.com/photo/2021/07/21/08/57/wind-turbines-6482722_1280.jpg"
    },
    {
      id: 4,
      title: "Educational Reform Package Proposed",
      date: "2025-07-20",
      category: "Education",
      description: "INLD presents comprehensive education reform package focusing on rural schools and higher education accessibility.",
      image: "https://cdn.pixabay.com/photo/2016/11/14/05/15/academic-1822682_1280.jpg"
    },
    {
      id: 5,
      title: "Healthcare Infrastructure Expansion Plan",
      date: "2025-07-15",
      category: "Healthcare",
      description: "New initiative announced to strengthen rural healthcare infrastructure and improve medical facilities across the state.",
      image: "https://cdn.pixabay.com/photo/2016/11/06/10/35/hospital-1802679_1280.jpg"
    },
    {
      id: 6,
      title: "Water Conservation Project Launch",
      date: "2025-07-10",
      category: "Infrastructure",
      description: "INLD initiates major water conservation project to address water scarcity in drought-prone regions of Haryana.",
      fullDescription: `INLD has launched a comprehensive water conservation project aimed at addressing water scarcity in drought-prone regions of Haryana. This initiative represents a significant step towards sustainable water management and agricultural stability.

Project Components:

1. Water Infrastructure Development
   • Construction of new water reservoirs
   • Renovation of existing water bodies
   • Installation of modern irrigation systems
   • Groundwater recharge systems

2. Smart Water Management
   • Real-time water monitoring systems
   • Automated distribution networks
   • Water quality testing facilities
   • Smart metering implementation

3. Agricultural Water Efficiency
   • Drip irrigation promotion
   • Crop pattern optimization
   • Rainwater harvesting structures
   • Farmer training programs

4. Urban Water Conservation
   • Water recycling plants
   • Storm water management
   • Leak detection systems
   • Water-efficient building codes

Implementation Schedule:
- Phase 1 (2025): Infrastructure development
- Phase 2 (2026): Technology integration
- Phase 3 (2027): Community programs

Expected Benefits:
• 40% reduction in water wastage
• Enhanced agricultural productivity
• Improved groundwater levels
• Year-round water availability
• Support for 100,000 farmers

Budget Allocation: ₹5,000 crores
Timeline: 2025-2027
Target Areas: 12 drought-prone districts`,
      image: "https://cdn.pixabay.com/photo/2016/11/14/04/36/drought-1822502_1280.jpg"
    }
  ];

  // Registration form functions
  const validateRegistrationForm = () => {
    const newErrors = {};

    if (!registrationData.firstName.trim()) newErrors.firstName = 'First name is required';
    if (!registrationData.lastName.trim()) newErrors.lastName = 'Last name is required';
    if (!registrationData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(registrationData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!registrationData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^\+?[\d\s-()]+$/.test(registrationData.phone)) {
      newErrors.phone = 'Phone number is invalid';
    }
    if (!registrationData.address.trim()) newErrors.address = 'Address is required';
    if (!registrationData.agreeTerms) newErrors.agreeTerms = 'You must agree to terms and conditions';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleRegistrationInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setRegistrationData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleRegisterClick = (event) => {
    setSelectedEventForRegistration(event);
    setRegistrationData(prev => ({
      ...prev,
      eventId: event.id,
      eventTitle: event.title
    }));
    setShowRegistrationForm(true);
    setSubmitMessage('');
    setErrors({});
  };

  const closeRegistrationForm = () => {
    setShowRegistrationForm(false);
    setSelectedEventForRegistration(null);
    setRegistrationData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      address: '',
      eventId: '',
      eventTitle: '',
      specialRequirements: '',
      agreeTerms: false
    });
    setErrors({});
    setSubmitMessage('');
  };

  const handleRegistrationSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateRegistrationForm()) {
      setSubmitMessage('Please fix the errors above');
      return;
    }

    setIsSubmitting(true);
    setSubmitMessage('');

    try {
      const result = await apiRequest(API_ENDPOINTS.EVENTS, {
        method: 'POST',
        body: JSON.stringify({
          ...registrationData,
          timestamp: new Date().toISOString(),
          source: 'website',
          type: 'event_registration'
        }),
      });
      
      if (result.success) {
        setSubmitMessage('Registration successful! You will receive a confirmation email shortly.');
        setTimeout(() => {
          closeRegistrationForm();
        }, 2000);
      } else {
        setSubmitMessage(result.message || 'Registration failed. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting registration:', error);
      setSubmitMessage('Network error. Please check your connection and try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="news-page">
      <div className="news-header">
        <h1>News & Events</h1>
        <p>Stay updated with INLD's latest announcements, press releases, and upcoming events across Haryana</p>
      </div>

      <div className="tabs">
        <button 
          className={`tab ${activeTab === 'upcoming' ? 'active' : ''}`}
          onClick={() => setActiveTab('upcoming')}
        >
          Upcoming Events
        </button>
        <button 
          className={`tab ${activeTab === 'news' ? 'active' : ''}`}
          onClick={() => setActiveTab('news')}
        >
          Latest News
        </button>
      </div>

      {activeTab === 'upcoming' ? (
        <div className="events-grid">
          {events.map(event => (
            <div key={event.id} className="event-card">
              <div className="event-image">
                <img src={event.image} alt={event.title} />
              </div>
              <div className="event-content">
                <h3>{event.title}</h3>
                <div className="event-meta">
                  <div className="meta-item">
                    <FaCalendarAlt className="meta-icon" />
                    {new Date(event.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </div>
                  <div className="meta-item">
                    <FaClock className="meta-icon" />
                    {event.time}
                  </div>
                  <div className="meta-item">
                    <FaMapMarkerAlt className="meta-icon" />
                    {event.location}
                  </div>
                </div>
                <p className="event-description">{event.description}</p>
                <div className="event-buttons">
                  <button 
                    className="register-btn"
                    onClick={() => handleRegisterClick(event)}
                  >
                    Register Now
                  </button>
                  <button 
                    className="read-more-btn"
                    onClick={() => setSelectedEvent(event)}
                  >
                    Read More <FaArrowRight style={{ marginLeft: '8px' }} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="news-grid">
          {news.map(item => (
            <div key={item.id} className="news-card">
              <div className="news-image">
                <img src={item.image} alt={item.title} />
                <span className="news-category">{item.category}</span>
              </div>
              <div className="news-content">
                <h3>{item.title}</h3>
                <div className="news-meta">
                  <FaCalendarAlt className="meta-icon" />
                  {new Date(item.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </div>
                <p className="news-description">{item.description}</p>
                <button 
                  className="read-more-btn"
                  onClick={() => setSelectedNews(item)}
                >
                  Read More <FaArrowRight style={{ marginLeft: '8px' }} />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {selectedEvent && (
        <div className="news-modal-overlay" onClick={() => setSelectedEvent(null)}>
          <div className="news-modal" onClick={e => e.stopPropagation()}>
            <button className="close-modal" onClick={() => setSelectedEvent(null)}>
              <FaTimes />
            </button>
            <div className="modal-content">
              <div className="modal-image">
                <img src={selectedEvent.image} alt={selectedEvent.title} />
              </div>
              <h2>{selectedEvent.title}</h2>
              <div className="modal-meta">
                <div className="meta-item">
                  <FaCalendarAlt className="meta-icon" />
                  {new Date(selectedEvent.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </div>
                <div className="meta-item">
                  <FaClock className="meta-icon" />
                  {selectedEvent.time}
                </div>
                <div className="meta-item">
                  <FaMapMarkerAlt className="meta-icon" />
                  {selectedEvent.location}
                </div>
              </div>
              <div className="modal-description">
                {selectedEvent.fullDescription ? (
                  <div className="full-description">
                    {selectedEvent.fullDescription.split('\n').map((paragraph, index) => (
                      <p key={index}>{paragraph}</p>
                    ))}
                  </div>
                ) : (
                  <p>{selectedEvent.description}</p>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {selectedNews && (
        <div className="news-modal-overlay" onClick={() => setSelectedNews(null)}>
          <div className="news-modal" onClick={e => e.stopPropagation()}>
            <button className="close-modal" onClick={() => setSelectedNews(null)}>
              <FaTimes />
            </button>
            <div className="modal-content">
              <div className="modal-image">
                <img src={selectedNews.image} alt={selectedNews.title} />
                <span className="news-category">{selectedNews.category}</span>
              </div>
              <h2>{selectedNews.title}</h2>
              <div className="modal-meta">
                <FaCalendarAlt className="meta-icon" />
                {new Date(selectedNews.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </div>
              <div className="modal-description">
                {selectedNews.fullDescription ? (
                  <div className="full-description">
                    {selectedNews.fullDescription.split('\n').map((paragraph, index) => (
                      <p key={index}>{paragraph}</p>
                    ))}
                  </div>
                ) : (
                  <p>{selectedNews.description}</p>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Registration Form Modal */}
      {showRegistrationForm && (
        <div className="registration-modal-overlay" onClick={closeRegistrationForm}>
          <div className="registration-modal" onClick={e => e.stopPropagation()}>
            <button className="close-modal" onClick={closeRegistrationForm}>
              <FaTimes />
            </button>
            <div className="registration-content">
              <h2>Register for Event</h2>
              <h3>{selectedEventForRegistration?.title}</h3>
              <p className="event-details">
                <FaCalendarAlt /> {new Date(selectedEventForRegistration?.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })} | <FaClock /> {selectedEventForRegistration?.time} | <FaMapMarkerAlt /> {selectedEventForRegistration?.location}
              </p>

              {submitMessage && (
                <div className={`message ${submitMessage.includes('successful') ? 'success' : 'error'}`}>
                  {submitMessage}
                </div>
              )}

              <form onSubmit={handleRegistrationSubmit} className="registration-form">
                <div className="form-row">
                  <div className="form-group">
                    <label><FaUser /> First Name *</label>
                    <input
                      type="text"
                      name="firstName"
                      value={registrationData.firstName}
                      onChange={handleRegistrationInputChange}
                      placeholder="Enter your first name"
                      required
                      className={errors.firstName ? 'error' : ''}
                    />
                    {errors.firstName && <span className="error-text">{errors.firstName}</span>}
                  </div>
                  <div className="form-group">
                    <label><FaUser /> Last Name *</label>
                    <input
                      type="text"
                      name="lastName"
                      value={registrationData.lastName}
                      onChange={handleRegistrationInputChange}
                      placeholder="Enter your last name"
                      required
                      className={errors.lastName ? 'error' : ''}
                    />
                    {errors.lastName && <span className="error-text">{errors.lastName}</span>}
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label><FaEnvelope /> Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      value={registrationData.email}
                      onChange={handleRegistrationInputChange}
                      placeholder="your.email@example.com"
                      required
                      className={errors.email ? 'error' : ''}
                    />
                    {errors.email && <span className="error-text">{errors.email}</span>}
                  </div>
                  <div className="form-group">
                    <label><FaPhone /> Phone Number *</label>
                    <input
                      type="tel"
                      name="phone"
                      value={registrationData.phone}
                      onChange={handleRegistrationInputChange}
                      placeholder="+91 9876543210"
                      required
                      className={errors.phone ? 'error' : ''}
                    />
                    {errors.phone && <span className="error-text">{errors.phone}</span>}
                  </div>
                </div>

                <div className="form-group">
                  <label><FaMapMarkerAlt /> Address *</label>
                  <input
                    type="text"
                    name="address"
                    value={registrationData.address}
                    onChange={handleRegistrationInputChange}
                    placeholder="Complete address with city, state, PIN"
                    required
                    className={errors.address ? 'error' : ''}
                  />
                  {errors.address && <span className="error-text">{errors.address}</span>}
                </div>

                <div className="form-group">
                  <label>Special Requirements (Optional)</label>
                  <textarea
                    name="specialRequirements"
                    value={registrationData.specialRequirements}
                    onChange={handleRegistrationInputChange}
                    placeholder="Any special requirements or accessibility needs..."
                    rows="3"
                  />
                </div>

                <div className="checkbox-group">
                  <label>
                    <input
                      type="checkbox"
                      name="agreeTerms"
                      checked={registrationData.agreeTerms}
                      onChange={handleRegistrationInputChange}
                      required
                    />
                    I agree to the terms and conditions for event registration *
                  </label>
                  {errors.agreeTerms && <span className="error-text">{errors.agreeTerms}</span>}
                </div>

                <div className="form-buttons">
                  <button
                    type="button"
                    className="cancel-btn"
                    onClick={closeRegistrationForm}
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="submit-btn"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Registering...' : 'Complete Registration'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default NewsPage;
