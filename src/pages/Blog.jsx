import React from 'react';
import '../blog.css';
import { Link } from 'react-router-dom';

const Blog = () => {
  const cards = Array(4).fill({
    title: "🚀 Join Our Exclusive Online Course Webinar!",
    description:
      "Boost Your Career with Our Exclusive Webinar Register Now! Are you looking to super charge your career and stand out in the competitive job market? Don’t miss our upcoming free webinar on Career Guidance & Full Stacks Web Development. This is your chance to learn from experts and gain insights that can transform your professional journey.",
    date: "27th July 2025",
    image: "/images/webinar.png",
  });

  return (
    <div className="blog-container">
      <div className="blog-back-img">
        <p>Blog</p>
      </div>
      <div className="blog-padding">
        <div className="blog-card-container">
          {cards.map((card, index) => (
            <div className="blog-cards" key={index}>
              <div className="blog-img">

                <Link to="/blogdetail">
                  <img src={card.image} alt="Webinar" />
                </Link>
              </div>
              <div className="blog-content">
                <div className="blog-title">
                  <p>{card.title}</p>
                </div>
                <div className="blog-description">
                  <p>{card.description}</p>
                </div>
                <div className="blog-date">
                  <p>{card.date}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
