
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import ProductItem from "../../Shared/Footer/ProductItem/ProductItem";
import useProduct from "../../../hooks/useProduct";

const PopularProduct = () => {

const [product] = useProduct();
const unisexProducts = product.filter((item) => item.gender === "Unisex");

  // const [product, setProduct] = useState([]);

  // useEffect(() => {
  //   fetch("/product.json")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       const unisexProducts = data.filter((item) => item.gender === "Unisex");
  //       setProduct(unisexProducts);
  //     });
  // }, []);

  return (
    <section className="mx-auto w-4/5 mb-12">
      <SectionTitle heading="From Our Product" subHeading="Popular Items" />
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
        {unisexProducts.map((item) => (
          <ProductItem key={item.id} item={item} />
        ))}
      </div>
      <button className="btn btn-outline bottom-0 border-b-4 mt-4"><span className="uppercas">View Full Product</span></button>
    </section>
  );
};

export default PopularProduct;
