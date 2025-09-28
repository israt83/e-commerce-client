import { Link } from "react-router-dom";
import Cover from "../../Shared/Cover/Cover";
import ProductItem from "../../Shared/Footer/ProductItem/ProductItem";

const ProductCategory = ({items , title ,img ,category}) => {
  return (
   <div className="pt-8">
    {/* {title && <Cover  img={img} title={title}></Cover>} */}
     {title !== "Offerd" && title && <Cover img={img} title={title} />}
     <div className=" mx-auto w-4/5 grid grid-cols-1 md:grid-cols-3 space-y-10 mt-16">
        {items.map((item) => (
          <ProductItem key={item.id} item={item} />
        ))}
      </div>
      <div className="w-3/4 mx-auto mt-8">
      <Link to={`/order/${title}`}><button className="btn btn-outline bottom-0 border-b-4"><span className="uppercase">Order now</span></button></Link>
      </div>
   </div>
  );
};

export default ProductCategory;
