import './About.css';// Make sure to create this CSS file

const About = () => {
  const blogPosts = [
    {
      title: "Our Mission",
      image: "/images/OurMission.png",
      content:
        "At Nike, our mission is to inspire and innovate. We focus on creating footwear and apparel that combine style, performance, and sustainability.",
    },
    {
      title: "Our History",
      image: "/images/history.png",
      content:
        "Founded in 1964, Nike has grown from a small shoe company to a global brand recognized for quality, innovation, and creativity.",
    },
    {
      title: "Sustainability Initiatives",
      image: "/images/sustainability.png",
      content:
        "We are committed to reducing our environmental impact by using recycled materials, sustainable manufacturing practices, and responsible sourcing.",
    },
  ];

  return (
    <section id="about" className="about-container">
      <h1>About Us</h1>
      <p className="intro">
        At Nike, we believe in creating footwear and apparel that empower your every step. Our mission is to deliver comfort, style, and innovation across the globe.
      </p>

      <div className="blog-grid">
        {blogPosts.map((post, index) => (
          <div key={index} className="blog-card">
            <img src={post.image} alt={post.title} />
            <div className="blog-content">
              <h2>{post.title}</h2>
              <p>{post.content}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default About;

