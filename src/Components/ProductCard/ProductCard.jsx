import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useCart from "../../hooks/useCart";
import { FaEye } from "react-icons/fa";

const ProductCard = ({ item }) => {
  const { image, price, name, description, _id } = item;
  const shortDesc =
    description.length > 60 ? description.slice(0, 60) + "..." : description;

  const { user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const axiosSecure = useAxiosSecure();
  const [, refetch] = useCart();

  const handleAddToCart = () => {
    if (user && user.email) {
      const cartItem = { productId: _id, email: user.email, name, image, price };
      axiosSecure.post("/carts", cartItem).then((res) => {
        if (res.data.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${name} added to your cart`,
            showConfirmButton: false,
            timer: 1500,
          });
          refetch();
        }
      });
    } else {
      Swal.fire({
        title: "You are not logged in!",
        text: "Please login to add to cart?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, login!",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", { state: { from: location } });
        }
      });
    }
  };

  return (
    <div className="container mx-auto my-10 p-2">
      <div className="bg-base-100 w-96 shadow-xl group relative overflow-hidden rounded-lg">
        <figure className="relative">
          <img
            className="h-44 w-full object-cover transition duration-500 group-hover:blur-sm"
            src={image}
            alt="Product"
          />

          {/* Eye Icon with Tooltip */}
          <Link
            to={`/product/${_id}`}
            className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-500"
          >
            <div className="relative">
              {/* Icon */}
              <div className="peer cursor-pointer bg-white p-3 rounded-full shadow-lg hover:scale-110 transition">
                <FaEye className="text-yellow-600 text-2xl" />
              </div>

              {/* Tooltip */}
              <div className="absolute left-1/2 w-24 -translate-x-1/2 rounded bg-white py-2 text-sm font-medium text-yellow-600 opacity-0 shadow-lg before:absolute before:-bottom-2 before:left-1/2 before:size-3 before:-translate-x-1/2 before:rotate-45 before:bg-white peer-hover:bottom-[3.3rem] peer-hover:opacity-100 peer-hover:duration-300">
                <p className="text-center">View Details</p>
              </div>
            </div>
          </Link>

          {/* Price Section */}
          <p className="absolute right-0 top-0 bg-slate-900 text-white mr-4 mt-4 px-3 rounded py-1">
            ${price}
          </p>
        </figure>

        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>{shortDesc}</p>
          <div className="card-actions justify-center">
            <button
              onClick={handleAddToCart}
              className="btn btn-outline border-b-4 border-[#BB8506] bg-slate-100 uppercase"
            >
              <span className="text-[#BB8506]">Add to Cart</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
