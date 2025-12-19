import "./Categories.css";

const Categories = () => {
  return (
    <section className="categories">
      <h2 className="categories-title">Categories</h2>
      <div className="categories-grid">
        <button className="category-button img1">
          <div className="card1">
            <span>CARDS</span>
          </div>
        </button>
        <button className="category-button img2">
          <div className="card2">
            <span>STRATEGY</span>
          </div>
        </button>
        <button className="category-button img3">
          <span>ACTION</span>
        </button>
        <button className="category-button img4">
          <span>ABSTRACT</span>
        </button>
        <button className="category-button img5">
          <span>ROLL & WRITE</span>
        </button>
        <button className="category-button img6">
          <span>OTHER</span>
        </button>
      </div>
    </section>
  );
};

export default Categories;
