import React, { useState } from 'react';
import '../styles/PressReleasePage.css';
import { FaCalendarAlt, FaDownload, FaShare, FaSearch, FaFilter } from 'react-icons/fa';

const PressReleasePage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedYear, setSelectedYear] = useState('all');

  const pressReleases = [
    {
      id: 1,
      title: "INLD Announces Comprehensive Healthcare Reform Plan for Haryana",
      date: "2025-08-05",
      content: "Indian National Lok Dal today unveiled its ambitious healthcare reform plan that aims to provide quality healthcare services to every citizen of Haryana. The plan includes establishment of new medical colleges, upgrading existing healthcare infrastructure, and implementing universal health insurance coverage.",
      category: "Healthcare",
      downloadLink: "#",
      priority: "high"
    },
    {
      id: 2,
      title: "INLD Condemns Rising Unemployment in Haryana, Demands Immediate Action",
      date: "2025-08-03",
      content: "In response to the latest unemployment figures, INLD leaders have demanded immediate action from the state government. The party has proposed a comprehensive employment generation scheme that would create over 2 lakh jobs in the next two years.",
      category: "Employment",
      downloadLink: "#",
      priority: "high"
    },
    {
      id: 3,
      title: "INLD Supports Farmers in Their Fight for Fair MSP",
      date: "2025-08-01",
      content: "INLD stands firmly with the farmers of Haryana in their demand for fair Minimum Support Price (MSP) for their crops. The party has announced its full support to the ongoing farmers' movement and demanded the government to fulfill its promises.",
      category: "Agriculture",
      downloadLink: "#",
      priority: "medium"
    },
    {
      id: 4,
      title: "INLD Launches Women Safety Initiative Across Haryana",
      date: "2025-07-30",
      content: "Indian National Lok Dal has launched a comprehensive women safety initiative across all districts of Haryana. The initiative includes setting up help desks, increasing women police personnel, and creating awareness programs about women's rights.",
      category: "Women Safety",
      downloadLink: "#",
      priority: "high"
    },
    {
      id: 5,
      title: "INLD Questions Government's Smart City Project Implementation",
      date: "2025-07-28",
      content: "INLD has raised serious questions about the implementation of Smart City projects in Haryana. The party has demanded transparency in fund allocation and proper monitoring of the projects to ensure they benefit the common people.",
      category: "Infrastructure",
      downloadLink: "#",
      priority: "medium"
    },
    {
      id: 6,
      title: "INLD Demands Justice for Victims of Industrial Accidents",
      date: "2025-07-25",
      content: "Following recent industrial accidents in Haryana, INLD has demanded immediate justice for the victims and their families. The party has called for stricter implementation of industrial safety norms and better compensation for affected workers.",
      category: "Industrial Safety",
      downloadLink: "#",
      priority: "high"
    },
    {
      id: 7,
      title: "INLD Proposes Educational Reforms for Rural Schools",
      date: "2025-07-22",
      content: "Indian National Lok Dal has proposed comprehensive educational reforms specifically targeting rural schools in Haryana. The proposal includes teacher training programs, infrastructure development, and technology integration in rural education.",
      category: "Education",
      downloadLink: "#",
      priority: "medium"
    },
    {
      id: 8,
      title: "INLD Celebrates Foundation Day with Renewed Commitment",
      date: "2025-07-20",
      content: "On its foundation day, Indian National Lok Dal reaffirmed its commitment to the development of Haryana and welfare of its people. Party leaders outlined the vision for the next decade focusing on inclusive growth and social justice.",
      category: "Party News",
      downloadLink: "#",
      priority: "low"
    }
  ];

  const categories = ['All', 'Healthcare', 'Employment', 'Agriculture', 'Women Safety', 'Infrastructure', 'Industrial Safety', 'Education', 'Party News'];
  const years = ['all', '2025', '2024', '2023'];

  const filteredReleases = pressReleases.filter(release => {
    const matchesSearch = release.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         release.content.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesYear = selectedYear === 'all' || release.date.startsWith(selectedYear);
    return matchesSearch && matchesYear;
  });

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'high': return '#dc2626';
      case 'medium': return '#f59e0b';
      case 'low': return '#10b981';
      default: return '#64748b';
    }
  };

  return (
    <div className="press-release-page">
      <div className="press-hero">
        <div className="hero-content">
          <h1>Press Releases</h1>
          <p>Official Statements and Announcements from INLD</p>
        </div>
      </div>

      <div className="press-container">
        <div className="press-filters">
          <div className="search-section">
            <div className="search-box">
              <FaSearch className="search-icon" />
              <input
                type="text"
                placeholder="Search press releases..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
          
          <div className="filter-section">
            <FaFilter className="filter-icon" />
            <select 
              value={selectedYear} 
              onChange={(e) => setSelectedYear(e.target.value)}
              className="year-filter"
            >
              {years.map(year => (
                <option key={year} value={year}>
                  {year === 'all' ? 'All Years' : year}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="press-results">
          <h2>Latest Press Releases ({filteredReleases.length})</h2>
          
          <div className="press-list">
            {filteredReleases.map(release => (
              <article key={release.id} className="press-item">
                <div className="press-header">
                  <div className="press-meta">
                    <span className="press-date">
                      <FaCalendarAlt /> {formatDate(release.date)}
                    </span>
                    <span 
                      className="press-priority"
                      style={{ color: getPriorityColor(release.priority) }}
                    >
                      {release.priority.toUpperCase()}
                    </span>
                    <span className="press-category">{release.category}</span>
                  </div>
                  
                  <div className="press-actions">
                    <button className="action-btn share-btn">
                      <FaShare /> Share
                    </button>
                    <button className="action-btn download-btn">
                      <FaDownload /> Download PDF
                    </button>
                  </div>
                </div>
                
                <h3 className="press-title">{release.title}</h3>
                <p className="press-content">{release.content}</p>
                
                <div className="press-footer">
                  <button className="read-full-btn">Read Full Statement</button>
                </div>
              </article>
            ))}
          </div>

          {filteredReleases.length === 0 && (
            <div className="no-results">
              <h3>No press releases found</h3>
              <p>Try adjusting your search terms or filters</p>
            </div>
          )}
        </div>

        <div className="press-contact">
          <h3>Media Contact</h3>
          <div className="contact-info">
            <div className="contact-item">
              <strong>Press Secretary:</strong> INLD Media Team
            </div>
            <div className="contact-item">
              <strong>Phone:</strong> +91-11-2345-6789
            </div>
            <div className="contact-item">
              <strong>Email:</strong> media@inld.org.in
            </div>
            <div className="contact-item">
              <strong>Office Hours:</strong> Monday - Friday, 9:00 AM - 6:00 PM
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PressReleasePage;
