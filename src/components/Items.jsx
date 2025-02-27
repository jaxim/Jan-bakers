import { useEffect, useState } from "react";
import "./Styles/Items/Items.css";

export default function Items() {
  const [items, setItems] = useState([]);
  const [page, setPage] = useState(1);
  const [totalItems, setTotalItems] = useState(0);
  const [loading, setLoading] = useState(true); // Add loading state
  const limit = 10; // Number of items per page

  useEffect(() => {
    setLoading(true); // Set loading to true before fetching data
    fetch(`http://localhost:3001/api/items?page=${page}&limit=${limit}`)
      .then((response) => response.json())
      .then((data) => {
        setItems(data.data);
        setTotalItems(data.totalItems);
        setLoading(false); // Set loading to false after data is fetched
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false); // Set loading to false in case of error
      });
  }, [page]);

  const totalPages = Math.ceil(totalItems / limit);

  return (
    <div>
      {loading ? (
        <div className="spinner">Loading...</div> // Show loading spinner
      ) : (
        <>
          <ol className="items">
            {items.length > 0 ? (
              items.map((item) => (
                <li key={item.ITEMCODE} className="item">
                  <h3>{item.ITEMNAME}</h3>
                  <p>Price: {item.RPRICE}</p>
                </li>
              ))
            ) : (
              <p>No items found.</p>
            )}
          </ol>
          <div className="pagination">
            <button onClick={() => setPage(page - 1)} disabled={page === 1}>
              Previous
            </button>
            <span>
              Page {page} of {totalPages}
            </span>
            <button
              onClick={() => setPage(page + 1)}
              disabled={page === totalPages}
            >
              Next
            </button>
          </div>
        </>
      )}
    </div>
  );
}
