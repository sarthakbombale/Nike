const Hero = () => {
  return (
    <main className="hero container">
      <div className="hero-content">
        <h1>YOUR FEET DESERVE THE BEST</h1>
        <p>
          Whether you're chasing dreams, dancing through moments, or simply unwinding after a long day, your feet deserve more than just support—they deserve pampering, protection, and pure comfort.
        </p>
        <div className="hero-btn">
          <button>Shop Now</button>
          <button>Category</button>
        </div>
        <div className="shopping">
          <p>Available On</p>
          <div className="brand-icons">
            <img src="/images/amazon.png" alt="amazon-logo" />
            <img src="/images/flipkart.png" alt="flipkart-logo" />
          </div>
        </div>
      </div>
      <div className="hero-image">
        <img src="/images/hero-image.png" alt="hero-image" />
      </div>
    </main>
  );
};

export default Hero;