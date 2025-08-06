import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

const LatestNews = () => {
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
          <button className="flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all border border-gray-300 bg-white text-gray-800 hover:bg-gray-100 text-lg px-4 py-2 font-semibold">
            View All News <FaArrowRight />
          </button>
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

export default LatestNews;
