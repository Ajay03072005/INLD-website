import React, { useState } from 'react';
import '../styles/GalleryPage.css';
import { FaMapMarkerAlt, FaCalendarAlt } from 'react-icons/fa';

const GalleryPage = () => {
  const [activeTab, setActiveTab] = useState('photo');
  const [selectedVideo, setSelectedVideo] = useState(null);

  const events = [
    {
      id: 1,
      title: 'INLD Rally in Delhi',
      date: '2025-01-25',
      location: 'Ramlila Maidan, Delhi',
      image: 'https://media.newindianexpress.com/TNIE%2Fimport%2F2022%2F9%2F7%2Foriginal%2FRabri_Devi_PTI_1_Final.jpg?w=1024&auto=format%2Ccompress&fit=max',
      type: 'photo'
    },
    {
      id: 2,
      title: 'Agricultural Development Meeting',
      date: '2025-01-20',
      location: 'Hisar, Haryana',
      image: 'https://cdn.britannica.com/10/1610-050-C80C9901/Farmers-fields-Yamunanagar-India-Haryana.jpg',
      type: 'photo'
    },
    {
      id: 3,
      title: 'Indian parliment Monsoon Season 2016',
      date: '2016-06-21',
      location: 'New Delhi',
      image: 'https://media.gettyimages.com/id/578334716/photo/new-delhi-india-union-minister-m-venkaiah-naidu-with-supporters-of-inld-leader-om-praksh.jpg?s=612x612&w=0&k=20&c=qLLDeun6nSLgjnTHvyEbb6n8RqxD8I2Iz8ra5JgKb6o=',
      type: 'photo'
    },
    {
      id: 4,
      title: 'Protest against sutlej-yamuna canal link',
      date: '2017-07-10',
      location: 'Ambala, Haryana',
      image: 'https://media.gettyimages.com/id/812068560/photo/ambala-india-indian-national-lok-dal-party-workers-during-the-protest-on-syl-issue-at-saddopur.jpg?s=612x612&w=0&k=20&c=-XHsJaB4QEFkjHzeC6SnS0-6KmRSpj0sduJbzmUnIVA=',
      type: 'photo'
    },
    {
      id: 5,
      title: 'Six Janata Parivar Parties Announce Merger',
      date: '2015-04-15',
      location: 'New Delhi',
      image: 'https://media.gettyimages.com/id/469803948/photo/new-delhi-india-samajwadi-party-chief-mulayam-singh-yadav-rashtriya-janata-dal-chief-lalu.jpg?s=612x612&w=0&k=20&c=yfcys7R1LFfGesThKjtVqjAxNGrmkMhuDGcE5_iCmNQ=',
      type: 'photo'
    },
    {
      id: 6,
      title: 'Youth Employment Drive',
      date: '2025-01-15',
      location: 'Gurugram',
      image: 'https://pbs.twimg.com/media/F63uw1-aEAAN3cE?format=jpg&name=360x360',
      type: 'photo'
    },
    
    {
      id: 7,
      title: 'INLD मुस्लिम जनाजा का हिन्दू धर्म के अनुसार अंतिम संस्कार | Muslim Janaza Ka Hindu Dharm Ke Anusar Antim Sanskar',
      date: '2024-01-28',
      location: 'Haryana',
      image: 'https://img.youtube.com/vi/DHTKYfwpW8Q/maxresdefault.jpg',
      videoUrl: 'https://www.youtube.com/embed/DHTKYfwpW8Q',
      type: 'video'
    },
    {
      id: 8,
      title: 'इनेलो देश की सबसे पुरानी पार्टी है। अभय चौटाला की जनक्रांति यात्रा का भव्य स्वागत',
      date: '2024-01-25',
      location: 'Haryana',
      image: 'https://img.youtube.com/vi/fMbFMWF7EWk/sddefault.jpg',
      videoUrl: 'https://www.youtube.com/embed/fMbFMWF7EWk',
      type: 'video'
    },
    {
      id: 9,
      title: 'पूर्व डिप्टी पीएम चौधरी देवीलाल जी की 109वीं जयंती पर इनेलो का प्रदर्शन',
      date: '2023-09-25',
      location: 'Chandigarh',
      image: 'https://img.youtube.com/vi/cZ7rEr6CW_Y/sddefault.jpg',
      videoUrl: 'https://www.youtube.com/embed/cZ7rEr6CW_Y',
      type: 'video'
    },
    {
      id: 10,
      title: 'राष्ट्रीय जनसभा, कैथल | Abhay Chautala | INLD',
      date: '2024-01-28',
      location: 'Kaithal, Haryana',
      image: 'https://img.youtube.com/vi/YTae1c0Cqmg/sddefault.jpg',
      videoUrl: 'https://www.youtube.com/embed/YTae1c0Cqmg',
      type: 'video'
    },
    {
      id: 11,
      title: 'मोदी सरकार के खिलाफ इनेलो का हल्ला बोल | जनता को मिलेगी बड़ी राहत',
      date: '2023-09-08',
      location: 'Haryana',
      image: 'https://img.youtube.com/vi/5_Xz5Ao9J9g/maxresdefault.jpg',
      videoUrl: 'https://www.youtube.com/embed/5_Xz5Ao9J9g',
      type: 'video'
    }
  ];

  return (
    <div className="gallery-page">
      <div className="gallery-header">
        <h1>Media Gallery</h1>
        <p>Explore photos and videos from our events, rallies, and community programs</p>
      </div>

      <div className="gallery-tabs">
        <button 
          className={`tab ${activeTab === 'photo' ? 'active' : ''}`}
          onClick={() => setActiveTab('photo')}
        >
          Photo Gallery
        </button>
        <button 
          className={`tab ${activeTab === 'video' ? 'active' : ''}`}
          onClick={() => setActiveTab('video')}
        >
          Video Gallery
        </button>
      </div>

      <div className="gallery-grid">
        {events
          .filter(event => event.type === activeTab)
          .map(event => (
            <div key={event.id} className="gallery-card">
              <div className="card-image">
                {event.type === 'video' ? (
                  <>
                    <div className="video-thumbnail" onClick={() => setSelectedVideo(event.videoUrl)}>
                      <img src={event.image} alt={event.title} />
                      <div className="play-button">
                        <svg viewBox="0 0 24 24" fill="white">
                          <path d="M8 5v14l11-7z"/>
                        </svg>
                      </div>
                    </div>
                    <span className="media-type">Video</span>
                  </>
                ) : (
                  <>
                    <img src={event.image} alt={event.title} />
                    <span className="media-type">Photo</span>
                  </>
                )}
              </div>
              <div className="card-content">
                <h3>{event.title}</h3>
                <div className="event-meta">
                  <div className="meta-item">
                    <FaCalendarAlt className="meta-icon" />
                    {new Date(event.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: '2-digit',
                      day: '2-digit'
                    })}
                  </div>
                  <div className="meta-item">
                    <FaMapMarkerAlt className="meta-icon" />
                    {event.location}
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>

      {selectedVideo && (
        <div className="video-modal" onClick={() => setSelectedVideo(null)}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <button className="close-button" onClick={() => setSelectedVideo(null)}>×</button>
            <iframe
              src={selectedVideo}
              title="Video Player"
              width="100%"
              height="100%"
              frameBorder="0"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default GalleryPage;
