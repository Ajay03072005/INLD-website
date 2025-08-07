import React, { useState, useMemo } from "react";
import { FaFacebookF, FaTwitter, FaYoutube, FaSearch } from "react-icons/fa";
import { IoFilter } from "react-icons/io5";
import "../styles/Leadership.css";

// --- Data for the cards ---
const cardData = [
  {
    id: 1,
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Om_Prakash_Chautala.jpg/512px-Om_Prakash_Chautala.jpg',
    name: 'Chaudhary Om Prakash Chautala',
    experience: '50+ years',
    role: 'Party Patron & Former Chief Minister',
    description: 'Founder of INLD in 1999 and former Chief Minister of Haryana (1999-2005). A veteran politician with over five decades of experience in public service, known for his dedication to farmers welfare and rural development.',
    education: 'Graduate in Political Science',
    district: 'Sirsa',
    constituency: 'Sirsa (SC)',
    achievements: [
      'Founder and Patron of INLD',
      'Former Chief Minister of Haryana (1999-2005)',
      'Former Member of Parliament',
      'Pioneer of agricultural reforms in Haryana',
      'Advocate for farmers right for over 5 decades',
    ],
    connect: {
      twitter: '@AbhayChautala',
      facebook: 'Facebook',
      email: 'Email'
    }
  },
  {
    id: 2,
    imageUrl: 'https://haryanament.com/wp-content/uploads/2023/12/dushyantchautalaharyanament.jpg',
    name: 'Dushyant Chautala',
    experience: '15+ years',
    role: 'Deputy Chief Minister, Haryana',
    description: 'Young and dynamic leader who became the youngest Deputy Chief Minister of Haryana. Son of Ajay Singh Chautala and great-grandson of former Deputy Prime Minister Chaudhary Devi Lal, carrying forward the family legacy of public service.',
    education: 'B.Tech from NIT Kurukshetra',
    district: 'Hisar',
    constituency: 'Hisar',
    achievements: [
      'Youngest Deputy Chief Minister of Haryana',
      'Leader of Jannayak Janta Party (JJP)',
      'Former Member of Parliament from Hisar',
      'Champion of youth empowerment',
      'Sports and industrial development advocate',
    ],
    connect: {
      twitter: '@SunainaINLD',
      facebook: 'Facebook',
      email: 'Email'
    }
  },
  {
    id: 3,
    imageUrl: 'https://akm-img-a-in.tosshub.com/aajtak/images/story/202405/66330e02a64a4-abhay-singh-chautala-025233551-16x9.jpg?size=948:533',
    name: 'Abhay Singh Chautala',
    experience: '25+ years',
    role: 'Former Leader of Opposition',
    description: 'Veteran politician and son of Om Prakash Chautala. Has served as Member of Parliament and Leader of Opposition in Haryana Assembly. Known for his legislative skills and commitment to democratic values.',
    education: 'Masters in Political Science',
    district: 'Kurukshetra',
    constituency: 'Kurukshetra',
    achievements: [
      'Former Leader of Opposition, Haryana',
      'Former Member of Parliament (Lok Sabha)',
      'Senior INLD leader',
      'Parliamentary expert and debater',
      'Advocate for democratic institutions',
    ],
    connect: {
      twitter: '@DushyantSChau',
      facebook: 'Facebook',
      email: 'Email'
    }
  },
  {
    id: 4,
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/c/c6/Chaudhary_Devi_Lal_stamp_(cropped).jpg',
    name: 'Chaudhary Devi Lal',
    experience: 'Lifetime achievement',
    role: 'Founding Inspiration (Late)',
    description: 'Former Deputy Prime Minister of India and Chief Minister of Haryana. Though no longer with us, his ideology and commitment to farmers and rural development continues to inspire INLDs vision and policies.',
    education: 'Graduate',
    district: 'Rohtak',
    constituency: 'Rohtak',
    achievements: [
      'Former Deputy Prime Minister of India',
      'Former Chief Minister of Haryana (twice)',
      'Founder of modern Haryana politics',
      'Champion of farmers and rural development',
      'Inspiration for INLDs founding principles',
    ],
    connect: {
      twitter: '@NainaSChautala',
      facebook: 'Facebook',
      email: 'Email'
    }
  },
];

// --- Static lists for filters ---
const allDistricts = [
  'Ambala', 'Bhiwani', 'Charkhi Dadri', 'Faridabad', 'Fatehabad', 
  'Gurugram (Gurgaon)', 'Hisar', 'Jhajjar', 'Jind', 'Kaithal', 'Karnal', 
  'Kurukshetra', 'Mahendragarh', 'Nuh (Mewat)', 'Palwal', 'Panchkula', 
  'Panipat', 'Rewari', 'Rohtak', 'Sirsa', 'Sonipat', 'Yamunanagar'
];

const allConstituencies = [
  'Ambala (SC)', 'Kurukshetra', 'Sirsa (SC)', 'Hisar', 'Karnal', 
  'Sonipat', 'Rohtak', 'Bhiwani–Mahendragarh', 'Gurgaon (Gurugram)', 'Faridabad'
];

// --- SVG Icons for the Cards ---
const CalendarIcon = () => ( <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg> );
const TwitterIcon = () => ( <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg> );
const FacebookIcon = () => ( <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg> );
const EmailIcon = () => ( <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon"><rect x="2" y="4" width="20" height="16" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg> );

// --- Card Component ---
const Card = ({ data, index }) => {
  const isOdd = index % 2 !== 0;
  return (
    <div className={`profile-card ${isOdd ? 'is-odd' : ''}`}>
      <div className="card-image-container">
        <img 
          src={data.imageUrl} 
          alt={`Profile of ${data.name}`} 
          className="profile-image" 
          onError={(e) => { 
            e.target.onerror = null; 
            e.target.src = 'https://placehold.co/400x600/ccc/FFFFFF?text=Image+Not+Found'; 
          }} 
        />
        {data.constituency && <span className="image-badge">{data.constituency}</span>}
      </div>
      <div className="card-content">
        <div className="header">
          <h1>{data.name}</h1>
          <div className="experience-info">
            <CalendarIcon />
            <span>{data.experience}</span>
          </div>
        </div>
        <p className="role">{data.role}</p>
        <p className="description">{data.description}</p>
        <div className="info-section">
          <h2>Education</h2>
          <p>{data.education}</p>
        </div>
        {data.district && (
          <div className="info-section">
            <h2>District</h2>
            <p>{data.district}</p>
          </div>
        )}
        <div className="info-section">
          <h2>Key Achievements</h2>
          <ul>
            {data.achievements.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="info-section">
          <h2>Connect</h2>
          <div className="connect-links">
            <a href="https://twitter.com/inldofficial" target="_blank" rel="noopener noreferrer" aria-label="Twitter"><TwitterIcon /> {data.connect.twitter}</a>
            <a href="https://facebook.com/inldofficial" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><FacebookIcon /> {data.connect.facebook}</a>
            <a href="mailto:info@inld.org" aria-label="Email"><EmailIcon /> {data.connect.email}</a>
          </div>
        </div>
      </div>
    </div>
  );
};

const Leadership = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [districtFilter, setDistrictFilter] = useState('');
  const [constituencyFilter, setConstituencyFilter] = useState('');
  const [showFilters, setShowFilters] = useState(false);

  // Filter the data based on search term and filters
  const filteredData = useMemo(() => {
    return cardData.filter(card => {
      const nameMatch = card.name.toLowerCase().includes(searchTerm.toLowerCase());
      const districtMatch = districtFilter ? card.district === districtFilter : true;
      const constituencyMatch = constituencyFilter ? card.constituency === constituencyFilter : true;
      return nameMatch && districtMatch && constituencyMatch;
    });
  }, [searchTerm, districtFilter, constituencyFilter]);

  return (
    <div className="leadership-page">
      <div className="leadership-container">
        {/* Hero Section */}
        <div className="leadership-header">
          <h1>Our Leadership</h1>
          <p>
            Meet the leaders who have shaped INLD's journey and continue to work for the
            development of Haryana and the welfare of its people.
          </p>

          {/* Search and Filter Section */}
          <div className="search-filter-section">
            <div className="search-bar-container">
              <FaSearch className="search-icon" />
              <input
                type="text"
                placeholder="Search for a leader..."
                className="search-input"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <button 
                className="filter-toggle-btn"
                onClick={() => setShowFilters(!showFilters)}
                aria-label="Toggle filters"
              >
                <IoFilter /> Filters
              </button>
            </div>
            
            {showFilters && (
              <div className="filters-dropdown">
                <div className="filter-group">
                  <label htmlFor="district-filter">Filter by District:</label>
                  <select 
                    id="district-filter"
                    className="filter-select"
                    value={districtFilter}
                    onChange={(e) => setDistrictFilter(e.target.value)}
                  >
                    <option value="">All Districts</option>
                    {allDistricts.map((district) => (
                      <option key={district} value={district}>
                        {district}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="filter-group">
                  <label htmlFor="constituency-filter">Filter by Constituency:</label>
                  <select 
                    id="constituency-filter"
                    className="filter-select"
                    value={constituencyFilter}
                    onChange={(e) => setConstituencyFilter(e.target.value)}
                  >
                    <option value="">All Constituencies</option>
                    {allConstituencies.map((constituency) => (
                      <option key={constituency} value={constituency}>
                        {constituency}
                      </option>
                    ))}
                  </select>
                </div>
                {(districtFilter || constituencyFilter) && (
                  <button 
                    className="clear-filters-btn"
                    onClick={() => {
                      setDistrictFilter('');
                      setConstituencyFilter('');
                    }}
                  >
                    Clear Filters
                  </button>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Leaders Section */}
        <section className="hero-section-wrapper">
          <div className="cards-grid">
            {filteredData.length > 0 ? (
              filteredData.map((card, index) => (
                <Card key={card.id} data={card} index={index} />
              ))
            ) : (
              <div className="no-results">
                <p>No leaders found matching your search criteria.</p>
                <button 
                  className="reset-search-btn"
                  onClick={() => {
                    setSearchTerm('');
                    setDistrictFilter('');
                    setConstituencyFilter('');
                  }}
                >
                  Reset Search
                </button>
              </div>
            )}
          </div>
        </section>

        {/* Chautala Legacy Section */}
        <div className="legacy-section">
          <h2>The Chautala Legacy</h2>
          <p>
            The Indian National Lok Dal carries forward the rich political legacy of the Chautala family, 
            which has been at the forefront of Haryana politics for over five decades. 
            From Chaudhary Devi Lal's vision of rural development to the current generation's 
            focus on modernization and youth empowerment, the family has consistently 
            championed the cause of farmers and rural communities.
          </p>
          <div className="legacy-features">
            <div className="legacy-item">
              <div className="legacy-icon-circle">🌾</div>
              <h4>Agricultural Heritage</h4>
              <p>Deep roots in farming community with firsthand understanding of agricultural challenges.</p>
            </div>
            <div className="legacy-item">
              <div className="legacy-icon-circle">🏛️</div>
              <h4>Political Experience</h4>
              <p>Decades of experience in governance at state and national levels.</p>
            </div>
            <div className="legacy-item">
              <div className="legacy-icon-circle">👥</div>
              <h4>People's Connect</h4>
              <p>Strong grassroots connection with the people of Haryana across all communities.</p>
            </div>
          </div>
        </div>

        {/* Party Organization Section */}
        <div className="organization-section">
          <h2>Party Organization</h2>
          <div className="organization-grid">
            <div className="org-card">
              <div className="org-icon">👤</div>
              <h4>Party President</h4>
              <p>Overall leadership and strategic direction</p>
            </div>
            <div className="org-card">
              <div className="org-icon">👥</div>
              <h4>Working Committee</h4>
              <p>Policy formulation and decision making</p>
            </div>
            <div className="org-card">
              <div className="org-icon">📅</div>
              <h4>District Units</h4>
              <p>Local organization and ground operations</p>
            </div>
            <div className="org-card">
              <div className="org-icon">🎯</div>
              <h4>Youth Wing</h4>
              <p>Future leaders and fresh perspectives</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Leadership;
