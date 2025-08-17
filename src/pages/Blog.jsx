import React, { useEffect, useState } from 'react';
import '../blog.css';
import { Link } from 'react-router-dom';
import axios from 'axios';

const API_URL = 'http://localhost:5000/api/blogs'; // replace with your actual backend

const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get(API_URL);
        console.log('Blogs API response:', response.data); // debug
        setBlogs(response.data.blogs || response.data || []);
      } catch (err) {
        console.error(err);
        setError('Failed to fetch blogs.');
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  if (loading) return <p>Loading blogs...</p>;
  if (error) return <p>{error}</p>;
  if (!blogs || blogs.length === 0) return <p>No blogs found.</p>;

  return (
    <div className="blog-container">
      <div className="blog-back-img">
        <p>Blog</p>
      </div>
      <div className="blog-padding">
        <div className="blog-card-container">
          {blogs.map((blog) => (
            <div className="blog-cards" key={blog._id}>
              <div className="blog-img">
                <Link to={`/blogdetail/${blog._id}`}>
                  <img src={blog.image || '/images/default.png'} alt={blog.title} />
                </Link>
              </div>
              <div className="blog-content">
                <div className="blog-title">
                  <p>{blog.title}</p>
                </div>
                <div className="blog-description">
                  <p>{blog.shortDescription || blog.description.slice(0, 100) + '...'}</p>
                </div>
                <div className="blog-date">
                  <p>{blog.date}</p>
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
