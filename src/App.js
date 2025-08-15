import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import HomePage from './pages/HomePage';
import JoinPage from './pages/JoinPage';
import GalleryPage from './pages/GalleryPage';
import NewsPage from './pages/NewsPage';
import ManifestoPage from './pages/ManifestoPage';
import Leadership from  './pages/Leadership';
import DonatePage from './pages/DonatePage';
import BlogsPage from './pages/BlogsPage';
import PressReleasePage from './pages/PressReleasePage';
import AdminLogin from './pages/AdminLogin';
import AdminDashboard from './pages/AdminDashboard';
import About from './pages/About';
import Contact from './pages/Contact';
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
          <Route path="/" element={<HomePage />} />
          <Route path="/join" element={<JoinPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/news-events" element={<NewsPage />} />
          <Route path="/manifesto" element={<ManifestoPage />} />
          <Route path="/leadership" element={<Leadership />} />
          <Route path="/donate" element={<DonatePage />} />
          <Route path="/blogs" element={<BlogsPage />} />
          <Route path="/press-release" element={<PressReleasePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<AdminLogin />} />
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
