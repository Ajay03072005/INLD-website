import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import JoinPage from './pages/JoinPage';
import GalleryPage from './pages/GalleryPage';
import NewsPage from './pages/NewsPage';
import ManifestoPage from './pages/ManifestoPage';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/join" element={<JoinPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/news-events" element={<NewsPage />} />
        <Route path="/manifesto" element={<ManifestoPage />} />
        <Route path="/" element={<div style={{ textAlign: 'center' }}>Home Page Content</div>} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
