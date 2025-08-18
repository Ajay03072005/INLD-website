import React, { useState } from 'react';
import '../styles/BlogsPage.css';
import { FaCalendarAlt, FaUser, FaEye, FaArrowRight, FaTags } from 'react-icons/fa';

const BlogsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const blogPosts = [
    {
      id: 1,
      title: "INLD's Vision for Digital India: Technology for Rural Development",
      excerpt: "Exploring how technology can bridge the gap between urban and rural India, creating opportunities for farmers and rural entrepreneurs.",
      content: "Technology has the power to transform rural India. Our vision includes digital literacy programs, e-governance initiatives, and smart farming solutions...",
      author: "Abhay Singh Chautala",
      date: "2025-08-05",
      category: "Technology",
      views: 1250,
      image: "https://images.unsplash.com/photo-1560472355-536de3962603?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      tags: ["Digital India", "Rural Development", "Technology"]
    },
    {
      id: 2,
      title: "Sustainable Agriculture: INLD's Green Revolution 2.0",
      excerpt: "Our comprehensive plan to make Haryana's agriculture more sustainable, profitable, and environmentally friendly.",
      content: "Agriculture is the backbone of Haryana. Our Green Revolution 2.0 focuses on organic farming, water conservation, and modern farming techniques...",
  author: "",
      date: "2025-08-03",
      category: "Agriculture",
      views: 980,
      image: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      tags: ["Agriculture", "Sustainability", "Green Revolution"]
    },
    {
      id: 3,
      title: "Youth Empowerment: Building Tomorrow's Leaders",
      excerpt: "INLD's initiatives to provide education, employment, and entrepreneurship opportunities for the youth of Haryana.",
      content: "The youth are our future. Through skill development programs, startup incubation centers, and quality education, we are building tomorrow's leaders...",
      author: "INLD Youth Wing",
      date: "2025-08-01",
      category: "Youth",
      views: 1420,
      image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      tags: ["Youth", "Education", "Employment"]
    },
    {
      id: 4,
      title: "Women's Empowerment: Equal Opportunities for All",
      excerpt: "Our commitment to creating a gender-equal society where women have equal opportunities in all spheres of life.",
      content: "Women's empowerment is not just a policy for us, it's a commitment. From reservation in jobs to safety measures, we are working towards a gender-equal society...",
      author: "INLD Women's Wing",
      date: "2025-07-28",
      category: "Women",
      views: 890,
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      tags: ["Women Empowerment", "Gender Equality", "Safety"]
    },
    {
      id: 5,
      title: "Economic Development: Creating Jobs for Haryana",
      excerpt: "Our strategic plan to boost Haryana's economy through industrial development and job creation initiatives.",
      content: "Economic growth and job creation are our top priorities. Through industrial corridors, startup ecosystem, and skill development, we aim to make Haryana prosperous...",
      author: "Economic Advisory Team",
      date: "2025-07-25",
      category: "Economy",
      views: 1150,
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      tags: ["Economy", "Jobs", "Industrial Development"]
    }
  ];

  const categories = ['all', 'Technology', 'Agriculture', 'Youth', 'Women', 'Economy'];

  const filteredPosts = selectedCategory === 'all' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  return (
    <div className="blogs-page">
      <div className="blogs-hero">
        <div className="hero-content">
          <h1>INLD Blogs</h1>
          <p>Insights, Policies, and Vision for a Better Haryana</p>
        </div>
      </div>

      <div className="blogs-container">
        <div className="blogs-header">
          <h2>Latest Articles</h2>
          <div className="category-filter">
            {categories.map(category => (
              <button
                key={category}
                className={`filter-btn ${selectedCategory === category ? 'active' : ''}`}
                onClick={() => setSelectedCategory(category)}
              >
                {category === 'all' ? 'All Categories' : category}
              </button>
            ))}
          </div>
        </div>

        <div className="blogs-grid">
          {filteredPosts.map(post => (
            <article key={post.id} className="blog-card">
              <div className="blog-image">
                <img src={post.image} alt={post.title} />
                <div className="blog-category">{post.category}</div>
              </div>
              
              <div className="blog-content">
                <div className="blog-meta">
                  <span className="blog-author">
                    <FaUser /> {post.author}
                  </span>
                  <span className="blog-date">
                    <FaCalendarAlt /> {formatDate(post.date)}
                  </span>
                  <span className="blog-views">
                    <FaEye /> {post.views.toLocaleString()}
                  </span>
                </div>
                
                <h3 className="blog-title">{post.title}</h3>
                <p className="blog-excerpt">{post.excerpt}</p>
                
                <div className="blog-tags">
                  <FaTags className="tags-icon" />
                  {post.tags.map(tag => (
                    <span key={tag} className="blog-tag">{tag}</span>
                  ))}
                </div>
                
                <button className="read-more-btn">
                  Read More <FaArrowRight />
                </button>
              </div>
            </article>
          ))}
        </div>

        <div className="blogs-cta">
          <h3>Stay Updated</h3>
          <p>Subscribe to our newsletter to get the latest insights and policy updates</p>
          <div className="newsletter-form">
            <input type="email" placeholder="Enter your email" />
            <button type="submit">Subscribe</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogsPage;
