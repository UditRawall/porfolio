import React, { useState, useEffect } from 'react';
import { Calendar } from 'lucide-react';
import './Blog.css';

interface BlogPost {
  id: number;
  date: string;
  title: string;
  image: string;
}

interface MousePosition {
  x: number;
  y: number;
}

const Blog: React.FC = () => {
  const [mousePosition, setMousePosition] = useState<MousePosition>({ x: 0, y: 0 });
  const [hoveredPost, setHoveredPost] = useState<BlogPost | null>(null);

  const blogPosts: BlogPost[] = [
    {
      id: 1,
      date: 'Apr 27, 2024',
      title: 'Add beautiful maps to your React app with MapBox GL',
      image: 'https://images.unsplash.com/photo-1569336415962-a4bd9f69cd83?w=400&h=300&fit=crop&crop=center'
    },
    {
      id: 2,
      date: 'Oct 17, 2023',
      title: 'My Desk Setup for 2023. Minimalist but functional.',
      image: 'https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=400&h=300&fit=crop&crop=center'
    },
    {
      id: 3,
      date: 'Mar 05, 2023',
      title: 'Tailwind over everything. Mocking the iOS Weather app UI',
      image: 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=400&h=300&fit=crop&crop=center'
    },
    {
      id: 4,
      date: 'Sep 01, 2021',
      title: 'How to create a COVID-19 dashboard with Python',
      image: 'https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?w=400&h=300&fit=crop&crop=center'
    },
    {
      id: 5,
      date: 'Sep 01, 2021',
      title: 'Innovating the real estate investment industry with tech',
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=400&h=300&fit=crop&crop=center'
    },
    {
      id: 6,
      date: 'Dec 15, 2019',
      title: 'This App got us 1st Place at a Microsoft Hackathon',
      image: 'https://images.unsplash.com/photo-1537432376769-00f83665b087?w=400&h=300&fit=crop&crop=center'
    }
  ];

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent): void => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    if (hoveredPost) {
      document.addEventListener('mousemove', handleMouseMove);
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, [hoveredPost]);

  

  return (
    <div className={`blog-container `}>
     

      {/* Main Content */}
      <main className="main-content">
        {/* Blog Header */}
        <div className="blog-header">
          <h1 className="blog-title">Blog</h1>
          <p className="blog-subtitle">6 posts so far. Stay tuned for more!</p>
        </div>

        {/* Blog Posts */}
        <div className="blog-posts">
          {blogPosts.map((post: BlogPost) => (
            <article
              key={post.id}
              className="blog-item"
              onMouseEnter={() => setHoveredPost(post)}
              onMouseLeave={() => setHoveredPost(null)}
            >
              <div className="blog-item-content">
                <div className="blog-date">
                  <Calendar size={16} />
                  <time>{post.date}</time>
                </div>
                <h2 className="blog-item-title">{post.title}</h2>
              </div>
            </article>
          ))}
        </div>

        {/* Newsletter Section */}
        <section className="newsletter">
          <h2 className="newsletter-title">Newsletter</h2>
          <p className="newsletter-text">
            Get personal updates and readings on topics like tech, design, productivity, programming, and more!
          </p>
          <div className="newsletter-form">
            <input
              type="email"
              placeholder="Enter your email"
              className="newsletter-input"
            />
            <button className="newsletter-button" type="button">
              Subscribe
            </button>
          </div>
        </section>
      </main>

      {/* Cursor Follow Image */}
      {hoveredPost && (
        <div
          className="cursor-image"
          style={{
            left: mousePosition.x + 20,
            top: mousePosition.y - 150,
            opacity: hoveredPost ? 1 : 0,
            transform: `translate(-50%, -50%) scale(${hoveredPost ? 1 : 0.8})`,
          }}
        >
          <img
            src={hoveredPost.image}
            alt={hoveredPost.title}
            className="cursor-image-img"
          />
          <div className="cursor-image-overlay" />
          <div className="cursor-image-text">
            <p>{hoveredPost.title}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Blog;