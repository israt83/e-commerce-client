import { FaEye } from "react-icons/fa";
import { Link } from "react-router-dom";

const ProductItem = ({ item }) => {
  const { image, price, name, description, _id, category, discount } = item;

  const shortDesc =
    description.length > 60 ? description.slice(0, 60) + "..." : description;

  // final price calculate only if discount exists
  // const finalPrice = discount
  //   ? (price - (price * 10) / 100).toFixed(2)
  //   : price;
  const finalPrice =
    category === "Offerd" && discount
      ? (Number(price) - (Number(price) * discount) / 100).toFixed(2)
      : price;

  return (
    <div className="relative bg-white shadow-lg md:first-letter md:w-4/5 rounded-lg overflow-hidden group">
      <div className="relative">
        <img
          className="w-full h-[200px] object-cover transition duration-300 group-hover:blur-sm"
          src={image}
          alt={name}
        />

        {/* Hover Content */}
        <div className="absolute inset-0 flex flex-col justify-between opacity-0 group-hover:opacity-100 transition duration-300">
          {/* Price top-right */}
          {category === "Offerd" && discount ? (
            <p className="text-xl font-semibold py-2 space-x-2">
              <span className="line-through text-gray-500 mr-2">${price}</span>
              <span>/</span>
              <span className="text-yellow-600">${finalPrice}</span>
            </p>
          ) : (
            <p className="text-xl font-semibold py-2">${price}</p>
          )}

          {/* Eye icon center */}
          <div className="flex justify-center items-center flex-1">
            <Link
              to={`/product/${_id}`}
              className="bg-white p-3 rounded-full shadow-lg hover:scale-110 transition"
            >
              <div className="tooltip-container">
                <div className="relative">
                  <div className="group peer relative z-10 p-1">
                    <FaEye className="text-yellow-600 text-xl" />
                  </div>
                  <div className="absolute left-1/2 w-20 -translate-x-1/2 rounded bg-white py-2 text-sm font-medium opacity-0 before:absolute before:-bottom-2 before:left-1/2 before:size-4 before:-translate-x-1/2 before:rotate-45 before:bg-white peer-hover:bottom-[3.3rem] peer-hover:opacity-100 peer-hover:duration-500">
                    <p className="text-center text-yellow-600">View Details</p>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>

      {/* Card Content */}
      <div className="p-3">
        <h3 className="uppercase font-semibold mt-2">{name}</h3>
        <p className="text-sm text-[#737373] text-left">{shortDesc}</p>
      </div>
    </div>
  );
};

export default ProductItem;
