import { useLoaderData, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useCart from "../../hooks/useCart";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaPinterestP,
} from "react-icons/fa";
import { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import StarRating from "./StarRating";

const ProductDetails = () => {
  const item = useLoaderData();
  const {
    image,
    price,
    name,
    description,
    _id,
    category,
    discount,
    quantity,
    brand,
  } = item;

  const { user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const axiosSecure = useAxiosSecure();
  const [, refetch] = useCart();

  const [reviews, setReviews] = useState([]);

  // Calculate final price if discount exists
  // const finalPrice = category === "Offerd" && discount
  //   ? (Number(price) - (Number(price) * discount) / 100).toFixed(2)
  //   : price;
  const discountPrice = (price - price * 0.1).toFixed(2);

  useEffect(() => {
    axiosSecure.get(`/reviews/${_id}`).then((res) => setReviews(res.data));
  }, [_id, axiosSecure]);

  const handleAddToCart = () => {
    if (user && user.email) {
      const cartItem = {
        productId: _id,
        email: user.email,
        name,
        image,
        price: discountPrice, // Use discounted price for cart
      };
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

  // Review handlers remain unchanged
  const handleReviewSubmit = async (e) => {
    e.preventDefault();
    const description = e.target.review.value;

    const reviewData = {
      productId: _id,
      productName: name,
      userName: user?.displayName,
      userEmail: user?.email,
      review: description,
      date: new Date(),
    };

    const res = await axiosSecure.post("/reviews", reviewData);
    if (res.data.insertedId) {
      Swal.fire({
        icon: "success",
        title: "Review Submitted",
        showConfirmButton: false,
        timer: 1500,
      });
      setReviews((prev) => [...prev, reviewData]);
      e.target.reset();
    }
  };

  const handleDeleteReview = async (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const res = await axiosSecure.delete(`/reviews/${id}`);
        if (res.data.deletedCount > 0) {
          Swal.fire("Deleted!", "Your review has been deleted.", "success");
          setReviews((prev) => prev.filter((rev) => rev._id !== id));
        }
      }
    });
  };

  const handleEditReview = (rev) => {
    Swal.fire({
      title: "Edit Your Review",
      input: "textarea",
      inputValue: rev.review,
      showCancelButton: true,
      confirmButtonText: "Update",
    }).then(async (result) => {
      if (result.isConfirmed && result.value) {
        const res = await axiosSecure.put(`/reviews/${rev._id}`, {
          review: result.value,
        });
        if (res.data.modifiedCount > 0) {
          Swal.fire("Updated!", "Your review has been updated.", "success");
          setReviews((prev) =>
            prev.map((r) =>
              r._id === rev._id
                ? { ...r, review: result.value, date: new Date() }
                : r
            )
          );
        }
      }
    });
  };

  return (
    <div className="">
      {/* Product Info */}
      <div className="container mx-auto pt-28 pb-10 flex flex-col md:flex-row justify-center items-center space-x-10">
        <div className="">
          <img className="w-full h-96" src={image} alt="Product" />
        </div>
        <div className="space-y-2">
          <div className="border-b">
            <h2 className="text-2xl font-bold">{name}</h2>
            {category === "Offerd" ? (
              <p className="text-xl font-semibold py-2 space-x-2">
                <span className="line-through text-gray-500 mr-2">
                  ${price}
                </span>
                <span>/</span>
                <span className="text-yellow-600">${discountPrice}</span>
              </p>
            ) : (
              <p className="text-xl font-semibold py-2">${price}</p>
            )}
          </div>
          <p className="text-base font-medium">
            <span className="text-yellow-600">Stock:</span> More than {quantity}{" "}
            available
          </p>
          <p>
            Brand Name : <span className="text-yellow-600">{brand}</span>{" "}
          </p>
          <p className="text-base">{description}</p>
          <div className="flex gap-2">
            <h3 className="mt-1">Product Rating :</h3>
            <StarRating rating={4.9} />
          </div>
          <div className="justify-center py-6">
            <button
              onClick={handleAddToCart}
              className="btn btn-outline bottom-0 border-b-4 border-[#BB8506] bg-slate-100 uppercase"
            >
              <span className="text-[#BB8506]">Add to Cart</span>
            </button>
          </div>
          {/* Share Icons */}
          <div className="flex items-center gap-3 pt-4 border-t">
            <p className="font-semibold">Share it</p>
            <div className="bg-blue-600 text-white text-xl p-2 rounded-full flex items-center justify-center w-9 h-9 cursor-pointer">
              <FaFacebookF />
            </div>
            <div className="bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 text-white text-xl p-2 rounded-full flex items-center justify-center w-9 h-9 cursor-pointer">
              <FaInstagram />
            </div>
            <div className="bg-sky-500 text-white text-xl p-2 rounded-full flex items-center justify-center w-9 h-9 cursor-pointer">
              <FaTwitter />
            </div>
            <div className="bg-red-600 text-white text-xl p-2 rounded-full flex items-center justify-center w-9 h-9 cursor-pointer">
              <FaPinterestP />
            </div>
          </div>
        </div>
      </div>

      {/* Review Section */}
      <div className="container mx-auto w-3/4 mb-10">
        <Tabs>
          <TabList className="text-lg font-semibold mb-6 flex gap-6 border-b">
            <Tab>Write a Review</Tab>
            <Tab>All Reviews</Tab>
          </TabList>

          {/* Write Review */}
          <TabPanel>
            {user ? (
              <form
                onSubmit={handleReviewSubmit}
                className="space-y-4 max-w-xl"
              >
                <input
                  type="text"
                  value={user.displayName}
                  disabled
                  className="input input-bordered w-full"
                />
                <input
                  type="text"
                  value={name}
                  disabled
                  className="input input-bordered w-full"
                />
                <textarea
                  name="review"
                  required
                  placeholder="Write your review here..."
                  className="textarea textarea-bordered w-full h-28"
                ></textarea>
                <button
                  type="submit"
                  className="btn btn-outline border-b-4 border-[#BB8506] bg-slate-100 uppercase"
                >
                  Submit Review
                </button>
              </form>
            ) : (
              <p className="text-red-500">
                You must be logged in to write a review.
              </p>
            )}
          </TabPanel>

          {/* All Reviews */}
          <TabPanel>
            <div className="space-y-4">
              {reviews.length > 0 ? (
                reviews.map((rev, idx) => (
                  <div
                    key={idx}
                    className="border p-4 rounded-lg shadow-sm bg-white relative"
                  >
                    <h4 className="font-bold">{rev.userName}</h4>
                    <p className="text-sm text-gray-500">
                      {new Date(rev.date).toLocaleString()}
                    </p>
                    <p className="mt-2">{rev.review}</p>
                    {user?.email === rev.userEmail && (
                      <div className="absolute top-2 right-2 flex gap-2">
                        <button
                          onClick={() => handleEditReview(rev)}
                          className="text-blue-500 hover:underline"
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => handleDeleteReview(rev._id)}
                          className="text-red-500 hover:underline"
                        >
                          Delete
                        </button>
                      </div>
                    )}
                  </div>
                ))
              ) : (
                <p>No reviews yet.</p>
              )}
            </div>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default ProductDetails;
