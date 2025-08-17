import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import '../Blogdetail.css';

const API_URL = 'http://localhost:5000/api/blogs'; // replace with your backend

const BlogDetail = () => {
  const { id } = useParams(); // get blog _id from URL
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const response = await axios.get(`${API_URL}/${id}`);
        setBlog(response.data);
      } catch (err) {
        console.error(err);
        setError('Failed to load blog.');
      } finally {
        setLoading(false);
      }
    };

    fetchBlog();
  }, [id]);

  if (loading) return <p>Loading blog...</p>;
  if (error) return <p>{error}</p>;
  if (!blog) return <p>No blog found.</p>;

  return (
    <>
      <div className="bgdetail-image-container">
        <div className="bgdetail-back-img">
          <div className="bgdetail-description-text"><p>{blog.title}</p></div>
          <div className="bgdetail-desc"><p>{blog.description}</p></div>
          <div className="bgdetail-reg-btn"><button>{blog.buttonText}</button></div>
        </div>
      </div>

      <div className="bgdetail-image">
        <img src={blog.image || '/images/default.png'} alt={blog.title} />
      </div>

      <div className="bgdetail-intro">
        <div className="bgdetail-intro-text"><p>Presented By</p></div>
        <div className="bgdetail-company-name"><p>{blog.presentedBy}</p></div>
        <div className="bgdetail-intro-desc"><p>{blog.introDesc}</p></div>

        <div className="bgdetail-learn">
          <div className="bgdetail-learn-text"><p>🔍 What You’ll Learn:</p></div>
          <ul>{blog.learnPoints?.map((point, idx) => <li key={idx}>{point}</li>)}</ul>

          <div className="bgdetail-speakers">
            <div className="bgdetail-learn-text">🎙️ Our Expert Speakers:</div>
            <ul>{blog.speakers?.map((speaker, idx) => <li key={idx}>{speaker}</li>)}</ul>
          </div>

          <div className="bgdetail-Event-detail">
            <div className="bgdetail-learn-text"><p>📅 Event Details:</p></div>
            <ul>{blog.eventDetails?.map((detail, idx) => <li key={idx}>{detail}</li>)}</ul>

            <div className="bgdetail-attend">
              <div className="bgdetail-learn-text"><p>🔗 Why You Should Attend:</p></div>
              <ul>{blog.attendPoints?.map((point, idx) => <li key={idx}>{point}</li>)}</ul>
            </div>

            <div className="bgdetail-register"><p>{blog.registrationText}</p></div>
            <div className="bgdetail-reg-btns"><button>{blog.buttonText}</button></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogDetail;
