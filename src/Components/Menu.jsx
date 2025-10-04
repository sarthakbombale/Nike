import './Menu.css'; // ✅ Correct import for CSS

const Menu = () => {
  const products = [
    { name: "Nike Air Zoom", img: "/images/product1.png" },
    { name: "Nike Revolution", img: "/images/product2.png" },
    { name: "Nike Pegasus", img: "/images/product3.png" },
    { name: "Nike Vaporfly", img: "/images/product4.png" },
    { name: "Nike Vaporfly", img: "/images/product4.png" },{ name: "Nike Pegasus", img: "/images/product3.png" },
    { name: "Nike Revolution", img: "/images/product2.png" },
    { name: "Nike Air Zoom", img: "/images/product1.png" },
    
    
  ];

  return (
    <section id="menu" className="menu-section">
      <div className="container">
        <h2>Menu</h2>
        <p>Explore our latest Nike collections and trending shoes.</p>

        <div className="menu-grid">
          {products.map((product, index) => (
            <div
              key={index}
              className="menu-item"
              style={{ backgroundImage: `url(${product.img})` }}
            >
              <h3>{product.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Menu;
