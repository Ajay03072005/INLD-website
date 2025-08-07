import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/AdminDashboard.css';
import { 
  FaUsers, FaCalendarAlt, FaNewspaper, FaChartBar, FaCog, FaSignOutAlt,
  FaBell, FaSearch, FaUserPlus, FaEye, FaEdit, FaTrash, FaBars, FaTimes
} from 'react-icons/fa';
import { apiRequest, API_ENDPOINTS } from '../utils/api';

const AdminDashboard = () => {
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

  useEffect(() => {
    // For development/testing, skip authentication check
    // In production, uncomment the authentication check below
    
    /*
    // Check if user is authenticated
    const token = localStorage.getItem('adminToken');
    if (!token) {
      navigate('/admin/login');
      return;
    }
    */

    // Load dashboard data
    loadDashboardData();
  }, [navigate]);

  const loadDashboardData = async () => {
    try {
      setIsLoading(true);
      const response = await apiRequest(API_ENDPOINTS.ADMIN_DASHBOARD, {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('adminToken')}`
        }
      });

      if (response.success) {
        setDashboardData(response.data);
      }
    } catch (error) {
      console.error('Error loading dashboard data:', error);
      // Use mock data if API fails
      setDashboardData({
        totalRegistrations: 248,
        totalEvents: 12,
        totalNews: 34,
        recentActivity: []
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    localStorage.removeItem('adminRememberMe');
    navigate('/admin/login');
  };

  const sidebarItems = [
    { id: 'overview', label: 'Overview', icon: FaChartBar },
    { id: 'registrations', label: 'Registrations', icon: FaUsers },
    { id: 'events', label: 'Events', icon: FaCalendarAlt },
    { id: 'news', label: 'News', icon: FaNewspaper },
    { id: 'settings', label: 'Settings', icon: FaCog },
  ];

  const renderOverview = () => (
    <div className="overview-section">
      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-icon registrations">
            <FaUsers />
          </div>
          <div className="stat-content">
            <h3>{dashboardData.totalRegistrations}</h3>
            <p>Total Registrations</p>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-icon events">
            <FaCalendarAlt />
          </div>
          <div className="stat-content">
            <h3>{dashboardData.totalEvents}</h3>
            <p>Active Events</p>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-icon news">
            <FaNewspaper />
          </div>
          <div className="stat-content">
            <h3>{dashboardData.totalNews}</h3>
            <p>News Articles</p>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-icon activity">
            <FaBell />
          </div>
          <div className="stat-content">
            <h3>24</h3>
            <p>Recent Activities</p>
          </div>
        </div>
      </div>

      <div className="dashboard-grid">
        <div className="dashboard-card recent-registrations">
          <div className="card-header">
            <h3>Recent Registrations</h3>
            <button className="view-all-btn">View All</button>
          </div>
          <div className="table-container">
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Category</th>
                  <th>Date</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>John Doe</td>
                  <td>john@example.com</td>
                  <td>Volunteer</td>
                  <td>Aug 5, 2025</td>
                  <td>
                    <button className="action-btn view"><FaEye /></button>
                    <button className="action-btn edit"><FaEdit /></button>
                    <button className="action-btn delete"><FaTrash /></button>
                  </td>
                </tr>
                <tr>
                  <td>Jane Smith</td>
                  <td>jane@example.com</td>
                  <td>Member</td>
                  <td>Aug 4, 2025</td>
                  <td>
                    <button className="action-btn view"><FaEye /></button>
                    <button className="action-btn edit"><FaEdit /></button>
                    <button className="action-btn delete"><FaTrash /></button>
                  </td>
                </tr>
                <tr>
                  <td>Mike Johnson</td>
                  <td>mike@example.com</td>
                  <td>Youth Wing</td>
                  <td>Aug 3, 2025</td>
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

        <div className="dashboard-card upcoming-events">
          <div className="card-header">
            <h3>Upcoming Events</h3>
            <button className="add-btn"><FaUserPlus /> Add Event</button>
          </div>
          <div className="events-list">
            <div className="event-item">
              <div className="event-date">
                <span className="day">15</span>
                <span className="month">Aug</span>
              </div>
              <div className="event-details">
                <h4>INLD State-Wide Rally</h4>
                <p>Rohtak, Haryana - 10:00 AM</p>
              </div>
              <div className="event-status active">Active</div>
            </div>
            <div className="event-item">
              <div className="event-date">
                <span className="day">20</span>
                <span className="month">Aug</span>
              </div>
              <div className="event-details">
                <h4>Youth Leadership Workshop</h4>
                <p>Gurgaon, Haryana - 2:00 PM</p>
              </div>
              <div className="event-status pending">Pending</div>
            </div>
            <div className="event-item">
              <div className="event-date">
                <span className="day">25</span>
                <span className="month">Aug</span>
              </div>
              <div className="event-details">
                <h4>Farmer's Meet</h4>
                <p>Hisar, Haryana - 9:00 AM</p>
              </div>
              <div className="event-status draft">Draft</div>
            </div>
          </div>
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
      
      <div className="filters-container">
        <div className="filter-group">
          <label>Category:</label>
          <select>
            <option value="">All Categories</option>
            <option value="volunteer">Volunteer</option>
            <option value="member">Member</option>
            <option value="supporter">Supporter</option>
            <option value="youth">Youth Wing</option>
          </select>
        </div>
        <div className="filter-group">
          <label>Status:</label>
          <select>
            <option value="">All Status</option>
            <option value="active">Active</option>
            <option value="pending">Pending</option>
            <option value="inactive">Inactive</option>
          </select>
        </div>
        <div className="filter-group">
          <label>Date Range:</label>
          <input type="date" />
          <span>to</span>
          <input type="date" />
        </div>
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
              <tr>
                <td>#002</td>
                <td>Jane Smith</td>
                <td>jane@example.com</td>
                <td>+91-9876543211</td>
                <td>Member</td>
                <td>Aug 4, 2025</td>
                <td><span className="event-status pending">Pending</span></td>
                <td>
                  <button className="action-btn view"><FaEye /></button>
                  <button className="action-btn edit"><FaEdit /></button>
                  <button className="action-btn delete"><FaTrash /></button>
                </td>
              </tr>
              <tr>
                <td>#003</td>
                <td>Mike Johnson</td>
                <td>mike@example.com</td>
                <td>+91-9876543212</td>
                <td>Youth Wing</td>
                <td>Aug 3, 2025</td>
                <td><span className="event-status active">Active</span></td>
                <td>
                  <button className="action-btn view"><FaEye /></button>
                  <button className="action-btn edit"><FaEdit /></button>
                  <button className="action-btn delete"><FaTrash /></button>
                </td>
              </tr>
              <tr>
                <td>#004</td>
                <td>Sarah Wilson</td>
                <td>sarah@example.com</td>
                <td>+91-9876543213</td>
                <td>Supporter</td>
                <td>Aug 2, 2025</td>
                <td><span className="event-status active">Active</span></td>
                <td>
                  <button className="action-btn view"><FaEye /></button>
                  <button className="action-btn edit"><FaEdit /></button>
                  <button className="action-btn delete"><FaTrash /></button>
                </td>
              </tr>
              <tr>
                <td>#005</td>
                <td>David Brown</td>
                <td>david@example.com</td>
                <td>+91-9876543214</td>
                <td>Volunteer</td>
                <td>Aug 1, 2025</td>
                <td><span className="event-status pending">Pending</span></td>
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
        <button className="add-btn">
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
                <tr>
                  <td>INLD State-Wide Rally</td>
                  <td>Aug 15, 2025</td>
                  <td>Rohtak, Haryana</td>
                  <td>245</td>
                  <td><span className="event-status active">Active</span></td>
                  <td>
                    <button className="action-btn view"><FaEye /></button>
                    <button className="action-btn edit"><FaEdit /></button>
                    <button className="action-btn delete"><FaTrash /></button>
                  </td>
                </tr>
                <tr>
                  <td>Youth Leadership Workshop</td>
                  <td>Aug 20, 2025</td>
                  <td>Gurgaon, Haryana</td>
                  <td>89</td>
                  <td><span className="event-status pending">Pending</span></td>
                  <td>
                    <button className="action-btn view"><FaEye /></button>
                    <button className="action-btn edit"><FaEdit /></button>
                    <button className="action-btn delete"><FaTrash /></button>
                  </td>
                </tr>
                <tr>
                  <td>Farmer's Meet</td>
                  <td>Aug 25, 2025</td>
                  <td>Hisar, Haryana</td>
                  <td>156</td>
                  <td><span className="event-status draft">Draft</span></td>
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

        <div className="dashboard-card">
          <div className="card-header">
            <h3>Event Statistics</h3>
          </div>
          <div className="stats-grid">
            <div className="stat-item">
              <h4>12</h4>
              <p>Total Events</p>
            </div>
            <div className="stat-item">
              <h4>8</h4>
              <p>Active Events</p>
            </div>
            <div className="stat-item">
              <h4>2</h4>
              <p>Pending Events</p>
            </div>
            <div className="stat-item">
              <h4>490</h4>
              <p>Total Registrations</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderNews = () => (
    <div className="news-section">
      <div className="section-header">
        <h2>News Management</h2>
        <button className="add-btn">
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
              <tr>
                <td>INLD Announces New Agricultural Policy</td>
                <td>Admin</td>
                <td>Aug 5, 2025</td>
                <td>Policy</td>
                <td><span className="event-status active">Published</span></td>
                <td>1,245</td>
                <td>
                  <button className="action-btn view"><FaEye /></button>
                  <button className="action-btn edit"><FaEdit /></button>
                  <button className="action-btn delete"><FaTrash /></button>
                </td>
              </tr>
              <tr>
                <td>Youth Wing Membership Drive Success</td>
                <td>Admin</td>
                <td>Aug 3, 2025</td>
                <td>Youth</td>
                <td><span className="event-status active">Published</span></td>
                <td>892</td>
                <td>
                  <button className="action-btn view"><FaEye /></button>
                  <button className="action-btn edit"><FaEdit /></button>
                  <button className="action-btn delete"><FaTrash /></button>
                </td>
              </tr>
              <tr>
                <td>Upcoming Rally Preparation Update</td>
                <td>Admin</td>
                <td>Aug 2, 2025</td>
                <td>Event</td>
                <td><span className="event-status draft">Draft</span></td>
                <td>0</td>
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

  const renderSettings = () => (
    <div className="settings-section">
      <div className="section-header">
        <h2>Settings</h2>
      </div>

      <div className="dashboard-grid">
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

        <div className="dashboard-card">
          <div className="card-header">
            <h3>Admin Users</h3>
          </div>
          <div className="table-container">
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Role</th>
                  <th>Last Login</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Super Admin</td>
                  <td>admin@inld.org</td>
                  <td>Super Admin</td>
                  <td>Aug 5, 2025</td>
                  <td>
                    <button className="action-btn edit"><FaEdit /></button>
                  </td>
                </tr>
                <tr>
                  <td>Content Manager</td>
                  <td>content@inld.org</td>
                  <td>Editor</td>
                  <td>Aug 4, 2025</td>
                  <td>
                    <button className="action-btn edit"><FaEdit /></button>
                    <button className="action-btn delete"><FaTrash /></button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
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
