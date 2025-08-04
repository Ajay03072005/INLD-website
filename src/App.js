import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import JoinPage from './pages/JoinPage'; // check path is correct
import GalleryPage from './pages/GalleryPage';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/join" element={<JoinPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/" element={<div style={{ textAlign: 'center' }}>Home Page Content</div>} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
