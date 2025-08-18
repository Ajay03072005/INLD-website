import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  FaFacebook, 
  FaTwitter, 
  FaYoutube, 
  FaArrowRight,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope
} from 'react-icons/fa';
import { GoPeople } from "react-icons/go";
import { CiHeart } from "react-icons/ci";
import { MdContactPhone } from "react-icons/md";
import { PiCalendarBlankBold } from "react-icons/pi";
import { IoLocationOutline } from "react-icons/io5";
import wheat from '../assets/wheat.jpg';
import LeaderImg from '../assets/photo1.png';
import '../styles/HomePage.css';

const HomePage = () => {
  // Hero Section Component with enhanced design
  const HeroSection = () => (
    <section className='hero-section-enhanced text-white'>
      {/* Background with overlay effect */}
      <div className="hero-bg-overlay"></div>
      
      {/* Main content container */}
      <div className='max-w-[1400px] mx-auto px-6 py-28 flex flex-col md:flex-row items-center justify-between relative z-10'>
        {/* Left content with text and buttons */}
        <div className='md:w-1/2 space-y-8 hero-content-animation'>
          <div className="inline-block py-2 px-4 bg-white bg-opacity-20 rounded-full backdrop-blur-sm mb-2">
            <span className="text-white font-medium tracking-wide">Indian National Lok Dal</span>
          </div>
          
          <h1 className='text-5xl md:text-6xl lg:text-7xl font-bold leading-tight hero-heading'>
            Haryana Ki <span className="text-yellow-300">Awaaz</span>,<br /> 
            Desh Ki <span className="text-yellow-300">Shakti</span>
          </h1>
          
          <p className='text-xl text-white opacity-90 max-w-xl leading-relaxed'>
            Indian National Lok Dal has been the voice of Haryana for over 25 years. From farmers' fields to Delhi's corridors of power, we stand for rural development, agricultural prosperity, and regional pride.
          </p>
          
          <div className="flex flex-wrap items-center gap-4 mt-10">
            <Link to="/join" className="hero-button primary flex items-center gap-2 group">
              <GoPeople className="text-xl" />
              <span>Join Our Movement</span>
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </Link>
            <Link to="/donate" className="hero-button secondary flex items-center gap-2 group">
              <CiHeart className="text-xl" />
              <span>Support INLD</span>
            </Link>
          </div>
          
          <div className="flex items-center gap-4 mt-6">
            <div className="flex -space-x-2">
              <div className="w-10 h-10 rounded-full bg-green-700 flex items-center justify-center text-xs font-bold border-2 border-white">HY</div>
              <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-xs font-bold border-2 border-white">DL</div>
              <div className="w-10 h-10 rounded-full bg-yellow-500 flex items-center justify-center text-xs font-bold border-2 border-white">PB</div>
            </div>
            <span className="text-sm opacity-80">Trusted by thousands of supporters across India</span>
          </div>
        </div>
        
        {/* Right content with hero image and decorative elements */}
        <div className='md:w-1/2 relative mt-10 md:mt-0'>
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-green-400 to-green-600 rounded-full filter blur-3xl opacity-20 animate-pulse"></div>
          <div className="absolute bottom-0 left-20 w-40 h-40 bg-gradient-to-tr from-yellow-400 to-yellow-200 rounded-full filter blur-3xl opacity-20 animate-pulse delay-1000"></div>
          
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-green-600 to-green-400 rounded-2xl transform rotate-3 scale-95 -z-10"></div>
            <img 
              src={wheat} 
              alt="INLD Hero" 
              className="w-full h-auto rounded-2xl shadow-2xl object-cover hero-image-animation z-20" 
              style={{maxHeight: '500px'}} 
            />
            
            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl p-3 shadow-lg hero-stat-card">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                  <span className="text-green-600 text-xl font-bold">25+</span>
                </div>
                <div>
                  <p className="text-gray-500 text-xs">Years of</p>
                  <p className="text-gray-800 font-semibold">Dedicated Service</p>
                </div>
              </div>
            </div>
            
            <div className="absolute -top-6 -right-6 bg-white rounded-xl p-3 shadow-lg hero-stat-card">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
                  <span className="text-yellow-600 text-xl">🌾</span>
                </div>
                <div>
                  <p className="text-gray-500 text-xs">Farmers'</p>
                  <p className="text-gray-800 font-semibold">Champion</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-white text-sm opacity-80 mb-2">Scroll to explore</span>
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </section>
  );

  // Our Achievements Component
  const OurAchievementsSection = () => (
    <section className='py-16'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <h2 className='text-3xl font-bold text-gray-900 text-center mb-12'>Our Achievements</h2>
        <div className='grid md:grid-cols-3 gap-8'>
          <div className='flex flex-col gap-6 rounded-xl border text-center p-6 hover:shadow-lg transition-shadow'>
            <div className='bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4'>
              <span className='text-green-600 text-2xl font-bold'>25+</span>
            </div>
            <h3 className='font-semibold mb-2'>Years of Service</h3>
            <p className='text-gray-600 text-sm'>
              Serving Haryana since 1999 with dedication and commitment
            </p>
          </div>
          <div className='flex flex-col gap-6 rounded-xl border text-center p-6 hover:shadow-lg transition-shadow'>
            <div className='bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4'>
              <span className='text-blue-600 text-2xl font-bold'>2</span>
            </div>
            <h3 className='font-semibold mb-2'>Government Terms</h3>
            <p className='text-gray-600 text-sm'>
              Led Haryana government and currently part of coalition
            </p>
          </div>
          <div className='flex flex-col gap-6 rounded-xl border text-center p-6 hover:shadow-lg transition-shadow'>
            <div className='bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4'>
              <span className='text-yellow-600 text-2xl'>🏆</span>
            </div>
            <h3 className='font-semibold mb-2'>Farmer Champion</h3>
            <p className='text-gray-600 text-sm'>
              Consistently fighting for farmers' rights and agricultural reforms
            </p>
          </div>
        </div>
      </div>
    </section>
  );

  // Leader Message Component
  const LeaderMessageSection = () => (
    <section className="py-16 bg-gray-50">
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='text-center mb-12'>
          <h2 className='text-3xl font-bold text-gray-900 mb-4'>
            Message from Leadership
          </h2>
        </div>
        <div className='bg-white text-card-foreground flex flex-col gap-6 rounded-xl border max-w-6xl mx-auto shadow-lg'>
          <div className='p-8'>
            <div className='flex flex-col md:flex-row gap-8 items-start'>
              
              <div className='flex-1'>
                <blockquote className='text-lg text-gray-700 mb-4 italic'>
                  "INLD has always been the party of farmers and rural communities. As we continue our journey, our commitment to Haryana's development remains unwavering. We will ensure that the voice of every farmer, every worker, and every family in Haryana is heard and respected in the corridors of power."
                </blockquote>
                <div className='border-l-4 border-green-600 pl-4'>
                  <p className='font-semibold text-gray-900'>
                    Dushyant Chautala
                  </p>
                  <p className='text-gray-600'>
                    Deputy Chief Minister, Haryana
                  </p>
                  <p className='text-gray-600'>
                    JJP President
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );

  // Latest News Component
  const LatestNewsSection = () => {
    const news = [
      {
        category: 'Agriculture',
        date: '2025-01-28',
        title: 'INLD Demands Fair MSP for Haryana Farmers',
        desc: 'Party leadership meets with farmer unions to discuss minimum support price issues and crop insurance reforms.',
      },
      {
        category: 'Development',
        date: '2025-01-25',
        title: 'Deputy CM Announces Infrastructure Development Plans',
        desc: 'Dushyant Chautala unveils new road projects for rural Haryana districts.',
      },
      {
        category: 'Party',
        date: '2025-01-22',
        title: 'INLD Celebrates Foundation Day',
        desc: 'Party marks 26 years of service to Haryana with events across all districts.',
      },
    ];

    return (
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Latest News</h2>
            <Link to="/news-events" className="flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all border border-gray-300 bg-white text-gray-800 hover:bg-gray-100 text-lg px-4 py-2 font-semibold">
              View All News <FaArrowRight />
            </Link>
          </div>

          {/* Grid of News Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {news.map((item, index) => (
              <div key={index} className="bg-white border-gray-500 rounded-xl shadow-sm hover:shadow-lg transition p-6 flex flex-col gap-3 cursor-pointer">
                <div className="flex justify-between items-center">
                  <span className="text-xs font-semibold text-black bg-gray-200 px-3 py-1 rounded-full">
                    {item.category}
                  </span>
                  <span className="text-xs text-gray-500">{item.date}</span>
                </div>
                <h3 className="text-base font-semibold text-gray-900">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };

  // Upcoming Events Component
  const UpcomingEventsSection = () => (
    <section className='py-16'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Heading */}
        <div className='flex justify-between items-center mb-12'>
          <h2 className='text-3xl font-bold text-gray-900'>Upcoming Events</h2>
          <Link to="/news-events" className='flex items-center gap-2 border border-gray-300 bg-white text-gray-800 hover:bg-gray-100 rounded-md px-4 py-2 text-sm font-medium'>
            View All Events <FaArrowRight />
          </Link>
        </div>

        {/* Cards Grid */}
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {/* Card 1 */}
          <div className='bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md p-6 flex flex-col gap-3 cursor-pointer'>
            <div className='flex items-center gap-4'>
              <div className='bg-green-100 p-3 rounded-lg'>
                <PiCalendarBlankBold className='text-green-700 text-xl font-bold' />
              </div>
              <div className='flex flex-col gap-1'>
                <h3 className='font-semibold text-lg'>Kisan Sammelan - Hisar</h3>
                <div className='flex items-center gap-4 text-gray-600 text-sm'>
                  <span>2025-02-05</span>
                  <div className='flex items-center gap-1'>
                    <IoLocationOutline />
                    <span>Hisar</span>
                  </div>
                </div>
                <span className='inline-block text-xs text-black bg-white px-3 py-1 rounded-full border border-gray-200 w-fit whitespace-nowrap'>
                  Farmer's Meet
                </span>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className='bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md p-6 flex flex-col gap-3 cursor-pointer'>
            <div className='flex items-center gap-4'>
              <div className='bg-green-100 p-3 rounded-lg'>
                <PiCalendarBlankBold className='text-green-700 text-xl font-bold' />
              </div>
              <div className='flex flex-col gap-1'>
                <h3 className='font-semibold text-lg'>Youth Convention - Rohtak</h3>
                <div className='flex items-center gap-4 text-gray-600 text-sm'>
                  <span>2025-02-10</span>
                  <div className='flex items-center gap-1'>
                    <IoLocationOutline />
                    <span>Rohtak</span>
                  </div>
                </div>
                <span className='inline-block text-xs text-black bg-white px-3 py-1 rounded-full border border-gray-200 w-fit whitespace-nowrap'>
                  Youth Event
                </span>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className='bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md p-6 flex flex-col gap-3 cursor-pointer'>
            <div className='flex items-center gap-4'>
              <div className='bg-green-100 p-3 rounded-lg'>
                <PiCalendarBlankBold className='text-green-700 text-xl font-bold' />
              </div>
              <div className='flex flex-col gap-1'>
                <h3 className='font-semibold text-lg'>Public Rally - Gurgaon</h3>
                <div className='flex items-center gap-4 text-gray-600 text-sm'>
                  <span>2025-02-15</span>
                  <div className='flex items-center gap-1'>
                    <IoLocationOutline />
                    <span>Gurgaon</span>
                  </div>
                </div>
                <span className='inline-block text-xs text-black bg-white px-3 py-1 rounded-full border border-gray-200 w-fit whitespace-nowrap'>
                  Public Rally
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );

  // Join Movement Component
  const JoinMovementSection = () => (
    <section className='py-16 bg-green-600 text-white'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
        <h2 className='text-3xl font-bold mb-4'>
          Be Part of Haryana's Progress
        </h2>
        <p className='text-xl mb-8 text-green-100 max-w-3xl mx-auto'>
          Join thousands of citizens who believe in our vision of a prosperous Haryana. Your voice matters, your support counts.
        </p>

        {/* Vertical buttons with same width */}
        <div className='flex flex-col gap-4 items-center'>
          <Link to="/join" className="w-full sm:w-[400px] bg-white text-green-600 px-6 py-3 rounded-full font-semibold flex items-center justify-center gap-2 text-lg hover:bg-gray-100 transition-colors">
            <GoPeople />
            Become a Member
          </Link>
          <Link to="/contact" className="w-full sm:w-[400px] bg-white text-green-600 px-6 py-3 rounded-full font-semibold flex items-center justify-center gap-2 text-lg hover:bg-gray-100 transition-colors">
            <MdContactPhone />
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );

  // Connect Us Component
  const ConnectUsSection = () => (
    <section className='py-16'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <h2 className='text-3xl font-bold text-gray-900 text-center mb-12'>Connect With Us</h2>
        <div className='grid md:grid-cols-3 gap-8'>
          <div className='flex flex-col gap-6 rounded-xl border text-center p-6 hover:shadow-lg transition-shadow'>
            <div className='bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4'>
              <FaFacebook className='text-blue-600 text-2xl' />
            </div>
            <h3 className='font-semibold mb-2'>Facebook</h3>
            <p className='text-gray-600 text-sm'>
              Follow @INLDOfficial for latest updates and community discussions
            </p>
            <a href="#" className='text-blue-600 font-semibold hover:text-blue-800'>Follow Us</a>
          </div>
          <div className='flex flex-col gap-6 rounded-xl border text-center p-6 hover:shadow-lg transition-shadow'>
            <div className='bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4'>
              <FaTwitter className='text-blue-600 text-2xl' />
            </div>
            <h3 className='font-semibold mb-2'>Twitter</h3>
            <p className='text-gray-600 text-sm'>
              Real-time updates and political insights from @INLDHaryana
            </p>
            <a href="#" className='text-blue-600 font-semibold hover:text-blue-800'>Follow Us</a>
          </div>
          <div className='flex flex-col gap-6 rounded-xl border text-center p-6 hover:shadow-lg transition-shadow'>
            <div className='bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4'>
              <FaYoutube className='text-red-600 text-2xl' />
            </div>
            <h3 className='font-semibold mb-2'>YouTube</h3>
            <p className='text-gray-600 text-sm'>
              Watch speeches, rallies, and documentaries about our work
            </p>
            <a href="#" className='text-red-600 font-semibold hover:text-red-800'>Subscribe</a>
          </div>
        </div>
      </div>
    </section>
  );

  // Contact Information Component
  const ContactInfoSection = () => (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Get In Touch</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center text-center p-6 bg-white rounded-xl border hover:shadow-lg transition-shadow">
            <FaMapMarkerAlt className="text-green-600 text-3xl mb-4" />
            <h4 className="font-semibold text-lg mb-2">Head Office</h4>
            <p className="text-gray-600">123 Political Street, New Delhi, India - 110001</p>
          </div>
          <div className="flex flex-col items-center text-center p-6 bg-white rounded-xl border hover:shadow-lg transition-shadow">
            <FaPhone className="text-green-600 text-3xl mb-4" />
            <h4 className="font-semibold text-lg mb-2">Phone</h4>
            <p className="text-gray-600">+91-11-1234-5678</p>
          </div>
          <div className="flex flex-col items-center text-center p-6 bg-white rounded-xl border hover:shadow-lg transition-shadow">
            <FaEnvelope className="text-green-600 text-3xl mb-4" />
            <h4 className="font-semibold text-lg mb-2">Email</h4>
            <p className="text-gray-600">info@inld.org</p>
          </div>
        </div>
      </div>
    </section>
  );

  return (
    <div className="homepage">
      <HeroSection />
      <OurAchievementsSection />
      <LeaderMessageSection />
      <LatestNewsSection />
      <UpcomingEventsSection />
      <JoinMovementSection />
      <ConnectUsSection />
      <ContactInfoSection />
    </div>
  );
};



export default HomePage;
