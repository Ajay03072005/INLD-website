import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/AdminDashboard.css';
import { 
  FaUsers, FaCalendarAlt, FaNewspaper, FaChartBar, FaCog, FaSignOutAlt,
  FaBell, FaSearch, FaUserPlus, FaEye, FaEdit, FaTrash, FaBars, FaTimes
} from 'react-icons/fa';
import { apiRequest, API_ENDPOINTS } from '../utils/api';
import EventForm from './EventForm';
import NewsForm from './NewsForm';

const initialNews = [ 
  { 
    id: 1, 
    title: 'INLD Announces New Agricultural Policy', 
    author: 'Admin', 
    date: 'Aug 5, 2025', 
    category: 'Policy', 
    status: 'Published', 
    views: 1245 
  }, 
  { 
    id: 2, 
    title: 'Youth Wing Membership Drive Success', 
    author: 'Admin', 
    date: 'Aug 3, 2025', 
    category: 'Youth', 
    status: 'Published', 
    views: 892 
  }, 
  { 
    id: 3, 
    title: 'Upcoming Rally Preparation Update', 
    author: 'Admin', 
    date: 'Aug 2, 2025', 
    category: 'Event', 
    status: 'Draft', 
    views: 0 
  } 
]; 

const initialEvents = [
  {
    id: 1,
    title: 'INLD State-Wide Rally',
    date: 'Aug 15, 2025',
    location: 'Rohtak, Haryana',
    registrations: 245,
    status: 'Active'
  },
  {
    id: 2,
    title: 'Youth Leadership Workshop',
    date: 'Aug 20, 2025',
    location: 'Gurgaon, Haryana',
    registrations: 89,
    status: 'Pending'
  },
  {
    id: 3,
    title: "Farmer's Meet",
    date: 'Aug 25, 2025',
    location: 'Hisar, Haryana',
    registrations: 156,
    status: 'Draft'
  }
];

const AdminDashboard = () => {
  // State and handlers
  const [eventsList, setEventsList] = useState(initialEvents);
  const [showEventModal, setShowEventModal] = useState(false);
  const [editingEvent, setEditingEvent] = useState(null);
  const [newsList, setNewsList] = useState(initialNews);
  const [showNewsModal, setShowNewsModal] = useState(false);
  const [editingNews, setEditingNews] = useState(null);
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('overview');
  const [dashboardData, setDashboardData] = useState({
    totalRegistrations: 248,
    totalEvents: 12,
    totalNews: 34,
    recentActivity: []
  });
  const [isLoading, setIsLoading] = useState(false);

  // Event modal handlers
  const openAddEventModal = () => { setEditingEvent(null); setShowEventModal(true); };
  const openEditEventModal = (event) => { setEditingEvent(event); setShowEventModal(true); };
  const closeEventModal = () => { setEditingEvent(null); setShowEventModal(false); };
  const handleEventSave = (eventData) => {
    if (editingEvent) {
      setEventsList(eventsList.map(e => e.id === editingEvent.id ? { ...eventData, id: editingEvent.id } : e));
    } else {
      setEventsList([...eventsList, { ...eventData, id: Date.now() }]);
    }
    closeEventModal();
  };
  const handleEventDelete = (id) => { setEventsList(eventsList.filter(e => e.id !== id)); };

  // News modal handlers
  const openAddNewsModal = () => { setEditingNews(null); setShowNewsModal(true); };
  const openEditNewsModal = (news) => { setEditingNews(news); setShowNewsModal(true); };
  const closeNewsModal = () => { setEditingNews(null); setShowNewsModal(false); };
  const handleNewsSave = (newsData) => {
    if (editingNews) {
      setNewsList(newsList.map(n => n.id === editingNews.id ? { ...newsData, id: editingNews.id } : n));
    } else {
      setNewsList([...newsList, { ...newsData, id: Date.now() }]);
    }
    closeNewsModal();
  };
  const handleNewsDelete = (id) => { setNewsList(newsList.filter(n => n.id !== id)); };

  // Sidebar and logout
  const sidebarItems = [
    { id: 'overview', label: 'Overview', icon: FaChartBar },
    { id: 'registrations', label: 'Registrations', icon: FaUsers },
    { id: 'events', label: 'Events', icon: FaCalendarAlt },
    { id: 'news', label: 'News', icon: FaNewspaper },
    { id: 'settings', label: 'Settings', icon: FaCog },
  ];
  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    localStorage.removeItem('adminRememberMe');
    navigate('/admin/login');
  };

  // Render functions
  const renderOverview = () => (
    <div className="overview-section">
      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-icon registrations"><FaUsers /></div>
          <div className="stat-content"><h3>{dashboardData.totalRegistrations}</h3><p>Total Registrations</p></div>
        </div>
        <div className="stat-card">
          <div className="stat-icon events"><FaCalendarAlt /></div>
          <div className="stat-content"><h3>{dashboardData.totalEvents}</h3><p>Active Events</p></div>
        </div>
        <div className="stat-card">
          <div className="stat-icon news"><FaNewspaper /></div>
          <div className="stat-content"><h3>{dashboardData.totalNews}</h3><p>News Articles</p></div>
        </div>
        <div className="stat-card">
          <div className="stat-icon activity"><FaBell /></div>
          <div className="stat-content"><h3>24</h3><p>Recent Activities</p></div>
        </div>
      </div>
    </div>
  );

  const renderRegistrations = () => (
    <div className="registrations-section">
      <div className="section-header">
        <h2>Registrations Management</h2>
        <button className="add-btn">
          <FaUserPlus /> Export Data
        </button>
      </div>
      <div className="dashboard-card">
        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Category</th>
                <th>Date</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>#001</td>
                <td>John Doe</td>
                <td>john@example.com</td>
                <td>+91-9876543210</td>
                <td>Volunteer</td>
                <td>Aug 5, 2025</td>
                <td><span className="event-status active">Active</span></td>
                <td>
                  <button className="action-btn view"><FaEye /></button>
                  <button className="action-btn edit"><FaEdit /></button>
                  <button className="action-btn delete"><FaTrash /></button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );

  const renderEvents = () => (
    <div className="events-section">
      <div className="section-header">
        <h2>Events Management</h2>
        <button className="add-btn" onClick={openAddEventModal}>
          <FaUserPlus /> Add New Event
        </button>
      </div>
      <div className="dashboard-grid">
        <div className="dashboard-card">
          <div className="card-header">
            <h3>All Events</h3>
          </div>
          <div className="table-container">
            <table>
              <thead>
                <tr>
                  <th>Event</th>
                  <th>Date</th>
                  <th>Location</th>
                  <th>Registrations</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {eventsList.map(event => (
                  <tr key={event.id}>
                    <td>{event.title}</td>
                    <td>{event.date}</td>
                    <td>{event.location}</td>
                    <td>{event.registrations}</td>
                    <td><span className={`event-status ${event.status.toLowerCase()}`}>{event.status}</span></td>
                    <td>
                      <button className="action-btn view"><FaEye /></button>
                      <button className="action-btn edit" onClick={() => openEditEventModal(event)}><FaEdit /></button>
                      <button className="action-btn delete" onClick={() => handleEventDelete(event.id)}><FaTrash /></button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      
      {/* Event Modal Popup */}
      {showEventModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h2>{editingEvent ? 'Edit Event' : 'Add New Event'}</h2>
            <EventForm
              initialData={editingEvent}
              onSave={handleEventSave}
              onCancel={closeEventModal}
            />
          </div>
        </div>
      )}
    </div>
  );

  const renderNews = () => (
    <div className="news-section">
      <div className="section-header">
        <h2>News Management</h2>
        <button className="add-btn" onClick={openAddNewsModal}>
          <FaUserPlus /> Add New Article
        </button>
      </div>

      <div className="dashboard-card">
        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>Title</th>
                <th>Author</th>
                <th>Date</th>
                <th>Category</th>
                <th>Status</th>
                <th>Views</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {newsList.map(news => (
                <tr key={news.id}>
                  <td>{news.title}</td>
                  <td>{news.author}</td>
                  <td>{news.date}</td>
                  <td>{news.category}</td>
                  <td><span className={`event-status ${news.status === 'Published' ? 'active' : 'draft'}`}>{news.status}</span></td>
                  <td>{news.views}</td>
                  <td>
                    <button className="action-btn view"><FaEye /></button>
                    <button className="action-btn edit" onClick={() => openEditNewsModal(news)}><FaEdit /></button>
                    <button className="action-btn delete" onClick={() => handleNewsDelete(news.id)}><FaTrash /></button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* News Modal Popup */}
      {showNewsModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h2>{editingNews ? 'Edit News Article' : 'Add News Article'}</h2>
            <NewsForm
              initialData={editingNews}
              onSave={handleNewsSave}
              onCancel={closeNewsModal}
            />
          </div>
        </div>
      )}
    </div>
  );

  const renderSettings = () => (
    <div className="settings-section">
      <div className="section-header">
        <h2>Settings</h2>
      </div>
      <div className="dashboard-card">
        <div className="card-header">
          <h3>General Settings</h3>
        </div>
        <div className="settings-form">
          <div className="form-group">
            <label>Site Title</label>
            <input type="text" defaultValue="INLD Official Website" />
          </div>
          <div className="form-group">
            <label>Site Description</label>
            <textarea defaultValue="Indian National Lok Dal - Working for the people"></textarea>
          </div>
          <div className="form-group">
            <label>Contact Email</label>
            <input type="email" defaultValue="info@inld.org" />
          </div>
          <div className="form-group">
            <label>Contact Phone</label>
            <input type="tel" defaultValue="+91-11-12345678" />
          </div>
          <button className="add-btn">Save Changes</button>
        </div>
      </div>
    </div>
  );

  const renderContent = () => {
    if (isLoading) {
      return (
        <div className="loading-container">
          <div className="spinner"></div>
          <p>Loading dashboard...</p>
        </div>
      );
    }

    switch (activeSection) {
      case 'overview':
        return renderOverview();
      case 'registrations':
        return renderRegistrations();
      case 'events':
        return renderEvents();
      case 'news':
        return renderNews();
      case 'settings':
        return renderSettings();
      default:
        return renderOverview();
    }
  };

  return (
    <div className="admin-dashboard">
      {/* Sidebar */}
      <div className={`sidebar ${sidebarOpen ? 'open' : ''}`}>
        <div className="sidebar-header">
          <div className="logo">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMiDBg0T6c-XNVLF5aYUQ5gtzxWtp9IKat-w&s" alt="INLD Logo" className="logo-img" />
            <div className="logo-text">
              <h2>INLD Admin</h2>
              <span>Indian National Lok Dal</span>
            </div>
          </div>
          <button 
            className="close-sidebar"
            onClick={() => setSidebarOpen(false)}
          >
            <FaTimes />
          </button>
        </div>

        <nav className="sidebar-nav">
          {sidebarItems.map(item => (
            <button
              key={item.id}
              className={`nav-item ${activeSection === item.id ? 'active' : ''}`}
              onClick={() => {
                setActiveSection(item.id);
                setSidebarOpen(false);
              }}
            >
              <item.icon className="nav-icon" />
              <span>{item.label}</span>
            </button>
          ))}
        </nav>

        <div className="sidebar-footer">
          <button className="logout-btn" onClick={handleLogout}>
            <FaSignOutAlt className="nav-icon" />
            <span>Logout</span>
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="main-content">
        {/* Header */}
        <header className="dashboard-header">
          <div className="header-left">
            <button 
              className="menu-toggle"
              onClick={() => setSidebarOpen(true)}
            >
              <FaBars />
            </button>
            <h1>Dashboard</h1>
          </div>

          <div className="header-right">
            <div className="search-box">
              <FaSearch className="search-icon" />
              <input type="text" placeholder="Search..." />
            </div>
            <div className="notifications">
              <FaBell className="notification-icon" />
              <span className="notification-badge">3</span>
            </div>
            <div className="user-profile">
              <div className="user-avatar">
                <span>AD</span>
              </div>
              <div className="user-info">
                <span className="user-name">Admin</span>
                <span className="user-role">Administrator</span>
              </div>
            </div>
          </div>
        </header>

        {/* Content Area */}
        <main className="content-area">
          {renderContent()}
        </main>
      </div>

      {/* Sidebar Overlay */}
      {sidebarOpen && (
        <div 
          className="sidebar-overlay"
          onClick={() => setSidebarOpen(false)}
        />
      )}
    </div>
  );
};

export default AdminDashboard;