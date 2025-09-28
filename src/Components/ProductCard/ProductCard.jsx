import { toast } from "react-toastify";
import useAuth from "../../hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";

import Swal from "sweetalert2";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useCart from "../../hooks/useCart";


const ProductCard = ({ item }) => {


  const { image, price, name, description ,_id } = item;
      const shortDesc =
    description.length > 60 ? description.slice(0, 60) + "..." : description;
  const {user} = useAuth();
 const navigate = useNavigate();
const location = useLocation();
const axiosSecure = useAxiosSecure();
const [,refetch] = useCart();

  const handleAddToCart = () =>{
    if(user && user.email){
      const cartItem ={
        productId :_id,
        email:user.email,
        name,
        image,
        price
      }
      axiosSecure.post('/carts',cartItem)
      .then(res =>{
        console.log(res.data);
        if(res.data.insertedId){
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${name} added to your cart`,
            showConfirmButton: false,
            timer: 1500
          });
          refetch();
        }
      })
    }
    else{
      Swal.fire({
        title: "You ar to logged in !",
        text: "Please login to add to cart?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes , login!"
      }).then((result) => {
        if (result.isConfirmed) {
          navigate('/login' ,{state:{from:location}})
        }
      });
      
    }
  }
  return (
    <div className="container mx-auto my-10 p-2">
      <div className=" bg-base-100 w-96 shadow-xl ">
        <figure className="relative">
          <img className="h-44 w-full" src={image} alt="Product" />
          {/* Price Section */}
          
            <p className=" absolute right-0 bg-slate-900 text-white mr-4 -mt-40 px-3  rounded py-1">
             
              ${price}
            </p>
           
      
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>{shortDesc}</p>
          <div className="card-actions justify-center">
            <button
              onClick={handleAddToCart}
              className="btn btn-outline bottom-0 border-b-4 border-[#BB8506] bg-slate-100 uppercase"
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
