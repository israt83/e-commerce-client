import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import ProductCard from "../../../Components/ProductCard/ProductCard";
import PuffLoader from "react-spinners/PuffLoader";

const SearchResultsPage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const location = useLocation();

  // query parameter extract
  const query = new URLSearchParams(location.search).get("query") || "";

  useEffect(() => {
    const fetchProducts = async () => {
      if (!query) return;
      setLoading(true);
      try {
        const res = await fetch(
          `http://localhost:5001/products?query=${query}`
        );
        const data = await res.json();
        setProducts(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, [query]);

  return (
    <div>
     
      {loading && (
        <div className="flex justify-center items-center pt-28">
          <PuffLoader color="#e2b51a" size={100} />
        </div>
      )}
      {products.length > 0 ? (
        <div className="pt-24 w-4/5 mx-auto grid md:grid-cols-3 gap-8 justify-items-center">
          {products.map((product) => (
            <ProductCard key={product._id} item={product} />
          ))}
        </div>
      ) : (
        !loading && <p className="pt-24">No products found</p>
      )}
    </div>
  );
};

export default SearchResultsPage;
