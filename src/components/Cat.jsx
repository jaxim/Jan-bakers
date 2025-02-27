import "./Styles/Cat/Cat.css";

export default function Cat() {
  const categories = [
    {
      name: "Baking Essentials",
      img: "/Baking-Essentials.jpg",
    },
    { name: "Gift Hampers", img: "/Gift-Hampers.jpg" },
    { name: "Seasonal Specials", img: "/Seasonal-Specials.jpg" },
    { name: "Customer Favorites", img: "/Customer-Favorites.webp" },
  ];
  return (
    <div className="cat">
      <h1>Shop by Category</h1>
      <div className="cat-list">
        {categories.map((cat, index) => (
          <div key={index} className="cat-item">
            <img className="cat-item_img" src={cat.img} alt={cat.name} />
            <p className="cat-item_name">{cat.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
