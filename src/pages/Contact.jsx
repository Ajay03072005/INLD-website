import React from 'react'
import { Link } from 'react-router-dom'
import { GrLocation } from "react-icons/gr";
import { IoCallOutline } from "react-icons/io5";
import { CiMail } from "react-icons/ci";
import { LuClock } from "react-icons/lu";
import { LuFacebook } from "react-icons/lu";
import { FiTwitter } from "react-icons/fi";
import { FiYoutube } from "react-icons/fi";
import { FaPhoneAlt } from "react-icons/fa";
import '../styles/Contact.css';

const Contact = () => {
    return (
        <div className="contact-page">
            {/* Hero Section */}
            <div className="contact-hero">
                <h1>Contact INLD</h1>
                <p>Get in touch with us for any queries, suggestions, or to join our movement for a better Haryana</p>
            </div>
            
            <div className="contact-container">

            {/* Main Content Grid */}
            <div className="contact-grid">
                {/* Left Column - Contact Form */}
                <div className="contact-form-container">
                    <h3 className="form-heading">Send Us a Message</h3>
                    <form className="contact-form">
                        {/* Name */}
                        <div className="form-group">
                            <label className="form-label">Full Name <span className="form-required">*</span></label>
                            <input 
                                type="text" 
                                className="form-input" 
                                placeholder="Your full name"
                                required
                            />
                        </div>

                        {/* Email */}
                        <div className="form-group">
                            <label className="form-label">Email <span className="form-required">*</span></label>
                            <input 
                                type="email" 
                                className="form-input" 
                                placeholder="your.email@example.com"
                                required
                            />
                        </div>

                        {/* Phone */}
                        <div className="form-group">
                            <label className="form-label">Phone Number</label>
                            <input 
                                type="tel" 
                                className="form-input" 
                                placeholder="+91 9876543210"
                            />
                        </div>

                        {/* District */}
                        <div className="form-group">
                            <label className="form-label">District</label>
                            <select className="form-select">
                                <option value="">Select your district</option>
                                <option value="hisar">Hisar</option>
                                <option value="rohtak">Rohtak</option>
                                <option value="sirsa">Sirsa</option>
                                <option value="karnal">Karnal</option>
                                <option value="ambala">Ambala</option>
                                <option value="gurugram">Gurugram</option>
                                <option value="other">Other</option>
                            </select>
                        </div>

                        {/* Subject */}
                        <div className="form-group">
                            <label className="form-label">Subject</label>
                            <select className="form-select">
                                <option value="">Select subject</option>
                                <option value="general">General Inquiry</option>
                                <option value="membership">Party Membership</option>
                                <option value="volunteer">Volunteer Opportunity</option>
                                <option value="media">Media Relations</option>
                                <option value="grievance">Public Grievance</option>
                                <option value="policy">Policy Suggestion</option>
                            </select>
                        </div>

                        {/* Message */}
                        <div className="form-group">
                            <label className="form-label">Message</label>
                            <textarea 
                                className="form-textarea" 
                                placeholder="Write your message here..."
                                rows="4"
                            ></textarea>
                        </div>

                        <button type="submit" className="form-button">Submit Message</button>
                    </form>
                </div>
                {/* Right Column - Office Information */}
                <div className="contact-cards">
                    {/* Head Office */}
                    <div className="contact-card">
                        <h4 className="card-title">
                            <GrLocation /> INLD Head Office
                        </h4>
                        <div className="card-content">
                            <div className="contact-item">
                                <GrLocation />
                                <p>Near Bal Bhawan, Sector 14, Chandigarh - 160014</p>
                            </div>
                            <div className="contact-item">
                                <IoCallOutline />
                                <p>+91-172-270-3456</p>
                            </div>
                            <div className="contact-item">
                                <CiMail />
                                <p>info@inld.org.in</p>
                            </div>
                            <div className="contact-item">
                                <LuClock />
                                <p>Mon-Sat: 9:00 AM - 6:00 PM</p>
                            </div>
                        </div>
                    </div>

                    {/* Haryana State Office */}
                    <div className="contact-card">
                        <h4 className="card-title">
                            <GrLocation /> Haryana State Office
                        </h4>
                        <div className="card-content">
                            <div className="contact-item">
                                <GrLocation />
                                <p>Plot No. 123, Sector 7, Panchkula, Haryana - 134109</p>
                            </div>
                            <div className="contact-item">
                                <IoCallOutline />
                                <p>+91-172-255-1234</p>
                            </div>
                            <div className="contact-item">
                                <CiMail />
                                <p>haryana@inld.org.in</p>
                            </div>
                            <div className="contact-item">
                                <LuClock />
                                <p>Mon-Sat: 9:00 AM - 6:00 PM</p>
                            </div>
                        </div>
                    </div>

                    {/* Delhi Liaison Office */}
                    <div className="contact-card">
                        <h4 className="card-title">
                            <GrLocation /> Delhi Liaison Office
                        </h4>
                        <div className="card-content">
                            <div className="contact-item">
                                <GrLocation />
                                <p>1, Ashoka Road, New Delhi - 110001</p>
                            </div>
                            <div className="contact-item">
                                <IoCallOutline />
                                <p>+91-11-2338-4567</p>
                            </div>
                            <div className="contact-item">
                                <CiMail />
                                <p>delhi@inld.org.in</p>
                            </div>
                            <div className="contact-item">
                                <LuClock />
                                <p>Mon-Fri: 10:00 AM - 5:00 PM</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Social Media Section */}
            <div className="social-section">
                <h3 className="social-title">Follow Us on Social Media</h3>
                <div className="social-grid">
                    <a href="https://facebook.com/inldofficial" target="_blank" rel="noopener noreferrer" className="social-button">
                        <LuFacebook style={{ color: "#1877F2" }} />
                        <span>Facebook</span>
                    </a>
                    <a href="https://twitter.com/inldharyana" target="_blank" rel="noopener noreferrer" className="social-button">
                        <FiTwitter style={{ color: "#1DA1F2" }} />
                        <span>Twitter</span>
                    </a>
                    <a href="https://youtube.com/inldofficial" target="_blank" rel="noopener noreferrer" className="social-button">
                        <FiYoutube style={{ color: "#FF0000" }} />
                        <span>YouTube</span>
                    </a>
                </div>
                <p className="social-handle">@INLDOfficial | @INLDHaryana | INLD Official Channel</p>
            </div>
            {/* Helpline Box */}
            <div className="helpline-box">
                <h3 className="helpline-title">Public Grievance Cell</h3>
                <p className="helpline-number">1800-180-INLD</p>
                <p className="helpline-info">Toll-free helpline for public grievances</p>
                <p className="helpline-hours">Mon-Fri: 9:00 AM - 6:00 PM</p>
            </div>
            {/* District Offices Section */}
            <section className="district-section">
                <h3 className="district-title">District Offices in Haryana</h3>
                <div className="district-grid">
                    {/* Hisar */}
                    <div className="district-card">
                        <h4 className="district-name">Hisar</h4>
                        <div className="district-contact">
                            <IoCallOutline />
                            <span>+91-1662-234567</span>
                        </div>
                        <div className="district-contact">
                            <CiMail />
                            <span>hisar@inld.org.in</span>
                        </div>
                    </div>
                    
                    {/* Rohtak */}
                    <div className="district-card">
                        <h4 className="district-name">Rohtak</h4>
                        <div className="district-contact">
                            <IoCallOutline />
                            <span>+91-1262-234567</span>
                        </div>
                        <div className="district-contact">
                            <CiMail />
                            <span>rohtak@inld.org.in</span>
                        </div>
                    </div>
                    
                    {/* Sirsa */}
                    <div className="district-card">
                        <h4 className="district-name">Sirsa</h4>
                        <div className="district-contact">
                            <IoCallOutline />
                            <span>+91-1666-234567</span>
                        </div>
                        <div className="district-contact">
                            <CiMail />
                            <span>sirsa@inld.org.in</span>
                        </div>
                    </div>
                    
                    {/* Karnal */}
                    <div className="district-card">
                        <h4 className="district-name">Karnal</h4>
                        <div className="district-contact">
                            <IoCallOutline />
                            <span>+91-184-234567</span>
                        </div>
                        <div className="district-contact">
                            <CiMail />
                            <span>karnal@inld.org.in</span>
                        </div>
                    </div>
                    
                    {/* Ambala */}
                    <div className="district-card">
                        <h4 className="district-name">Ambala</h4>
                        <div className="district-contact">
                            <IoCallOutline />
                            <span>+91-171-234567</span>
                        </div>
                        <div className="district-contact">
                            <CiMail />
                            <span>ambala@inld.org.in</span>
                        </div>
                    </div>
                    
                    {/* Gurugram */}
                    <div className="district-card">
                        <h4 className="district-name">Gurugram</h4>
                        <div className="district-contact">
                            <IoCallOutline />
                            <span>+91-124-234567</span>
                        </div>
                        <div className="district-contact">
                            <CiMail />
                            <span>gurugram@inld.org.in</span>
                        </div>
                    </div>
                </div>
            </section>
            {/* Leadership Offices */}
            <section className="district-section">
                <h3 className="district-title">Leadership Offices</h3>
                <div className="district-grid" style={{ gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))" }}>
                    {/* Deputy CM Office */}
                    <div className="district-card">
                        <h4 className="district-name">Deputy CM Office</h4>
                        <p style={{ fontSize: "0.9rem", color: "#666", marginBottom: "0.75rem" }}>
                            For official matters related to Haryana Government
                        </p>
                        <div className="district-contact">
                            <GrLocation />
                            <span>Haryana Civil Secretariat, Chandigarh</span>
                        </div>
                        <div className="district-contact">
                            <IoCallOutline />
                            <span>+91-172-274-4444</span>
                        </div>
                    </div>
                    
                    {/* Party President Office */}
                    <div className="district-card">
                        <h4 className="district-name">Party President Office</h4>
                        <p style={{ fontSize: "0.9rem", color: "#666", marginBottom: "0.75rem" }}>
                            For party-related matters and organizational issues
                        </p>
                        <div className="district-contact">
                            <GrLocation />
                            <span>INLD Head Office, Chandigarh</span>
                        </div>
                        <div className="district-contact">
                            <IoCallOutline />
                            <span>+91-172-270-3456</span>
                        </div>
                    </div>
                </div>
            </section>
            {/* Map Section */}
            <div className="map-container">
                <h3 className="map-title">Find Our Offices</h3>
                <div className="map-placeholder">
                    <GrLocation />
                    <p>Interactive map showing all INLD office locations across Haryana</p>
                    <p style={{ fontSize: "0.9rem", marginTop: "0.5rem" }}>Head Office: Chandigarh | State Office: Panchkula</p>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Contact
