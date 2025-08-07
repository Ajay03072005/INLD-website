import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import JoinPage from './pages/JoinPage';
import GalleryPage from './pages/GalleryPage';
import NewsPage from './pages/NewsPage';
import ManifestoPage from './pages/ManifestoPage';
import Leadership from  './pages/Leadership';
import AdminLogin from './pages/AdminLogin';
import AdminDashboard from './pages/AdminDashboard';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function Layout({ children }) {
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith('/admin');

  return (
    <>
      {!isAdminRoute && <Navbar />}
      {children}
      {!isAdminRoute && <Footer />}
    </>
  );
}

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/join" element={<JoinPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/news-events" element={<NewsPage />} />
          <Route path="/manifesto" element={<ManifestoPage />} />
          <Route path="/leadership" element={<Leadership />} />
          <Route path="/login" element={<AdminLogin />} />
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
          <Route path="/" element={<div style={{ textAlign: 'center' }}>Home Page Content</div>} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
