import React from 'react'
import Home from './components/Home/Home'
import Navbar from './components/Navbar/Navbar'
import LeaderMessage from './components/LeaderMessage/LeaderMessage'
import LatestNews from './components/LatestNews/LatestNews'
import UpcomingEvents from './components/UpcomingEvents/UpcomingEvents'
import OurAchievement from './components/OurAchievement/OurAchievement'
import JoinMovement from './components/JoinMovement/JoinMovement'
import ConnectUs from './components/ConnectUs/ConnectUs'
import Footer from './components/Footer/Footer'
import Contact from './pages/Contact'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/*home route */}
        <Route path='/' element={
          <>
            <Home />
            <LeaderMessage />
            <LatestNews />
            <UpcomingEvents />
            <OurAchievement />
            <JoinMovement />
            <ConnectUs />
            <Footer />
          </>
        } />
        {/*Contact route */}
        <Route path='/contact' element={
          <><Contact /><Footer /></>
        } />
      </Routes>
    </Router>
  )
}

export default App