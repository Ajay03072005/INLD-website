import React from 'react';
import HomePage from './pages/HomePage';
import About from './pages/About';
import NewsPage from './pages/NewsPage';
import DonatePage from './pages/DonatePage';
import JoinPage from './pages/JoinPage';
import Footer from './components/Footer/Footer';
import Contact from './pages/Contact';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';

const App = () => {
  return (
    <Router>
      <Navbar />
      {/* Scroll to top on route change */}
      <ScrollToTop />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/about' element={<About />} />
        <Route path='/news-events' element={<NewsPage />} />
        <Route path='/donate' element={<DonatePage />} />
        <Route path='/join' element={<JoinPage />} />
        <Route path='/contact' element={<><Contact /><Footer /></>} />
      </Routes>
    </Router>
  );
};

export default App;